import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Surron Insurance by Contractor's Choice Agency.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
          
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the Surron Insurance website operated by {siteConfig.company.name}, 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, 
            please do not use our website.
          </p>

          <h2>Description of Services</h2>
          <p>
            Surron Insurance provides information about electric bike insurance products and 
            facilitates the process of obtaining insurance quotes. We act as an insurance agency, 
            connecting you with insurance carriers that provide coverage.
          </p>

          <h2>No Guarantee of Coverage</h2>
          <p>
            Requesting a quote or submitting information through our website does not guarantee 
            that insurance coverage will be offered. All coverage is subject to underwriting 
            approval by the insurance carrier.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            You agree to provide accurate and complete information when requesting quotes or 
            communicating with us. Inaccurate information may result in incorrect quotes or 
            denial of coverage.
          </p>

          <h2>Website Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Collect information about other users without consent</li>
            <li>Use automated systems to access the website without permission</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the 
            property of {siteConfig.company.name} or its licensors and is protected by copyright 
            and other intellectual property laws.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for 
            the content or practices of these external sites.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The website and its content are provided "as is" without warranties of any kind, 
            either express or implied. We do not warrant that the website will be uninterrupted 
            or error-free.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.company.name} shall not be 
            liable for any indirect, incidental, special, consequential, or punitive damages 
            arising from your use of the website.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {siteConfig.company.name} and its officers, 
            directors, employees, and agents from any claims, damages, or expenses arising from 
            your use of the website or violation of these terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the 
            laws of the State of Arizona, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be 
            effective immediately upon posting to the website. Your continued use of the website 
            constitutes acceptance of any changes.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Phone: {siteConfig.company.phone}</li>
            <li>Email: {siteConfig.company.email}</li>
            <li>Address: {siteConfig.company.addresses[0].street}, {siteConfig.company.addresses[0].city}, {siteConfig.company.addresses[0].state} {siteConfig.company.addresses[0].zip}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
