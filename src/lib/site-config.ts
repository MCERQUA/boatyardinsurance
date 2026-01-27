export const siteConfig = {
  // Site Information
  name: "Boat Yard Insurance",
  title: "Boat Yard Insurance | Comprehensive Coverage for Marine Facilities",
  description: "Specialized insurance coverage for boat yards, marinas, and marine repair facilities. Protect your business with comprehensive liability, property, and marine contractor coverage. Licensed in all 50 states.",
  url: "https://boatyardinsurance.com",
  ogImage: "https://boatyardinsurance.com/images/og-image.jpg",
  
  // Company Information
  company: {
    name: "Contractor's Choice Agency",
    phone: "(844) 967-5247",
    email: "info@contractorschoiceagency.com",
    founder: "Josh Cotner",
    foundedYear: 2005,
    addresses: [
      {
        street: "123 Insurance Way",
        city: "Phoenix",
        state: "AZ",
        zip: "85001",
      },
    ],
  },
  
  // Navigation
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Coverage", href: "/coverage" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  
  // Footer Navigation
  footerNav: {
    coverage: [
      { title: "General Liability", href: "/coverage#liability" },
      { title: "Property Coverage", href: "/coverage#property" },
      { title: "Marine Operations", href: "/coverage#marine" },
      { title: "Workers Compensation", href: "/coverage#workerscomp" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Blog", href: "/blog" },
      { title: "Get a Quote", href: "/quote" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
  
  // Business Types
  businessTypes: [
    {
      name: "Full-Service Boat Yard",
      description: "Complete marina with haul-out, storage, and repair",
      specs: "Storage, repair, painting, mechanical",
    },
    {
      name: "Marine Repair Facility",
      description: "Specialized boat and yacht repair services",
      specs: "Engine, fiberglass, electrical work",
    },
    {
      name: "Dry Stack Storage",
      description: "Indoor and outdoor boat storage facilities",
      specs: "Forklift operations, rack systems",
    },
    {
      name: "Marina Operations",
      description: "Slip rentals and waterfront services",
      specs: "Dockage, fuel, pump-out services",
    },
  ],
  
  // Coverage Types
  coverageTypes: [
    {
      title: "General Liability",
      description: "Protection against third-party bodily injury and property damage claims.",
      icon: "Shield",
    },
    {
      title: "Property Coverage",
      description: "Covers your buildings, equipment, and tools against damage and theft.",
      icon: "Building",
    },
    {
      title: "Marine Liability",
      description: "Specialized coverage for boats in your care, custody, and control.",
      icon: "Anchor",
    },
    {
      title: "Workers Compensation",
      description: "Protects your employees and covers workplace injuries.",
      icon: "Users",
    },
  ],
  
  // SEO
  keywords: [
    "boat yard insurance",
    "marina insurance",
    "marine repair insurance",
    "boat storage insurance",
    "marine contractor insurance",
    "boat yard liability",
    "marina liability coverage",
    "dry stack storage insurance",
    "marine business insurance",
    "watercraft in care custody control",
  ],
  
  // Social Links
  socialLinks: {
    twitter: "https://twitter.com/contractorschoice",
    facebook: "https://facebook.com/contractorschoiceagency",
    instagram: "https://instagram.com/contractorschoice",
    linkedin: "https://linkedin.com/company/contractorschoice",
  },
};

export type SiteConfig = typeof siteConfig;
