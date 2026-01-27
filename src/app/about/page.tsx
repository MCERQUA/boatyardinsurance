import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Contractor's Choice Agency and our specialized Talaria electric bike insurance coverage. Founded by Josh Cotner, licensed in all 50 states.",
  openGraph: {
    title: "About Us | Talaria Insurance",
    description: "Learn about Contractor's Choice Agency and our specialized Talaria electric bike insurance coverage.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About {siteConfig.company.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-200">
              Dedicated to providing specialized insurance solutions for the electric bike community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {siteConfig.company.name} was founded by {siteConfig.company.founder} with a simple mission: to provide insurance coverage that actually understands the needs of electric bike owners.
              </p>
              <p className="text-muted-foreground mb-6">
                After experiencing firsthand the frustration of trying to insure high-performance e-bikes through traditional carriers, we realized there was a gap in the market. Standard auto insurers don't understand the value of a Talaria. Homeowner's policies often have exclusions or inadequate limits. Riders deserved better.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to offer specialized coverage for Talaria riders across all 50 states. Our team understands the e-bike community because we're part of it.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">Licensed Nationwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">E-Bike Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">Fast Claims</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{siteConfig.company.founder}</h3>
                <p className="text-muted-foreground mb-4">Founder & Principal Agent</p>
                <p className="text-sm text-muted-foreground mb-6">
                  "We built this agency because riders deserve insurance that values their bikes as much as they do."
                </p>
                <div className="space-y-2">
                  <a 
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center justify-center gap-2 text-indigo-600 hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.company.phone}
                  </a>
                  <a 
                    href={`mailto:${siteConfig.company.email}`}
                    className="flex items-center justify-center gap-2 text-indigo-600 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not just another insurance agency. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Specialized Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  We focus specifically on e-bike insurance, giving us deep knowledge of your coverage needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Nationwide Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed in all 50 states, we can protect your Talaria no matter where you ride.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Fair Valuations</h3>
                <p className="text-sm text-muted-foreground">
                  We understand the true value of your e-bike, including aftermarket modifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personal Service</h3>
                <p className="text-sm text-muted-foreground">
                  Work directly with our team, not a call center. We're real people who care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              Based in Arizona, serving riders nationwide.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            {siteConfig.company.addresses.map((address, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                        {address.street}<br />
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-slate-200 mb-8">
              Let's find the perfect coverage for your Talaria. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600">
                <Link href="/quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
