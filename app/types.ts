// ─────────────────────────────────────────────────────────────────────────────
// Form Data Types & Constants
// ─────────────────────────────────────────────────────────────────────────────

export interface OnboardingFormData {
  // Section 1: Company & Contact
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  businessOverview: string;

  // Section 2: Website Type & Scope
  websiteCategory: string;
  websiteCategoryCustom?: string;
  estimatedPages: string;
  estimatedPagesCustom?: string;
  features: string[];
  customFeaturesText?: string;

  // Section 3: Asset Matrix
  brandLogo: string;
  websiteCopy: string;
  photos: string;
  domainName: string;
  webHosting: string;
  assetNotes?: string;

  // Section 4: References & Timeline
  referenceUrls: string;
  launchTimeline: string;
  launchTimelineCustom?: string;

  // Section 5: Terms
  agreedToRevisionTerms: boolean;
  agreedToLiabilityTerms: boolean;
}

export const WEBSITE_CATEGORIES = [
  {
    value: "landing-page",
    label: "Single-Page Landing Page",
    description: "Focused page designed for high-converting lead generation or product launches",
  },
  {
    value: "multi-page-business",
    label: "Multi-Page Business Website",
    description: "Comprehensive corporate presence with company info, services, and team details",
  },
  {
    value: "ecommerce",
    label: "E-Commerce Store",
    description: "Online catalog, shopping cart, and secure customer checkout",
  },
  {
    value: "custom-web-app",
    label: "Custom Web App / Portal",
    description: "Interactive dashboard, member portal, or specialized application workflow",
  },
  {
    value: "redesign",
    label: "Website Redesign",
    description: "Modernizing and upgrading an existing site's design, speed, and user experience",
  },
  {
    value: "other",
    label: "None of the above / Custom Scope",
    description: "A unique website concept or custom requirement not covered by the standard options",
  },
] as const;

export const PAGE_ESTIMATES = [
  { value: "1", label: "1 Page", sublabel: "Single landing page" },
  { value: "3-5", label: "3–5 Pages", sublabel: "Essential company website" },
  { value: "6-10", label: "6–10 Pages", sublabel: "Full multi-section website" },
  { value: "10+", label: "10+ Pages", sublabel: "Extensive site or portal" },
  { value: "custom", label: "None of the above", sublabel: "Describe your custom scope" },
] as const;

export const FEATURES = [
  {
    id: "contact-form",
    label: "Contact & Lead Capture Form",
    description: "Collect validated enquiries and route notifications to your inbox",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Live Chat Integration",
    description: "One-click chat button to let visitors message directly on WhatsApp",
  },
  {
    id: "payment",
    label: "Online Payment Gateway",
    description: "Accept credit cards, debit cards, Apple Pay, Stripe, or local gateways",
  },
  {
    id: "booking",
    label: "Appointment / Booking Calendar",
    description: "Automated self-service appointment scheduling with calendar synchronization",
  },
  {
    id: "cms",
    label: "Content Management System (CMS)",
    description: "Admin panel to update blog posts, services, or text without a developer",
  },
  {
    id: "seo",
    label: "SEO Foundations & Google Maps",
    description: "Meta tags, schema markup, Google Maps embed, and search indexing",
  },
  {
    id: "custom",
    label: "None of the above / Custom Features",
    description: "Specify any custom API integrations, user accounts, or proprietary tools",
  },
] as const;

export const ASSET_ITEMS = [
  {
    id: "brandLogo" as keyof OnboardingFormData,
    label: "Brand Logo & Visual Identity",
    description: "Vector logo files, brand style guide, color palette, and typography",
    haveLabel: "I have it ready",
    needLabel: "I need you to create / provide it",
  },
  {
    id: "websiteCopy" as keyof OnboardingFormData,
    label: "Website Text & Copywriting",
    description: "Headlines, service descriptions, about us text, and call-to-actions",
    haveLabel: "I will provide the copy",
    needLabel: "I need copywriting services",
  },
  {
    id: "photos" as keyof OnboardingFormData,
    label: "Product & Business Photography",
    description: "High-resolution photos of your products, premises, team, or services",
    haveLabel: "I have high-res photos ready",
    needLabel: "Need curated stock / AI visuals",
  },
  {
    id: "domainName" as keyof OnboardingFormData,
    label: "Domain Name (e.g., yourbrand.com)",
    description: "The web address visitors type to access your website",
    haveLabel: "I already own the domain",
    needLabel: "I need assistance acquiring one",
  },
  {
    id: "webHosting" as keyof OnboardingFormData,
    label: "Web Hosting Infrastructure",
    description: "The server or cloud platform where your website runs",
    haveLabel: "I have hosting setup",
    needLabel: "I need you to configure hosting",
  },
] as const;

export const TIMELINE_OPTIONS = [
  {
    value: "urgent",
    label: "Urgent",
    sublabel: "< 1 Week",
    description: "High-priority expedited turnaround",
  },
  {
    value: "standard",
    label: "Standard",
    sublabel: "2–3 Weeks",
    description: "Optimal balance of design exploration & delivery",
  },
  {
    value: "flexible",
    label: "Flexible",
    sublabel: "1 Month+",
    description: "Open timeline with phased rollouts",
  },
  {
    value: "custom",
    label: "None of the above",
    sublabel: "Specific Deadline",
    description: "Fixed event launch or custom schedule",
  },
] as const;

export const SECTION_META = [
  {
    id: 1,
    title: "Company & Contact",
    subtitle: "Your contact details & business overview",
    stepLabel: "Contact",
  },
  {
    id: 2,
    title: "Website Scope",
    subtitle: "Website category, estimated pages, and functionality",
    stepLabel: "Scope",
  },
  {
    id: 3,
    title: "Asset Readiness",
    subtitle: "What you have prepared vs. what you need assistance with",
    stepLabel: "Assets",
  },
  {
    id: 4,
    title: "References & Timeline",
    subtitle: "Inspiration websites and expected target launch",
    stepLabel: "Timeline",
  },
  {
    id: 5,
    title: "Review & Submit",
    subtitle: "Review project summary and working terms",
    stepLabel: "Terms",
  },
] as const;

export const DEFAULT_FORM_DATA: OnboardingFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  businessOverview: "",
  websiteCategory: "",
  websiteCategoryCustom: "",
  estimatedPages: "",
  estimatedPagesCustom: "",
  features: [],
  customFeaturesText: "",
  brandLogo: "",
  websiteCopy: "",
  photos: "",
  domainName: "",
  webHosting: "",
  assetNotes: "",
  referenceUrls: "",
  launchTimeline: "",
  launchTimelineCustom: "",
  agreedToRevisionTerms: false,
  agreedToLiabilityTerms: false,
};
