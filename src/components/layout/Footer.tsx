import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Talaria<span className="text-indigo-400">Insurance</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Specialized insurance coverage for Talaria electric bikes. Protecting riders nationwide with comprehensive e-bike insurance solutions.
            </p>
            <p className="text-sm font-medium text-slate-300">
              Licensed in All 50 States
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Talaria Models */}
          <div>
            <h3 className="font-semibold text-white mb-4">Talaria Models We Cover</h3>
            <ul className="space-y-2">
              {siteConfig.talariaModels.map((model) => (
                <li key={model.name}>
                  <span className="text-sm text-slate-400">{model.name}</span>
                </li>
              ))}
              <li>
                <span className="text-sm text-slate-400">All Other E-Bike Models</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-indigo-400" />
                  {siteConfig.company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2 text-indigo-400" />
                  {siteConfig.company.email}
                </a>
              </li>
              {siteConfig.company.addresses.map((address, i) => (
                <li key={i} className="flex items-start text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-indigo-400 flex-shrink-0" />
                  <span>
                    {address.street}<br />
                    {address.city}, {address.state} {address.zip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
