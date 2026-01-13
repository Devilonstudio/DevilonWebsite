import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import  dark  from "@/assets/dark.png";
import  light  from "@/assets/light.png";
import { services } from "@/data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);

  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/case-studies" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];


  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:devilonstudios@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-surface-dark text-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3">
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
              We partner with ambitious teams to design, build, and scale
              exceptional digital products that transform businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
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
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
            {services.slice(0, 4).map((service) => {
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
})}<br />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:devilonstudios@gmail.com" className="hover:text-accent transition-colors">
                  devilonstudios@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923202568948" className="hover:text-accent transition-colors">
                  +92 (320) 256-8948
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} DEVILON. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/contact" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
