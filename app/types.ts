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
  estimatedPages: string;
  features: string[];

  // Section 3: Asset Matrix
  brandLogo: string;
  websiteCopy: string;
  photos: string;
  domainName: string;
  webHosting: string;

  // Section 4: References, Timeline & Budget
  referenceUrls: string;
  launchTimeline: string;
  budgetTier: string;

  // Section 5: Terms
  agreedToRevisionTerms: boolean;
  agreedToLiabilityTerms: boolean;
}

export const WEBSITE_CATEGORIES = [
  {
    value: "landing-page",
    label: "Single-Page Landing Page",
    description: "Perfect for lead generation & product launches",
    icon: "📄",
  },
  {
    value: "multi-page-business",
    label: "Multi-Page Business Website",
    description: "Full business presence with multiple sections",
    icon: "🏢",
  },
  {
    value: "ecommerce",
    label: "E-Commerce Store",
    description: "Sell products online with payment integration",
    icon: "🛍️",
  },
  {
    value: "custom-web-app",
    label: "Custom Web App / Dashboard",
    description: "Complex workflows, admin panels & dashboards",
    icon: "⚙️",
  },
  {
    value: "redesign",
    label: "Website Redesign",
    description: "Refresh & modernize an existing website",
    icon: "🔄",
  },
] as const;

export const PAGE_ESTIMATES = [
  { value: "1", label: "1 Page", sublabel: "Landing page" },
  { value: "3-5", label: "3–5 Pages", sublabel: "Small business" },
  { value: "6-10", label: "6–10 Pages", sublabel: "Medium business" },
  { value: "10+", label: "10+ Pages", sublabel: "Large project" },
] as const;

export const FEATURES = [
  {
    id: "contact-form",
    label: "Contact / Lead Form",
    description: "Capture enquiries from visitors",
    icon: "📝",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Chat Integration",
    description: "Live chat button to message on WhatsApp",
    icon: "💬",
  },
  {
    id: "payment",
    label: "Online Payment Gateway",
    description: "Accept cards, UPI, or mobile payments",
    icon: "💳",
  },
  {
    id: "booking",
    label: "Booking / Appointment Calendar",
    description: "Let clients schedule meetings online",
    icon: "📅",
  },
  {
    id: "cms",
    label: "CMS / Admin Panel",
    description: "Update content without a developer",
    icon: "🗂️",
  },
  {
    id: "seo",
    label: "Basic SEO & Google Maps",
    description: "Search rankings & location visibility",
    icon: "🗺️",
  },
] as const;

export const ASSET_ITEMS = [
  {
    id: "brandLogo" as keyof OnboardingFormData,
    label: "Brand Logo & Color Palette",
    haveLabel: "I have it ready",
    needLabel: "I need you to provide/set it up",
    icon: "🎨",
  },
  {
    id: "websiteCopy" as keyof OnboardingFormData,
    label: "Website Text / Copywriting",
    haveLabel: "I have it ready",
    needLabel: "I need you to write it",
    icon: "✍️",
  },
  {
    id: "photos" as keyof OnboardingFormData,
    label: "Product / Business Photos",
    haveLabel: "I have original photos",
    needLabel: "I need Stock / AI visuals",
    icon: "📸",
  },
  {
    id: "domainName" as keyof OnboardingFormData,
    label: "Domain Name",
    haveLabel: "I already own one",
    needLabel: "I need help getting one",
    icon: "🌐",
  },
  {
    id: "webHosting" as keyof OnboardingFormData,
    label: "Web Hosting Account",
    haveLabel: "I have hosting ready",
    needLabel: "I need you to set it up",
    icon: "🖥️",
  },
] as const;

export const TIMELINE_OPTIONS = [
  {
    value: "urgent",
    label: "Urgent",
    sublabel: "< 1 Week",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    selectedBorder: "border-red-500",
    selectedBg: "bg-red-50 dark:bg-red-900/30",
    icon: "🚨",
  },
  {
    value: "standard",
    label: "Standard",
    sublabel: "2–3 Weeks",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    selectedBorder: "border-amber-500",
    selectedBg: "bg-amber-50 dark:bg-amber-900/30",
    icon: "📆",
  },
  {
    value: "flexible",
    label: "Flexible",
    sublabel: "1 Month+",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    selectedBorder: "border-green-500",
    selectedBg: "bg-green-50 dark:bg-green-900/30",
    icon: "🌿",
  },
] as const;

export const BUDGET_TIERS = [
  {
    value: "starter",
    label: "Starter",
    range: "\$300 – \$800",
    description: "Landing page or simple business site",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form"],
    icon: "🌱",
    gradient: "from-green-400 to-emerald-500",
    popular: false,
  },
  {
    value: "standard",
    label: "Standard Business",
    range: "\$800 – \$2,500",
    description: "Full business website with integrations",
    features: ["Up to 10 pages", "SEO optimized", "CMS integration", "All features"],
    icon: "🚀",
    gradient: "from-indigo-500 to-purple-600",
    popular: true,
  },
  {
    value: "premium",
    label: "Custom / Premium",
    range: "\$2,500+",
    description: "E-Commerce, web apps & complex projects",
    features: ["Unlimited pages", "Custom functionality", "Priority support", "Maintenance plan"],
    icon: "💎",
    gradient: "from-amber-400 to-orange-500",
    popular: false,
  },
  {
    value: "quote",
    label: "Send Me a Quote",
    range: "Based on selections",
    description: "Let me evaluate your needs and propose",
    features: ["Full assessment", "Transparent pricing", "No obligation"],
    icon: "📊",
    gradient: "from-cyan-400 to-blue-500",
    popular: false,
  },
] as const;

export const SECTION_META = [
  {
    id: 1,
    title: "Company & Contact",
    description: "Tell us about you and your business",
    icon: "👤",
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Website Scope",
    description: "Define your website type and features",
    icon: "🎯",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Assets & Resources",
    description: "What you have vs. what you need",
    icon: "📦",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "Timeline & Budget",
    description: "References, timeline, and budget range",
    icon: "💰",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Terms & Submit",
    description: "Review terms and send your quote request",
    icon: "✅",
    color: "from-emerald-500 to-green-500",
  },
] as const;

export const DEFAULT_FORM_DATA: OnboardingFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  businessOverview: "",
  websiteCategory: "",
  estimatedPages: "",
  features: [],
  brandLogo: "",
  websiteCopy: "",
  photos: "",
  domainName: "",
  webHosting: "",
  referenceUrls: "",
  launchTimeline: "",
  budgetTier: "",
  agreedToRevisionTerms: false,
  agreedToLiabilityTerms: false,
};
