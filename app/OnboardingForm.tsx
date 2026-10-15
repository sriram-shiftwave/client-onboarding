"use client";

import { useState, useEffect } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Send,
  MessageSquare,
  Globe,
  Clock,
  Shield,
  Layers,
  FileCheck2,
  ArrowRight,
  RotateCcw,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import {
  OnboardingFormData,
  DEFAULT_FORM_DATA,
  SECTION_META,
  WEBSITE_CATEGORIES,
  PAGE_ESTIMATES,
  FEATURES,
  ASSET_ITEMS,
  TIMELINE_OPTIONS,
} from "./types";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d3c3ceb3-b660-49d2-bf2c-07f0e7047445";

// ─────────────────────────────────────────────────────────────────────────────
// Form Field Components
// ─────────────────────────────────────────────────────────────────────────────

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
  required?: boolean;
  hint?: string;
}

function InputField({
  label,
  id,
  icon: Icon,
  error,
  required,
  hint,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
        >
          {label}
          {required && <span className="text-neutral-900 dark:text-neutral-100 ml-1 font-bold">*</span>}
        </label>
        {hint && <span className="text-xs text-neutral-400 dark:text-neutral-500">{hint}</span>}
      </div>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          className={cn(
            "w-full rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
            "py-2.5 pr-3.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-neutral-900 dark:focus:border-neutral-100",
            "transition-all duration-150",
            Icon ? "pl-10" : "pl-3.5",
            error
              ? "border-red-500 dark:border-red-500 focus:ring-red-500"
              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">{error}</p>}
    </div>
  );
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
}

function TextareaField({
  label,
  id,
  error,
  required,
  hint,
  ...props
}: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
        >
          {label}
          {required && <span className="text-neutral-900 dark:text-neutral-100 ml-1 font-bold">*</span>}
        </label>
        {hint && <span className="text-xs text-neutral-400 dark:text-neutral-500">{hint}</span>}
      </div>
      <textarea
        id={id}
        className={cn(
          "w-full rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
          "p-3 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
          "focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-neutral-900 dark:focus:border-neutral-100",
          "transition-all duration-150 resize-y min-h-[90px]",
          error
            ? "border-red-500 dark:border-red-500 focus:ring-red-500"
            : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">{error}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Form Section Props
// ─────────────────────────────────────────────────────────────────────────────

interface SectionProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: string | boolean | string[]) => void;
  errors: Partial<Record<string, string>>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1: Company & Contact
// ─────────────────────────────────────────────────────────────────────────────

function Section1({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          id="fullName"
          icon={User}
          placeholder="e.g. Jane Smith"
          value={data.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          error={errors.fullName}
          required
          autoComplete="name"
        />
        <InputField
          label="Company / Brand Name"
          id="companyName"
          icon={Building2}
          placeholder="e.g. Acme Studio"
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          error={errors.companyName}
          required
          autoComplete="organization"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Email Address"
          id="email"
          icon={Mail}
          placeholder="jane@company.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          required
          type="email"
          autoComplete="email"
        />
        <InputField
          label="Phone / WhatsApp Number"
          id="phone"
          icon={Phone}
          placeholder="+1 (555) 000-0000"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={errors.phone}
          required
          type="tel"
          autoComplete="tel"
        />
      </div>

      <TextareaField
        label="Business Overview & Website Goals"
        id="businessOverview"
        placeholder="Briefly describe what your business does, who your target audience is, and the primary objective of this new website (e.g., generate sales leads, showcase work, sell physical products, establish authority)..."
        value={data.businessOverview}
        onChange={(e) => onChange("businessOverview", e.target.value)}
        error={errors.businessOverview}
        required
        rows={4}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2: Website Type & Scope
// ─────────────────────────────────────────────────────────────────────────────

function Section2({ data, onChange, errors }: SectionProps) {
  const isCustomCategory = data.websiteCategory === "other";
  const isCustomPages = data.estimatedPages === "custom";
  const isCustomFeatures = data.features.includes("custom");

  const toggleFeature = (id: string) => {
    if (data.features.includes(id)) {
      onChange(
        "features",
        data.features.filter((f) => f !== id)
      );
    } else {
      onChange("features", [...data.features, id]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Website Category <span className="text-neutral-900 dark:text-neutral-100 font-bold">*</span>
          </label>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Select one</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {WEBSITE_CATEGORIES.map((cat) => {
            const isSelected = data.websiteCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => onChange("websiteCategory", cat.value)}
                className={cn(
                  "p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-150",
                  isSelected
                    ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/60 ring-1 ring-neutral-900 dark:ring-white"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {cat.label}
                  </span>
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5",
                      isSelected
                        ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                        : "border-neutral-300 dark:border-neutral-700"
                    )}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-900" />}
                  </div>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* None of the above - custom category input */}
        {isCustomCategory && (
          <div className="pt-2 animate-fade-slide">
            <InputField
              label="Describe Your Custom Website Scope"
              id="websiteCategoryCustom"
              placeholder="e.g. A client portal with real-time analytics and document signing"
              value={data.websiteCategoryCustom ?? ""}
              onChange={(e) => onChange("websiteCategoryCustom", e.target.value)}
              error={errors.websiteCategoryCustom}
              required
            />
          </div>
        )}
        {errors.websiteCategory && (
          <p className="text-xs text-red-600 dark:text-red-400">{errors.websiteCategory}</p>
        )}
      </div>

      {/* Estimated Pages */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Estimated Number of Pages <span className="text-neutral-900 dark:text-neutral-100 font-bold">*</span>
          </label>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Estimate</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {PAGE_ESTIMATES.map((opt) => {
            const isSelected = data.estimatedPages === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange("estimatedPages", opt.value)}
                className={cn(
                  "p-3 rounded-xl border text-center transition-all duration-150",
                  isSelected
                    ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/60 ring-1 ring-neutral-900 dark:ring-white"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                )}
              >
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {opt.label}
                </div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                  {opt.sublabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom page scope */}
        {isCustomPages && (
          <div className="pt-2 animate-fade-slide">
            <InputField
              label="Describe Your Page Count or Architecture"
              id="estimatedPagesCustom"
              placeholder="e.g. 15 pages + dynamic blog posts and team member profiles"
              value={data.estimatedPagesCustom ?? ""}
              onChange={(e) => onChange("estimatedPagesCustom", e.target.value)}
              error={errors.estimatedPagesCustom}
              required
            />
          </div>
        )}
        {errors.estimatedPages && (
          <p className="text-xs text-red-600 dark:text-red-400">{errors.estimatedPages}</p>
        )}
      </div>

      {/* Features Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Key Features & Integrations
          </label>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Optional</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {FEATURES.map((feature) => {
            const isChecked = data.features.includes(feature.id);
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => toggleFeature(feature.id)}
                className={cn(
                  "p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all duration-150",
                  isChecked
                    ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/60"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                    isChecked
                      ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                      : "border-neutral-300 dark:border-neutral-700"
                  )}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {feature.label}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom features text */}
        {isCustomFeatures && (
          <div className="pt-2 animate-fade-slide">
            <TextareaField
              label="Describe Custom Features or Integrations"
              id="customFeaturesText"
              placeholder="e.g. HubSpot CRM sync, custom quotation calculator, customer login area, multi-language switcher..."
              value={data.customFeaturesText ?? ""}
              onChange={(e) => onChange("customFeaturesText", e.target.value)}
              rows={3}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3: Asset Matrix
// ─────────────────────────────────────────────────────────────────────────────

function Section3({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          Asset Readiness Matrix <span className="text-neutral-900 dark:text-neutral-100 font-bold">*</span>
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Let us know which assets you already have on hand and which you would like us to produce or configure.
        </p>
      </div>

      <div className="space-y-3">
        {ASSET_ITEMS.map((item) => {
          const value = data[item.id] as string;
          const hasError = !!errors[item.id];

          return (
            <div
              key={item.id}
              className={cn(
                "p-4 rounded-xl border bg-white dark:bg-neutral-900 transition-all",
                hasError
                  ? "border-red-400 dark:border-red-500"
                  : "border-neutral-200 dark:border-neutral-800"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="sm:max-w-[45%]">
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {item.label}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:w-[50%]">
                  <button
                    type="button"
                    onClick={() => onChange(item.id, "have")}
                    className={cn(
                      "px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all",
                      value === "have"
                        ? "border-neutral-900 dark:border-white bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold"
                        : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700"
                    )}
                  >
                    {item.haveLabel}
                  </button>

                  <button
                    type="button"
                    onClick={() => onChange(item.id, "need")}
                    className={cn(
                      "px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all",
                      value === "need"
                        ? "border-neutral-900 dark:border-white bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold"
                        : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700"
                    )}
                  >
                    {item.needLabel}
                  </button>
                </div>
              </div>
              {hasError && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  Please select whether you have this asset or need it provided.
                </p>
              )}
            </div>
          );
        })}
      </div>

      <TextareaField
        label="Additional Asset Notes (Optional)"
        id="assetNotes"
        placeholder="e.g. Existing brand assets are hosted on Google Drive; domain is registered with Cloudflare..."
        value={data.assetNotes ?? ""}
        onChange={(e) => onChange("assetNotes", e.target.value)}
        rows={2}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4: References & Timeline (Budget Tier REMOVED)
// ─────────────────────────────────────────────────────────────────────────────

function Section4({ data, onChange, errors }: SectionProps) {
  const isCustomTimeline = data.launchTimeline === "custom";

  return (
    <div className="space-y-8">
      {/* Reference Websites */}
      <div className="space-y-2">
        <TextareaField
          label="Inspiration & Reference Websites"
          id="referenceUrls"
          placeholder="Paste 1–3 website links you like and briefly describe what you like about them (e.g. 'stripe.com for typography, linear.app for interactions and simplicity')..."
          value={data.referenceUrls}
          onChange={(e) => onChange("referenceUrls", e.target.value)}
          rows={3}
          hint="Optional but highly recommended"
        />
      </div>

      {/* Expected Timeline */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Target Launch Timeline <span className="text-neutral-900 dark:text-neutral-100 font-bold">*</span>
          </label>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Select one</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {TIMELINE_OPTIONS.map((opt) => {
            const isSelected = data.launchTimeline === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange("launchTimeline", opt.value)}
                className={cn(
                  "p-3.5 rounded-xl border text-left flex items-start justify-between transition-all duration-150",
                  isSelected
                    ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/60 ring-1 ring-neutral-900 dark:ring-white"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900"
                )}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {opt.label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                      ({opt.sublabel})
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5",
                    isSelected
                      ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                      : "border-neutral-300 dark:border-neutral-700"
                  )}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-900" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* None of the above - custom deadline */}
        {isCustomTimeline && (
          <div className="pt-2 animate-fade-slide">
            <InputField
              label="Specify Your Target Launch Date or Timeline"
              id="launchTimelineCustom"
              placeholder="e.g. Must launch before product demo on November 15th"
              value={data.launchTimelineCustom ?? ""}
              onChange={(e) => onChange("launchTimelineCustom", e.target.value)}
              error={errors.launchTimelineCustom}
              required
            />
          </div>
        )}
        {errors.launchTimeline && (
          <p className="text-xs text-red-600 dark:text-red-400">{errors.launchTimeline}</p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5: Review & Working Terms
// ─────────────────────────────────────────────────────────────────────────────

function Section5({ data, onChange, errors }: SectionProps) {
  const selectedCategory = WEBSITE_CATEGORIES.find((c) => c.value === data.websiteCategory);
  const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === data.launchTimeline);
  const selectedFeatures = FEATURES.filter((f) => data.features.includes(f.id));

  return (
    <div className="space-y-6">
      {/* Project Summary Card */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Scope Summary
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-neutral-500 dark:text-neutral-400">Client: </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.fullName || "—"} ({data.companyName || "—"})
            </span>
          </div>
          <div>
            <span className="text-neutral-500 dark:text-neutral-400">Email: </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.email || "—"}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 dark:text-neutral-400">Website Type: </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.websiteCategory === "other"
                ? `Custom: ${data.websiteCategoryCustom || "Not specified"}`
                : selectedCategory?.label || "—"}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 dark:text-neutral-400">Estimated Pages: </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.estimatedPages === "custom"
                ? `Custom: ${data.estimatedPagesCustom || "Not specified"}`
                : `${data.estimatedPages} Pages`}
            </span>
          </div>
          <div className="sm:col-span-2">
            <span className="text-neutral-500 dark:text-neutral-400">Timeline: </span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.launchTimeline === "custom"
                ? `Custom Target: ${data.launchTimelineCustom || "Not specified"}`
                : `${selectedTimeline?.label || "—"} (${selectedTimeline?.sublabel || ""})`}
            </span>
          </div>
          {selectedFeatures.length > 0 && (
            <div className="sm:col-span-2">
              <span className="text-neutral-500 dark:text-neutral-400">Features: </span>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {selectedFeatures.map((f) => f.label).join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mandatory Freelance Terms & Liability Protection */}
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Freelance Working Terms & Liability Agreement <span className="text-neutral-900 dark:text-neutral-100 font-bold">*</span>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Please acknowledge the standard project working agreements before sending your request.
          </p>
        </div>

        {/* Checkbox 1: Revisions & 50% milestone */}
        <label
          htmlFor="agreedToRevisionTerms"
          className={cn(
            "p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all",
            data.agreedToRevisionTerms
              ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/40"
              : errors.agreedToRevisionTerms
              ? "border-red-400 dark:border-red-500 bg-red-50/20"
              : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300"
          )}
        >
          <input
            id="agreedToRevisionTerms"
            type="checkbox"
            checked={data.agreedToRevisionTerms}
            onChange={(e) => onChange("agreedToRevisionTerms", e.target.checked)}
            className="sr-only"
          />
          <div
            className={cn(
              "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
              data.agreedToRevisionTerms
                ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "border-neutral-300 dark:border-neutral-700"
            )}
          >
            {data.agreedToRevisionTerms && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <div className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Design Revisions & Milestone Advance:
            </span>{" "}
            Client agrees that the proposal quote includes 2 comprehensive rounds of design revisions and requires a 50% advance milestone deposit prior to starting design and development work (with the remaining 50% balance payable upon final staging approval before live domain deployment).
          </div>
        </label>
        {errors.agreedToRevisionTerms && (
          <p className="text-xs text-red-600 dark:text-red-400 -mt-2">
            {errors.agreedToRevisionTerms}
          </p>
        )}

        {/* Checkbox 2: Third-party costs & limited liability */}
        <label
          htmlFor="agreedToLiabilityTerms"
          className={cn(
            "p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all",
            data.agreedToLiabilityTerms
              ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/40"
              : errors.agreedToLiabilityTerms
              ? "border-red-400 dark:border-red-500 bg-red-50/20"
              : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300"
          )}
        >
          <input
            id="agreedToLiabilityTerms"
            type="checkbox"
            checked={data.agreedToLiabilityTerms}
            onChange={(e) => onChange("agreedToLiabilityTerms", e.target.checked)}
            className="sr-only"
          />
          <div
            className={cn(
              "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
              data.agreedToLiabilityTerms
                ? "border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "border-neutral-300 dark:border-neutral-700"
            )}
          >
            {data.agreedToLiabilityTerms && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <div className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Third-Party Costs & Legal Liability Limitation:
            </span>{" "}
            Client agrees that ongoing third-party subscriptions and fees (domain renewal, web hosting accounts, paid plugins/APIs, payment processor merchant fees) are billed directly to the client, and the designer's maximum cumulative legal liability under any circumstance is strictly limited to the total professional service fee paid for this project.
          </div>
        </label>
        {errors.agreedToLiabilityTerms && (
          <p className="text-xs text-red-600 dark:text-red-400 -mt-2">
            {errors.agreedToLiabilityTerms}
          </p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Success Screen
// ─────────────────────────────────────────────────────────────────────────────

function SuccessScreen({
  data,
  onReset,
}: {
  data: OnboardingFormData;
  onReset: () => void;
}) {
  const selectedCategory = WEBSITE_CATEGORIES.find((c) => c.value === data.websiteCategory);
  const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === data.launchTimeline);

  const getWhatsAppMessage = () => {
    const text = `*New Website Onboarding & Quote Request*
• Client: ${data.fullName}
• Company: ${data.companyName}
• Email: ${data.email}
• Phone: ${data.phone}
• Category: ${data.websiteCategory === "other" ? data.websiteCategoryCustom : selectedCategory?.label}
• Pages: ${data.estimatedPages === "custom" ? data.estimatedPagesCustom : data.estimatedPages}
• Timeline: ${data.launchTimeline === "custom" ? data.launchTimelineCustom : selectedTimeline?.label}
• Business Overview: ${data.businessOverview}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4 animate-fade-slide">
      <div className="p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center space-y-6">
        <div className="w-12 h-12 rounded-full border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 mx-auto flex items-center justify-center">
          <Check className="w-6 h-6 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Intake Received
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-medium text-neutral-900 dark:text-neutral-100">{data.fullName}</span>. We have received the project specifications for <span className="font-medium text-neutral-900 dark:text-neutral-100">{data.companyName}</span> and will prepare your tailored quote within 24–48 hours.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-500">Contact Email:</span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">{data.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Scope Type:</span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.websiteCategory === "other" ? data.websiteCategoryCustom : selectedCategory?.label}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Target Timeline:</span>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {data.launchTimeline === "custom" ? data.launchTimelineCustom : selectedTimeline?.label}
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Send Summary via WhatsApp
          </a>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" />
            Submit Another Request
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Onboarding Form Component
// ─────────────────────────────────────────────────────────────────────────────

export default function OnboardingForm() {
  const [formData, setFormData] = useState<OnboardingFormData>(DEFAULT_FORM_DATA);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [themeMode, setThemeMode] = useState<"system" | "light" | "dark">("system");

  const totalSteps = 5;

  // Handle system theme / toggle
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else if (themeMode === "light") {
      root.classList.remove("dark");
    } else {
      // Follow system
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }
  }, [themeMode]);

  const handleChange = (
    field: keyof OnboardingFormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<string, string>> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.companyName.trim()) newErrors.companyName = "Company or brand name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone or WhatsApp number is required";
      if (!formData.businessOverview.trim()) {
        newErrors.businessOverview = "Please provide a brief business and website overview";
      }
    }

    if (step === 2) {
      if (!formData.websiteCategory) {
        newErrors.websiteCategory = "Please select a website category";
      } else if (formData.websiteCategory === "other" && !formData.websiteCategoryCustom?.trim()) {
        newErrors.websiteCategoryCustom = "Please describe your custom website scope";
      }

      if (!formData.estimatedPages) {
        newErrors.estimatedPages = "Please select an estimated page count";
      } else if (formData.estimatedPages === "custom" && !formData.estimatedPagesCustom?.trim()) {
        newErrors.estimatedPagesCustom = "Please describe your estimated page count";
      }
    }

    if (step === 3) {
      ASSET_ITEMS.forEach((item) => {
        if (!formData[item.id]) {
          newErrors[item.id] = "Please make a selection";
        }
      });
    }

    if (step === 4) {
      if (!formData.launchTimeline) {
        newErrors.launchTimeline = "Please select a target timeline";
      } else if (formData.launchTimeline === "custom" && !formData.launchTimelineCustom?.trim()) {
        newErrors.launchTimelineCustom = "Please specify your target launch deadline";
      }
    }

    if (step === 5) {
      if (!formData.agreedToRevisionTerms) {
        newErrors.agreedToRevisionTerms = "You must accept the revision and milestone deposit agreement";
      }
      if (!formData.agreedToLiabilityTerms) {
        newErrors.agreedToLiabilityTerms = "You must accept the third-party costs and liability terms";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpToStep = (step: number) => {
    // Allow jumping to steps already visited or validated
    if (step < currentStep || validateStep(currentStep)) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const buildEmailSummary = () => {
    const selectedCategory = WEBSITE_CATEGORIES.find((c) => c.value === formData.websiteCategory);
    const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === formData.launchTimeline);
    const selectedFeatures = FEATURES.filter((f) => formData.features.includes(f.id));

    const assetSummary = ASSET_ITEMS.map((item) => {
      const val = formData[item.id] === "have" ? "READY (Client has it)" : "NEEDED (Designer to provide)";
      return `• ${item.label}: ${val}`;
    }).join("\n");

    return `
NEW CLIENT WEBSITE ONBOARDING & QUOTE REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CLIENT & COMPANY DETAILS
• Full Name: ${formData.fullName}
• Company / Brand: ${formData.companyName}
• Email: ${formData.email}
• Phone / WhatsApp: ${formData.phone}

Business Overview:
${formData.businessOverview}

2. WEBSITE SCOPE
• Category: ${formData.websiteCategory === "other" ? `Custom - ${formData.websiteCategoryCustom}` : selectedCategory?.label}
• Pages: ${formData.estimatedPages === "custom" ? `Custom - ${formData.estimatedPagesCustom}` : `${formData.estimatedPages} Pages`}
• Features Selected:
${selectedFeatures.length > 0 ? selectedFeatures.map((f) => `  ✓ ${f.label}`).join("\n") : "  (None selected)"}
${formData.customFeaturesText ? `• Custom Feature Notes: ${formData.customFeaturesText}` : ""}

3. ASSET READINESS MATRIX
${assetSummary}
${formData.assetNotes ? `• Asset Notes: ${formData.assetNotes}` : ""}

4. REFERENCES & TIMELINE
• Reference Links: ${formData.referenceUrls || "None provided"}
• Target Timeline: ${formData.launchTimeline === "custom" ? `Specific Deadline - ${formData.launchTimelineCustom}` : `${selectedTimeline?.label} (${selectedTimeline?.sublabel})`}

5. WORKING TERMS ACKNOWLEDGED
✓ 2 Rounds of Revisions & 50% Milestone Advance: AGREED
✓ Third-Party Costs & Liability Cap: AGREED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted at: ${new Date().toISOString()}
`.trim();
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setSubmitStatus("loading");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Website Onboarding & Quote Request - ${formData.companyName}`,
        from_name: `${formData.fullName} (${formData.companyName})`,
        email: formData.email,
        message: buildEmailSummary(),
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // If network fails, provide mailto fallback automatically
      const mailtoSubject = encodeURIComponent(`New Website Onboarding - ${formData.companyName}`);
      const mailtoBody = encodeURIComponent(buildEmailSummary());
      window.open(`mailto:?subject=${mailtoSubject}&body=${mailtoBody}`, "_blank");
      setSubmitStatus("success");
    }
  };

  if (submitStatus === "success") {
    return (
      <SuccessScreen
        data={formData}
        onReset={() => {
          setFormData(DEFAULT_FORM_DATA);
          setCurrentStep(1);
          setSubmitStatus("idle");
          setErrors({});
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  const currentMeta = SECTION_META[currentStep - 1];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Minimal Top Header */}
      <header className="border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs">
              O
            </div>
            <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Client Onboarding
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Step indicator */}
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              {currentStep} / {totalSteps}
            </span>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={() => {
                if (themeMode === "system") setThemeMode("light");
                else if (themeMode === "light") setThemeMode("dark");
                else setThemeMode("system");
              }}
              title={`Theme: ${themeMode} (click to toggle)`}
              className="w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {themeMode === "light" && <Sun className="w-3.5 h-3.5" />}
              {themeMode === "dark" && <Moon className="w-3.5 h-3.5" />}
              {themeMode === "system" && <Laptop className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1">
        {/* Intro */}
        <div className="mb-8 space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Website Project Onboarding
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Please complete this intake form so we can evaluate your project scope and provide an accurate proposal tailored to your business needs.
          </p>
        </div>

        {/* Minimal Clickable Stepper */}
        <div className="mb-8">
          <div className="grid grid-cols-5 gap-2">
            {SECTION_META.map((meta) => {
              const isActive = meta.id === currentStep;
              const isPassed = meta.id < currentStep;

              return (
                <button
                  key={meta.id}
                  type="button"
                  onClick={() => jumpToStep(meta.id)}
                  className="flex flex-col gap-1 text-left group transition-all"
                >
                  <div
                    className={cn(
                      "h-1 rounded-full transition-all duration-200",
                      isActive
                        ? "bg-neutral-900 dark:bg-white"
                        : isPassed
                        ? "bg-neutral-400 dark:bg-neutral-600"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    )}
                  />
                  <div className="hidden sm:flex items-center justify-between pt-0.5">
                    <span
                      className={cn(
                        "text-[11px] font-medium transition-colors",
                        isActive
                          ? "text-neutral-900 dark:text-neutral-100 font-semibold"
                          : isPassed
                          ? "text-neutral-600 dark:text-neutral-400"
                          : "text-neutral-400 dark:text-neutral-600"
                      )}
                    >
                      {meta.stepLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm">
          {/* Card Header */}
          <div className="border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Step 0{currentStep} / 0{totalSteps}
                </span>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-0.5">
                  {currentMeta.title}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {currentMeta.subtitle}
                </p>
              </div>

              {/* Back button at top if on step > 1 */}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}
            </div>
          </div>

          {/* Step Body */}
          <div className="animate-fade-slide min-h-[320px]">
            {currentStep === 1 && (
              <Section1 data={formData} onChange={handleChange} errors={errors} />
            )}
            {currentStep === 2 && (
              <Section2 data={formData} onChange={handleChange} errors={errors} />
            )}
            {currentStep === 3 && (
              <Section3 data={formData} onChange={handleChange} errors={errors} />
            )}
            {currentStep === 4 && (
              <Section4 data={formData} onChange={handleChange} errors={errors} />
            )}
            {currentStep === 5 && (
              <Section5 data={formData} onChange={handleChange} errors={errors} />
            )}
          </div>

          {/* Action Bar / Navigation Buttons */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 mt-8 flex items-center justify-between gap-3">
            {/* Dedicated Back Button */}
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div /> // Spacer
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity ml-auto"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitStatus === "loading"}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-opacity ml-auto",
                  submitStatus === "loading"
                    ? "bg-neutral-400 dark:bg-neutral-600 text-white cursor-not-allowed"
                    : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90"
                )}
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 spinner" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-6 text-center text-xs text-neutral-400 dark:text-neutral-500 space-y-1">
        <p>All client submissions are confidential and encrypted in transit.</p>
        <p>© {new Date().getFullYear()} Professional Web Design & Development Services.</p>
      </footer>
    </div>
  );
}
