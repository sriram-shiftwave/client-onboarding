"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  ArrowLeft,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Code,
  Eye,
  FileText,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { OnboardingFormData } from "../types";
import {
  generateAdminEmailHtml,
  generateAdminEmailPlainText,
  generateClientThankYouHtml,
  generateClientThankYouPlainText,
} from "../lib/emailTemplates";

const SAMPLE_PROJECT: OnboardingFormData = {
  fullName: "Elena Rostova",
  companyName: "Lumina Architectural Studio",
  email: "elena@luminastudio.design",
  phone: "+1 (415) 890-2341",
  businessOverview:
    "We are a boutique sustainable architecture and interior design firm based in San Francisco. We need an elevated, minimalist portfolio website to showcase our recent residential and commercial projects to high-end prospective clients and press publications.",
  websiteCategory: "multi-page-business",
  estimatedPages: "6-10",
  features: ["contact-form", "whatsapp", "booking", "seo-maps"],
  customFeaturesText: "Interactive project gallery with filterable materials and case study layouts.",
  brandLogo: "have",
  websiteCopy: "need",
  photos: "have",
  domainName: "have",
  webHosting: "need",
  assetNotes:
    "Brand guidelines and high-resolution architectural photography ready on Google Drive. Need help with punchy headline copywriting and setting up fast CDN hosting.",
  referenceUrls:
    "1. https://olsonkundig.com - love the generous negative space and photography focus\n2. https://snøhetta.com - minimal typography and editorial grid\n3. https://studio-mcgee.com - clean inquiry workflow",
  launchTimeline: "standard",
  agreedToRevisionTerms: true,
  agreedToLiabilityTerms: true,
};

export default function EmailPreviewPage() {
  const [activeTab, setActiveTab] = useState<"client" | "admin">("client");
  const [viewFormat, setViewFormat] = useState<"preview" | "html" | "text">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [copied, setCopied] = useState<boolean>(false);

  const currentAppUrl =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : (process.env.NEXT_PUBLIC_APP_URL || "https://client-onboarding-scope.vercel.app");

  const clientHtml = generateClientThankYouHtml(SAMPLE_PROJECT, currentAppUrl);
  const clientText = generateClientThankYouPlainText(SAMPLE_PROJECT, currentAppUrl);

  const adminHtml = generateAdminEmailHtml(SAMPLE_PROJECT, currentAppUrl);
  const adminText = generateAdminEmailPlainText(SAMPLE_PROJECT, currentAppUrl);

  const currentHtml = activeTab === "client" ? clientHtml : adminHtml;
  const currentText = activeTab === "client" ? clientText : adminText;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2.5 py-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Form</span>
            </Link>
            <div className="h-4 w-px bg-stone-200 dark:bg-stone-800" />
            <h1 className="text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-600" />
              Email Template Studio
            </h1>
          </div>

          {/* Action to Copy Current Content */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(viewFormat === "text" ? currentText : currentHtml)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : viewFormat === "text" ? "Copy Plain Text" : "Copy HTML Code"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Control Bar */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Template Switcher Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 self-start">
            <button
              onClick={() => setActiveTab("client")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "client"
                  ? "bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Client Thank-You Email
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "admin"
                  ? "bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Admin Notification Email
            </button>
          </div>

          {/* Format & Viewport Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            {/* View Format */}
            <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs">
              <button
                onClick={() => setViewFormat("preview")}
                className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                  viewFormat === "preview"
                    ? "bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
                title="Visual Preview"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visual</span>
              </button>
              <button
                onClick={() => setViewFormat("html")}
                className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                  viewFormat === "html"
                    ? "bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
                title="HTML Source Code"
              >
                <Code className="w-3.5 h-3.5" />
                <span>HTML</span>
              </button>
              <button
                onClick={() => setViewFormat("text")}
                className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                  viewFormat === "text"
                    ? "bg-white dark:bg-stone-900 font-medium text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
                title="Plain-Text Version"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Plain Text</span>
              </button>
            </div>

            {/* Device View Width Toggle (only relevant in visual preview) */}
            {viewFormat === "preview" && (
              <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`p-1.5 rounded-lg transition-all ${
                    deviceView === "desktop"
                      ? "bg-white dark:bg-stone-900 text-orange-600 shadow-sm"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                  title="Desktop View (640px)"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`p-1.5 rounded-lg transition-all ${
                    deviceView === "mobile"
                      ? "bg-white dark:bg-stone-900 text-orange-600 shadow-sm"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                  title="Mobile View (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center">
        {/* Template Overview Card */}
        <div className="w-full mb-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-xs text-stone-600 dark:text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              {activeTab === "client" ? "✦ Client Thank-You & Confirmation Email" : "✦ Admin Intake Notification Email"}
            </span>
            <p className="text-[11px] text-stone-500 mt-0.5">
              {activeTab === "client"
                ? "Sent automatically to the client after onboarding submission. Outlines their project snapshot and 3-step timeline."
                : "Sent to your studio inbox with client contact details, 1-click email/WhatsApp reply links, and asset readiness matrix."}
            </p>
          </div>
          <div className="text-[11px] font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">
            Domain: {currentAppUrl}
          </div>
        </div>

        {/* Visual Render View */}
        {viewFormat === "preview" && (
          <div
            className={`w-full transition-all duration-300 flex justify-center ${
              deviceView === "mobile" ? "max-w-[400px]" : "max-w-2xl"
            }`}
          >
            <div className="w-full rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-xl bg-[#f6f5f4]">
              {/* Fake Email Client Chrome */}
              <div className="bg-stone-200 dark:bg-stone-800 px-4 py-2 border-b border-stone-300 dark:border-stone-700 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  <span className="ml-2 font-medium">
                    {activeTab === "client"
                      ? `Subject: Project Intake Confirmation - ${SAMPLE_PROJECT.companyName}`
                      : `Subject: New Project Onboarding - ${SAMPLE_PROJECT.companyName}`}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono text-stone-400">
                  {deviceView}
                </span>
              </div>

              {/* Rendered HTML inside iframe to ensure pure email isolation */}
              <iframe
                title="Email Preview"
                srcDoc={currentHtml}
                className="w-full h-[760px] border-none bg-white"
                sandbox="allow-same-origin allow-popups"
              />
            </div>
          </div>
        )}

        {/* HTML Source View */}
        {viewFormat === "html" && (
          <div className="w-full max-w-4xl rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-900 text-stone-100 p-4 font-mono text-xs overflow-x-auto shadow-lg">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-stone-400 text-[11px]">
              <span>HTML Source Code (Ready for Web3Forms, Resend, SendGrid, or Mailchimp)</span>
              <button
                onClick={() => handleCopy(currentHtml)}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy Code"}
              </button>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-stone-300">
              {currentHtml}
            </pre>
          </div>
        )}

        {/* Plain-Text View */}
        {viewFormat === "text" && (
          <div className="w-full max-w-2xl rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 font-mono text-xs overflow-x-auto shadow-md">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100 dark:border-stone-800 text-stone-500 text-[11px]">
              <span>Plain-Text Fallback Content</span>
              <button
                onClick={() => handleCopy(currentText)}
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy Text"}
              </button>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-stone-800 dark:text-stone-200">
              {currentText}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
