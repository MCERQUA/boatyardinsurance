import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Anchor, 
  Phone, 
  CheckCircle, 
  Users, 
  MapPin, 
  Clock, 
  Award,
  ArrowRight,
  Star,
  TrendingUp,
  Lock,
  Headphones,
  Wrench,
  Building,
  Ship
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { 
  FadeIn, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  Float,
  ScaleOnHover
} from "@/components/ui/motion";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950" />
        <div className="absolute inset-0 bg-[url('/images/hero-marina.jpg')] bg-cover bg-center opacity-15" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1}>
                <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 px-4 py-2 text-sm">
                  <Anchor className="w-4 h-4 mr-2" />
                  Licensed in All 50 States
                </Badge>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
                  Specialized Insurance for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Boat Yards
                  </span>
                  <br />
                  & Marinas
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                  Comprehensive coverage designed for marine facilities. 
                  From repair shops to dry stack storage — protect your business with industry-leading policies.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ScaleOnHover>
                    <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 px-8 py-6 text-lg rounded-xl">
                      <Link href="/quote">
                        Get Your Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button asChild size="lg" className="border-2 border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700 hover:border-slate-500 px-8 py-6 text-lg rounded-xl backdrop-blur">
                      <a href={`tel:${siteConfig.company.phone}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        {siteConfig.company.phone}
                      </a>
                    </Button>
                  </ScaleOnHover>
                </div>
              </FadeIn>
              
              {/* Trust badges */}
              <FadeIn delay={0.5}>
                <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">A-Rated Carriers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Star className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">5-Star Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Quick Quotes</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Hero image/illustration area */}
            <SlideInRight delay={0.3}>
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 flex items-center justify-center">
                    <Ship className="w-48 h-48 text-blue-300/50" />
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                Comprehensive Protection
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Coverage Built for Marine Businesses
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Specialized policies designed specifically for the unique risks of boat yards, marinas, and marine service facilities.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.coverageTypes.map((coverage, index) => (
              <StaggerItem key={index}>
                <Card className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                      {coverage.icon === "Shield" && <Shield className="w-6 h-6 text-blue-400" />}
                      {coverage.icon === "Building" && <Building className="w-6 h-6 text-blue-400" />}
                      {coverage.icon === "Anchor" && <Anchor className="w-6 h-6 text-blue-400" />}
                      {coverage.icon === "Users" && <Users className="w-6 h-6 text-blue-400" />}
                    </div>
                    <CardTitle className="text-white text-xl">{coverage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">
                      {coverage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                We Serve
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Insurance for Every Type of Marine Facility
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Whether you operate a full-service boat yard, repair shop, or dry stack storage facility, 
                we have the coverage you need to protect your business from the unique risks of the marine industry.
              </p>
              
              <div className="space-y-4">
                {siteConfig.businessTypes.map((business, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">{business.name}</h3>
                      <p className="text-slate-400 text-sm">{business.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                  <Wrench className="w-32 h-32 text-blue-300/30" />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Industry Expertise You Can Trust
              </h2>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">20+ Years Experience</h3>
                <p className="text-slate-400">
                  Decades of experience insuring marine businesses means we understand your unique risks.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                <p className="text-slate-400">
                  Real agents who specialize in marine insurance, available when you need them.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Competitive Rates</h3>
                <p className="text-slate-400">
                  Access to multiple A-rated carriers means we find you the best coverage at the best price.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Marine Business?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Get a customized quote for your boat yard or marina in minutes. 
              Our marine insurance specialists are standing by.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScaleOnHover>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl">
                  <Link href="/quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScaleOnHover>
              <ScaleOnHover>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  <a href={`tel:${siteConfig.company.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {siteConfig.company.phone}
                  </a>
                </Button>
              </ScaleOnHover>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
