"use client";

import { useState, useEffect } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Send,
  MessageCircle,
  Star,
  Sparkles,
  Globe,
  Clock,
  Shield,
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
  BUDGET_TIERS,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────────────────────────────────────

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1: Company & Contact Details
// ─────────────────────────────────────────────────────────────────────────────

interface SectionProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: string | boolean | string[]) => void;
  errors: Partial<Record<keyof OnboardingFormData, string>>;
}

function InputField({
  label,
  id,
  icon: Icon,
  error,
  required,
  ...props
}: {
  label: string;
  id: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
      >
        {label}
        {required && <span className="text-rose-500 text-xs">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          className={cn(
            "w-full rounded-xl border bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100",
            "py-3 pr-4 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500",
            "transition-all duration-200",
            Icon ? "pl-10" : "pl-4",
            error
              ? "border-rose-400 bg-rose-50/30 dark:bg-rose-900/10"
              : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600"
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1 text-xs text-rose-500 mt-0.5">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  label,
  id,
  error,
  required,
  hint,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
      >
        {label}
        {required && <span className="text-rose-500 text-xs">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">{hint}</p>}
      <textarea
        id={id}
        className={cn(
          "w-full rounded-xl border bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100",
          "px-4 py-3 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500",
          "transition-all duration-200 resize-none",
          error
            ? "border-rose-400 bg-rose-50/30"
            : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600"
        )}
        {...props}
      />
      {error && (
        <p className="flex items-center gap-1 text-xs text-rose-500 mt-0.5">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function Section1({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Full Name"
          id="fullName"
          icon={User}
          placeholder="Jane Smith"
          value={data.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          error={errors.fullName}
          required
          autoComplete="name"
          type="text"
        />
        <InputField
          label="Company / Brand Name"
          id="companyName"
          icon={Building2}
          placeholder="Acme Corporation"
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          error={errors.companyName}
          required
          autoComplete="organization"
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Email Address"
          id="email"
          icon={Mail}
          placeholder="jane@company.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          required
          autoComplete="email"
          type="email"
          inputMode="email"
        />
        <InputField
          label="Phone / WhatsApp Number"
          id="phone"
          icon={Phone}
          placeholder="+1 234 567 8900"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={errors.phone}
          required
          autoComplete="tel"
          type="tel"
          inputMode="tel"
        />
      </div>
      <TextareaField
        label="Business Overview"
        id="businessOverview"
        placeholder="Tell us: What does your business do, who are your customers, and what is the main goal of this website? (e.g., generate leads, sell products, showcase a portfolio)"
        value={data.businessOverview}
        onChange={(e) => onChange("businessOverview", e.target.value)}
        error={errors.businessOverview}
        required
        hint="Help us understand your business so we can build the perfect website for you."
        rows={4}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2: Website Type & Scope
// ─────────────────────────────────────────────────────────────────────────────

export function Section2({ data, onChange, errors }: SectionProps) {
  const toggleFeature = (featureId: string) => {
    const current = data.features;
    const updated = current.includes(featureId)
      ? current.filter((f) => f !== featureId)
      : [...current, featureId];
    onChange("features", updated);
  };

  return (
    <div className="space-y-8">
      {/* Website Category */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Website Category
          </h3>
          <span className="text-rose-500 text-xs">*</span>
        </div>
        {errors.websiteCategory && (
          <p className="flex items-center gap-1 text-xs text-rose-500">
            <AlertCircle className="w-3 h-3" />
            {errors.websiteCategory}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {WEBSITE_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => onChange("websiteCategory", cat.value)}
              className={cn(
                "flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all duration-200",
                "hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30",
                data.websiteCategory === cat.value
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 shadow-md shadow-indigo-100 dark:shadow-indigo-900/20"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50"
              )}
              aria-pressed={data.websiteCategory === cat.value}
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <p className={cn(
                  "text-sm font-semibold",
                  data.websiteCategory === cat.value
                    ? "text-indigo-700 dark:text-indigo-300"
                    : "text-slate-800 dark:text-slate-200"
                )}>
                  {cat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              {data.websiteCategory === cat.value && (
                <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-indigo-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Estimated Pages */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Estimated Number of Pages
          </h3>
          <span className="text-rose-500 text-xs">*</span>
        </div>
        {errors.estimatedPages && (
          <p className="flex items-center gap-1 text-xs text-rose-500">
            <AlertCircle className="w-3 h-3" />
            {errors.estimatedPages}
          </p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PAGE_ESTIMATES.map((page) => (
            <button
              key={page.value}
              type="button"
              onClick={() => onChange("estimatedPages", page.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 p-4 rounded-xl border-2 text-center transition-all duration-200",
                "hover:border-indigo-400 hover:shadow-sm",
                data.estimatedPages === page.value
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50"
              )}
              aria-pressed={data.estimatedPages === page.value}
            >
              <span className={cn(
                "text-lg font-bold",
                data.estimatedPages === page.value
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-slate-300"
              )}>
                {page.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{page.sublabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Required Features
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Select all features you need (optional — select none if basic site)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FEATURES.map((feature) => {
            const isSelected = data.features.includes(feature.id);
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => toggleFeature(feature.id)}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 group",
                  "hover:border-indigo-400 hover:shadow-sm",
                  isSelected
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50"
                )}
                aria-pressed={isSelected}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">{feature.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-semibold",
                    isSelected ? "text-indigo-700 dark:text-indigo-300" : "text-slate-800 dark:text-slate-200"
                  )}>
                    {feature.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={cn(
                  "w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all",
                  isSelected
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-slate-300 dark:border-slate-600"
                )}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3: Asset Matrix
// ─────────────────────────────────────────────────────────────────────────────

export function Section3({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <span className="font-semibold text-slate-700 dark:text-slate-300">📋 Quick Inventory: </span>
        For each item below, let us know if you already have it ready or if you need us to provide/set it up. This directly affects the project scope and pricing.
      </p>
      <div className="space-y-3">
        {ASSET_ITEMS.map((item) => {
          const value = data[item.id] as string;
          const error = errors[item.id];
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-xl border-2 p-4 transition-all duration-200",
                error ? "border-rose-300 dark:border-rose-700" : "border-slate-200 dark:border-slate-700"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 sm:flex-1 min-w-0">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {item.label}
                    </p>
                    {error && (
                      <p className="flex items-center gap-1 text-xs text-rose-500 mt-0.5">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col xs:flex-row gap-2 sm:flex-shrink-0">
                  <label className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 text-xs font-medium",
                    "hover:border-emerald-400",
                    value === "have"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                      : "border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/50"
                  )}>
                    <input
                      type="radio"
                      name={item.id}
                      value="have"
                      checked={value === "have"}
                      onChange={() => onChange(item.id, "have")}
                      className="sr-only"
                    />
                    <CheckCircle2 className={cn(
                      "w-4 h-4 flex-shrink-0",
                      value === "have" ? "text-emerald-500" : "text-slate-300 dark:text-slate-600"
                    )} />
                    {item.haveLabel}
                  </label>
                  <label className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 text-xs font-medium",
                    "hover:border-indigo-400",
                    value === "need"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                      : "border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/50"
                  )}>
                    <input
                      type="radio"
                      name={item.id}
                      value="need"
                      checked={value === "need"}
                      onChange={() => onChange(item.id, "need")}
                      className="sr-only"
                    />
                    <Sparkles className={cn(
                      "w-4 h-4 flex-shrink-0",
                      value === "need" ? "text-indigo-500" : "text-slate-300 dark:text-slate-600"
                    )} />
                    {item.needLabel}
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4: References, Timeline & Budget
// ─────────────────────────────────────────────────────────────────────────────

export function Section4({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-8">
      {/* Reference URLs */}
      <TextareaField
        label="Reference / Inspiration Websites"
        id="referenceUrls"
        placeholder={`1. https://example.com — I love their clean layout and how they present their services\n2. https://another-site.com — The color scheme and photography style appeals to me\n3. https://third-site.com — Their booking flow is exactly what I'm looking for`}
        value={data.referenceUrls}
        onChange={(e) => onChange("referenceUrls", e.target.value)}
        error={errors.referenceUrls}
        hint="Share 1–3 websites you admire and briefly describe what you like about each. This helps us match your vision."
        rows={5}
      />

      {/* Timeline */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Expected Launch Timeline
          </h3>
          <span className="text-rose-500 text-xs">*</span>
        </div>
        {errors.launchTimeline && (
          <p className="flex items-center gap-1 text-xs text-rose-500">
            <AlertCircle className="w-3 h-3" />
            {errors.launchTimeline}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TIMELINE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange("launchTimeline", opt.value)}
              className={cn(
                "flex flex-col items-center gap-2 p-5 rounded-xl border-2 text-center transition-all duration-200",
                "hover:shadow-md",
                data.launchTimeline === opt.value
                  ? `${opt.selectedBorder} ${opt.selectedBg} shadow-sm`
                  : `${opt.border} bg-white dark:bg-slate-900/50`
              )}
              aria-pressed={data.launchTimeline === opt.value}
            >
              <span className="text-3xl">{opt.icon}</span>
              <div>
                <p className={cn(
                  "text-sm font-bold",
                  data.launchTimeline === opt.value ? opt.color : "text-slate-700 dark:text-slate-300"
                )}>
                  {opt.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {opt.sublabel}
                </p>
              </div>
              {data.launchTimeline === opt.value && (
                <CheckCircle2 className={cn("w-5 h-5", opt.color)} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Estimated Budget Tier
            </h3>
            <span className="text-rose-500 text-xs">*</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Price ranges are approximate guides. Final quote depends on your specific requirements.
          </p>
        </div>
        {errors.budgetTier && (
          <p className="flex items-center gap-1 text-xs text-rose-500">
            <AlertCircle className="w-3 h-3" />
            {errors.budgetTier}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BUDGET_TIERS.map((tier) => (
            <button
              key={tier.value}
              type="button"
              onClick={() => onChange("budgetTier", tier.value)}
              className={cn(
                "flex flex-col gap-3 p-5 rounded-xl border-2 text-left transition-all duration-200 relative overflow-hidden",
                "hover:shadow-lg",
                data.budgetTier === tier.value
                  ? "border-indigo-500 shadow-md shadow-indigo-100 dark:shadow-indigo-900/20"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50"
              )}
              aria-pressed={data.budgetTier === tier.value}
            >
              {tier.popular && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3" />
                  Popular
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br flex-shrink-0",
                  tier.gradient
                )}>
                  {tier.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {tier.label}
                  </p>
                  <p className={cn(
                    "text-xs font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                    tier.gradient
                  )}>
                    {tier.range}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {tier.description}
              </p>
              <ul className="space-y-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {data.budgetTier === tier.value && (
                <div className={cn(
                  "absolute inset-0 rounded-[11px] bg-gradient-to-br opacity-5 pointer-events-none",
                  tier.gradient
                )} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5: Terms & Submit
// ─────────────────────────────────────────────────────────────────────────────

export function Section5({ data, onChange, errors }: SectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/50 dark:to-indigo-900/10 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-500" />
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
            Freelance Working Terms & Liability Protection
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Please read and confirm the following working terms before submitting your quote request. These protect both parties and ensure a smooth project delivery.
        </p>

        {/* Term 1 */}
        <label className={cn(
          "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group",
          data.agreedToRevisionTerms
            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
            : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900/30"
        )}>
          <div className={cn(
            "w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all",
            data.agreedToRevisionTerms
              ? "bg-indigo-500 border-indigo-500"
              : "border-slate-300 dark:border-slate-600"
          )}>
            {data.agreedToRevisionTerms && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <input
            type="checkbox"
            className="sr-only"
            checked={data.agreedToRevisionTerms}
            onChange={(e) => onChange("agreedToRevisionTerms", e.target.checked)}
          />
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
              Design Revision & Payment Milestone Agreement
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I understand and agree that the quoted price includes <strong>2 rounds of design revisions</strong>. A <strong>50% advance deposit</strong> is required to commence work. The remaining 50% balance is due and payable before the website goes live. Additional revisions beyond the included rounds may incur extra charges.
            </p>
            {errors.agreedToRevisionTerms && (
              <p className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                {errors.agreedToRevisionTerms}
              </p>
            )}
          </div>
        </label>

        {/* Term 2 */}
        <label className={cn(
          "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group",
          data.agreedToLiabilityTerms
            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
            : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900/30"
        )}>
          <div className={cn(
            "w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all",
            data.agreedToLiabilityTerms
              ? "bg-indigo-500 border-indigo-500"
              : "border-slate-300 dark:border-slate-600"
          )}>
            {data.agreedToLiabilityTerms && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <input
            type="checkbox"
            className="sr-only"
            checked={data.agreedToLiabilityTerms}
            onChange={(e) => onChange("agreedToLiabilityTerms", e.target.checked)}
          />
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
              Third-Party Costs & Liability Limitation Agreement
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I understand and agree that <strong>third-party costs</strong> (including domain registration, web hosting, premium plugins, stock photography, and payment gateway fees) are <strong>paid directly by the client</strong> and are not included in the design fee. Furthermore, the designer&apos;s maximum legal liability for any claim arising from this project is strictly limited to the <strong>total fee paid for the project</strong>.
            </p>
            {errors.agreedToLiabilityTerms && (
              <p className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                {errors.agreedToLiabilityTerms}
              </p>
            )}
          </div>
        </label>
      </div>

      {/* Summary reminder */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
        <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong className="font-semibold">What happens next?</strong> After submission, you will receive a confirmation email. We will review your requirements and send a detailed, itemized quote within <strong>24–48 business hours</strong>. No payment is required at this stage.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress Stepper
// ─────────────────────────────────────────────────────────────────────────────

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full">
      {/* Mobile: simple progress bar */}
      <div className="sm:hidden space-y-2 mb-6">
        <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium text-indigo-600 dark:text-indigo-400">
            Step {currentStep} of {totalSteps}
          </span>
          <span>{SECTION_META[currentStep - 1].title}</span>
        </div>
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: dot stepper */}
      <div className="hidden sm:block relative mb-10">
        {/* Background track */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 mx-8" />
        {/* Progress fill */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out mx-8"
          style={{ width: `calc(${progress}% * (1 - 16/${totalSteps * 100}))` }}
        />
        {/* Steps */}
        <div className="relative flex justify-between">
          {SECTION_META.map((section) => {
            const isCompleted = section.id < currentStep;
            const isCurrent = section.id === currentStep;
            return (
              <div key={section.id} className="flex flex-col items-center gap-2 group">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 z-10",
                    isCompleted
                      ? "bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50"
                      : isCurrent
                      ? "bg-white dark:bg-slate-900 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-lg shadow-indigo-100 dark:shadow-indigo-900/50 scale-110"
                      : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400"
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    section.id
                  )}
                </div>
                <div className="text-center">
                  <p className={cn(
                    "text-xs font-semibold whitespace-nowrap",
                    isCurrent
                      ? "text-indigo-600 dark:text-indigo-400"
                      : isCompleted
                      ? "text-slate-600 dark:text-slate-400"
                      : "text-slate-400 dark:text-slate-500"
                  )}>
                    {section.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Success Screen
// ─────────────────────────────────────────────────────────────────────────────

interface SuccessScreenProps {
  data: OnboardingFormData;
  onReset: () => void;
}

export function SuccessScreen({ data, onReset }: SuccessScreenProps) {
  const selectedFeatures = FEATURES.filter((f) => data.features.includes(f.id));
  const selectedCategory = WEBSITE_CATEGORIES.find((c) => c.value === data.websiteCategory);
  const selectedBudget = BUDGET_TIERS.find((b) => b.value === data.budgetTier);
  const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === data.launchTimeline);

  const whatsappMessage = encodeURIComponent(
    `Hi! I just submitted a website onboarding form. Here's a quick summary:\n\n` +
    `👤 *Name:* ${data.fullName}\n` +
    `🏢 *Company:* ${data.companyName}\n` +
    `📧 *Email:* ${data.email}\n` +
    `📱 *Phone:* ${data.phone}\n\n` +
    `🌐 *Website Type:* ${selectedCategory?.label ?? data.websiteCategory}\n` +
    `📄 *Pages:* ${data.estimatedPages}\n` +
    `⚡ *Features:* ${selectedFeatures.map((f) => f.label).join(", ") || "None selected"}\n\n` +
    `💰 *Budget:* ${selectedBudget?.range ?? data.budgetTier}\n` +
    `⏱️ *Timeline:* ${selectedTimeline?.label ?? data.launchTimeline} (${selectedTimeline?.sublabel ?? ""})\n\n` +
    `📝 *Business:* ${data.businessOverview.slice(0, 150)}${data.businessOverview.length > 150 ? "..." : ""}\n\n` +
    `Looking forward to your quote! 🚀`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20 dark:from-slate-950 dark:via-indigo-950/20 dark:to-violet-950/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-float-in">
          {/* Header gradient */}
          <div className="bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 p-8 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 success-pulse">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Quote Request Submitted! 🎉
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base">
              Thank you, <strong>{data.fullName}</strong>! We&apos;ve received your onboarding form and will review your requirements carefully.
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* What's next */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                What Happens Next
              </h3>
              <div className="space-y-2">
                {[
                  { icon: "📧", text: `A confirmation has been sent to ${data.email}` },
                  { icon: "🔍", text: "We will review your project requirements in detail" },
                  { icon: "💬", text: "Expect a detailed, itemized quote within 24–48 business hours" },
                  { icon: "🤝", text: "We'll schedule a brief call if needed to clarify any details" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission summary */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50/50 dark:from-indigo-900/20 dark:to-violet-900/10 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-800/50 space-y-3">
              <h3 className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
                Your Submission Summary
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-slate-500 dark:text-slate-400">Website Type</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {selectedCategory?.icon} {selectedCategory?.label}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400">Budget Range</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {selectedBudget?.icon} {selectedBudget?.range}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400">Timeline</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {selectedTimeline?.icon} {selectedTimeline?.label} ({selectedTimeline?.sublabel})
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400">Features Selected</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {selectedFeatures.length > 0 ? `${selectedFeatures.length} feature${selectedFeatures.length > 1 ? "s" : ""}` : "Basic site"}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Send Summary via WhatsApp
              </a>
              <button
                type="button"
                onClick={onReset}
                className="flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 text-sm"
              >
                Submit Another Form
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
          Having trouble? Email us directly at{" "}
          <a href="mailto:hello@yourdesign.com" className="text-indigo-500 hover:underline">
            hello@yourdesign.com
          </a>
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────

export function validateSection(section: number, data: OnboardingFormData): Partial<Record<keyof OnboardingFormData, string>> {
  const errors: Partial<Record<keyof OnboardingFormData, string>> = {};

  if (section === 1) {
    if (!data.fullName.trim()) errors.fullName = "Please enter your full name";
    if (!data.companyName.trim()) errors.companyName = "Please enter your company or brand name";
    if (!data.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!data.phone.trim()) errors.phone = "Phone/WhatsApp number is required";
    if (!data.businessOverview.trim()) {
      errors.businessOverview = "Please describe your business and goals";
    } else if (data.businessOverview.trim().length < 30) {
      errors.businessOverview = "Please provide at least 30 characters to help us understand your needs";
    }
  }

  if (section === 2) {
    if (!data.websiteCategory) errors.websiteCategory = "Please select a website category";
    if (!data.estimatedPages) errors.estimatedPages = "Please select the estimated number of pages";
  }

  if (section === 3) {
    const assetFields = ["brandLogo", "websiteCopy", "photos", "domainName", "webHosting"] as const;
    for (const field of assetFields) {
      if (!data[field]) {
        errors[field] = "Please make a selection";
      }
    }
  }

  if (section === 4) {
    if (!data.launchTimeline) errors.launchTimeline = "Please select your expected timeline";
    if (!data.budgetTier) errors.budgetTier = "Please select a budget tier";
  }

  if (section === 5) {
    if (!data.agreedToRevisionTerms) {
      errors.agreedToRevisionTerms = "You must agree to the revision and payment terms";
    }
    if (!data.agreedToLiabilityTerms) {
      errors.agreedToLiabilityTerms = "You must agree to the liability limitation terms";
    }
  }

  return errors;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Multi-Step Form
// ─────────────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>(DEFAULT_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof OnboardingFormData, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const totalSteps = 5;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleChange = (
    field: keyof OnboardingFormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const goNext = () => {
    const sectionErrors = validateSection(currentStep, formData);
    if (Object.keys(sectionErrors).length > 0) {
      setErrors(sectionErrors);
      // Scroll to first error
      setTimeout(() => {
        const firstError = document.querySelector("[data-error]");
        firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return;
    }
    setErrors({});
    setCurrentStep((s) => Math.min(s + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setErrors({});
    setCurrentStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buildEmailMessage = (): string => {
    const selectedFeatures = FEATURES.filter((f) => formData.features.includes(f.id));
    const selectedCategory = WEBSITE_CATEGORIES.find((c) => c.value === formData.websiteCategory);
    const selectedBudget = BUDGET_TIERS.find((b) => b.value === formData.budgetTier);
    const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === formData.launchTimeline);
    const assetSummary = ASSET_ITEMS.map((item) => {
      const val = formData[item.id as keyof OnboardingFormData] as string;
      return `${item.icon} ${item.label}: ${val === "have" ? item.haveLabel : val === "need" ? item.needLabel : "Not specified"}`;
    }).join("\n");

    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 NEW WEBSITE ONBOARDING & QUOTE REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SECTION 1: COMPANY & CONTACT DETAILS
──────────────────────────────────────
• Full Name: ${formData.fullName}
• Company/Brand: ${formData.companyName}
• Email: ${formData.email}
• Phone/WhatsApp: ${formData.phone}

Business Overview:
${formData.businessOverview}

📋 SECTION 2: WEBSITE TYPE & SCOPE
──────────────────────────────────────
• Website Category: ${selectedCategory?.label ?? formData.websiteCategory}
• Estimated Pages: ${formData.estimatedPages}
• Features Required:
${selectedFeatures.length > 0 ? selectedFeatures.map((f) => `  ✓ ${f.label}`).join("\n") : "  • No special features selected (basic site)"}

📋 SECTION 3: ASSET MATRIX
──────────────────────────────────────
${assetSummary}

📋 SECTION 4: REFERENCES, TIMELINE & BUDGET
──────────────────────────────────────
• Reference/Inspiration URLs:
${formData.referenceUrls || "None provided"}

• Launch Timeline: ${selectedTimeline?.label ?? formData.launchTimeline} (${selectedTimeline?.sublabel ?? ""})
• Budget Tier: ${selectedBudget?.label ?? formData.budgetTier} — ${selectedBudget?.range ?? ""}

📋 SECTION 5: TERMS ACKNOWLEDGED
──────────────────────────────────────
✓ Design Revision & Payment Milestone Agreement: AGREED
✓ Third-Party Costs & Liability Limitation Agreement: AGREED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted on: ${new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
  };

  const handleSubmit = async () => {
    // Validate section 5 before submit
    const sectionErrors = validateSection(5, formData);
    if (Object.keys(sectionErrors).length > 0) {
      setErrors(sectionErrors);
      return;
    }

    setSubmitStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Fallback: open mailto link
      const subject = encodeURIComponent(
        `New Website Onboarding & Quote Request - ${formData.companyName}`
      );
      const body = encodeURIComponent(buildEmailMessage());
      window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
      setSubmitStatus("success");
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Website Onboarding & Quote Request - ${formData.companyName}`,
        from_name: `${formData.fullName} (${formData.companyName})`,
        email: formData.email,
        message: buildEmailMessage(),
        // Honeypot
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
        throw new Error(result.message ?? "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again or use the WhatsApp fallback."
      );
      setSubmitStatus("error");
    }
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_DATA);
    setCurrentStep(1);
    setSubmitStatus("idle");
    setErrors({});
    setErrorMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitStatus === "success") {
    return <SuccessScreen data={formData} onReset={handleReset} />;
  }

  const currentSection = SECTION_META[currentStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20 dark:from-slate-950 dark:via-indigo-950/20 dark:to-violet-950/10">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Globe className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Professional Web Design</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
            Website Onboarding &<br className="hidden sm:block" />{" "}
            <span className="text-indigo-200">Quote Request</span>
          </h1>
          <p className="text-indigo-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Complete this form so we can understand your vision and deliver an accurate, detailed quote — no generic pricing, just a proposal tailored to your exact needs.
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { icon: "⏱️", label: "~5 min to complete" },
              { icon: "🔒", label: "Your data is private" },
              { icon: "💬", label: "Quote in 24–48 hrs" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-1.5 text-xs text-indigo-200">
                <span>{stat.icon}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Form container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Stepper */}
        <Stepper currentStep={currentStep} totalSteps={totalSteps} />

        {/* Form card */}
        <div
          key={currentStep}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-slide-up"
        >
          {/* Section header */}
          <div className={cn(
            "bg-gradient-to-r p-6 sm:p-8 text-white",
            currentSection.color
          )}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                {currentSection.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-0.5">
                  Step {currentStep} of {totalSteps}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold">
                  {currentSection.title}
                </h2>
                <p className="text-white/80 text-sm mt-0.5">
                  {currentSection.description}
                </p>
              </div>
            </div>
          </div>

          {/* Section body */}
          <div className="p-6 sm:p-8">
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

            {/* Error banner for submission errors */}
            {submitStatus === "error" && (
              <div className="mt-6 flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl">
                <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">
                    Submission Failed
                  </p>
                  <p className="text-xs text-rose-600 dark:text-rose-400 mt-0.5">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation footer */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 1}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 w-full sm:w-auto justify-center",
                currentStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="text-xs text-slate-400 dark:text-slate-500 hidden sm:block">
              {currentStep < totalSteps ? (
                <span>All fields marked <span className="text-rose-400">*</span> are required</span>
              ) : (
                <span>Review your information before submitting</span>
              )}
            </div>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={goNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 text-sm w-full sm:w-auto justify-center"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitStatus === "loading"}
                className={cn(
                  "flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl transition-all duration-200 shadow-lg text-sm w-full sm:w-auto justify-center",
                  submitStatus === "loading"
                    ? "bg-slate-400 cursor-not-allowed text-white"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-emerald-200 dark:shadow-emerald-900/50 hover:shadow-xl"
                )}
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 spinner" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Quote Request
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 space-y-2">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Your information is private and will only be used to prepare your quote.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {currentYear} Professional Web Design Services. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
