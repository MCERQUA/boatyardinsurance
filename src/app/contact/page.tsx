import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Talaria Insurance for questions about e-bike coverage. Call 844-967-5247 or send us a message. Offices in Chandler and Phoenix, Arizona.",
  openGraph: {
    title: "Contact Us | Talaria Insurance",
    description: "Contact Talaria Insurance for questions about e-bike coverage.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-slate-200">
              Have questions? We're here to help. Reach out by phone, email, or the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`tel:${siteConfig.company.phone}`}
                    className="text-xl font-bold text-primary hover:underline"
                  >
                    {siteConfig.company.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Toll-free, nationwide
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-primary font-medium hover:underline break-all"
                  >
                    {siteConfig.company.email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 1 business day
                  </p>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM MST</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 2:00 PM MST</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Office */}
              {siteConfig.company.addresses.map((address, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Headquarters</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-sm text-muted-foreground">
                      {address.street}<br />
                      {address.city}, {address.state} {address.zip}
                    </address>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for a Quote?
            </h2>
            <p className="text-muted-foreground mb-6">
              Skip the wait - get a personalized quote for your Talaria in minutes.
            </p>
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
