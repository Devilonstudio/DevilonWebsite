import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "@/lib/scroll";
import { Mail, Linkedin } from "lucide-react";
import { site } from "@/config/site";
import  dark  from "@/assets/dark.png";
import  light  from "@/assets/light.png";
import { services } from "@/data/services";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "App Audit", href: "/ai-to-production" },
    { label: "Sample Report", href: "/sample-audit" },
    { label: "Services", href: "/services" },
    { label: "Agency Partnerships", href: "/agency-partnerships" },
    { label: "Sample Builds", href: "/case-studies" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];


  const socialLinks = [
    ...(site.linkedin ? [{ icon: Linkedin, href: site.linkedin, label: "LinkedIn" }] : []),
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-surface-dark text-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
              <Link to="/" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); scrollToTop(); } }} className="flex items-center gap-3">
              <img
                src={light}
                alt="Devilon Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-extrabold text-3xl leading-none tracking-tight text-primary-foreground">
                DEVILON
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Production-readiness audits and hardening for AI-built apps, plus automation and custom builds.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
            {[...services.filter((x) => x.primary), ...services.filter((x) => !x.primary)].slice(0, 5).map((service) => {
            const Icon = service.icon;
           return (
           <li key={service.id} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-accent" />
            <Link
            to={`/services/${service.id}`}
            className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
            >
              {service.title}
            </Link>
    </li>
  );
})}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:hello@devilonstudio.com" className="hover:text-accent transition-colors">
                  hello@devilonstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} DEVILON STUDIO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
