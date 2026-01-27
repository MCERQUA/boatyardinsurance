import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Surron Insurance by Contractor's Choice Agency.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
          
          <h2>Introduction</h2>
          <p>
            {siteConfig.company.name} ("we," "our," or "us") respects your privacy and is committed 
            to protecting your personal information. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email, phone, address)</li>
            <li>Information about your electric bike (make, model, value)</li>
            <li>Insurance-related information necessary for providing quotes</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide insurance quotes and services</li>
            <li>Communicate with you about your policy or inquiries</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Insurance carriers to obtain quotes and bind coverage</li>
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our practices, please contact us:
          </p>
          <ul>
            <li>Phone: {siteConfig.company.phone}</li>
            <li>Email: {siteConfig.company.email}</li>
            <li>Address: {siteConfig.company.addresses[0].street}, {siteConfig.company.addresses[0].city}, {siteConfig.company.addresses[0].state} {siteConfig.company.addresses[0].zip}</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </div>
  );
}
