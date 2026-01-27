import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { NetlifyFormDetection } from "@/components/forms";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Talaria insurance",
    "Talaria Sting insurance",
    "Talaria MX4 insurance",
    "electric bike insurance",
    "e-bike insurance",
    "Talaria XXX insurance",
    "electric motorcycle insurance",
    "e-bike coverage",
    "Talaria coverage",
    "high-performance e-bike insurance",
    "off-road e-bike insurance",
  ],
  authors: [{ name: siteConfig.company.founder }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Talaria Insurance - Specialized E-Bike Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: siteConfig.company.name,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.company.phone,
              email: siteConfig.company.email,
              founder: {
                "@type": "Person",
                name: siteConfig.company.founder,
              },
              address: siteConfig.company.addresses.map((addr) => ({
                "@type": "PostalAddress",
                streetAddress: addr.street,
                addressLocality: addr.city,
                addressRegion: addr.state,
                postalCode: addr.zip,
                addressCountry: "US",
              })),
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              sameAs: Object.values(siteConfig.socialLinks),
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {/* Netlify Form Detection - required for form submissions */}
        <NetlifyFormDetection />
        
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
