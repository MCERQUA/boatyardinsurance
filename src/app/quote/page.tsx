import { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Phone,
  CheckCircle
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Get a free, no-obligation quote for your Talaria electric bike insurance. Fast online quotes for Light Bee, Storm Bee, Ultra Bee, and all Talaria models.",
  openGraph: {
    title: "Get a Free Quote | Talaria Insurance",
    description: "Get a free, no-obligation quote for your Talaria electric bike insurance.",
  },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-lg text-slate-200">
              Complete the form below and we'll provide a customized quote for your Talaria.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Get a Quote */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Why Get a Quote?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span>No obligation - just information</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span>See coverage options for your specific model</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span>Get expert recommendations</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span>Compare with your current coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="bg-slate-50">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Quick Process</p>
                        <p className="text-xs text-muted-foreground">Most quotes in under 5 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Expert Coverage</p>
                        <p className="text-xs text-muted-foreground">Designed for e-bike owners</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prefer to Call */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Prefer to Talk?</h3>
                  <p className="text-sm text-slate-200 mb-4">
                    Our team is ready to answer your questions and provide a quote over the phone.
                  </p>
                  <a 
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center gap-2 text-lg font-bold hover:text-slate-200 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.company.phone}
                  </a>
                  <p className="text-xs text-slate-300 mt-2">
                    Mon-Fri 8am-6pm MST
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
