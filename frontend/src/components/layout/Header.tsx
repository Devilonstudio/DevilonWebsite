import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ChevronDown, ArrowUpRight, ArrowRight, ShieldCheck, FileText, CalendarCheck,
  LayoutDashboard, Workflow, Smartphone, Users, Handshake, Mail, LucideIcon,
} from "lucide-react";
import dark from "@/assets/dark.png";
import light from "@/assets/light.png";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { site } from "@/config/site";
import { scrollToTop, scrollToContactForm } from "@/lib/scroll";

const servicePath = (id: string) => (id === "ai-to-production" ? "/ai-to-production" : `/services/${id}`);

type Item = { to: string; title: string; desc: string; icon: LucideIcon };
type Group = { id: string; label: string; to: string; blurb: string; items: Item[] };

const visualIcon = { saas: LayoutDashboard, ops: Workflow, mobile: Smartphone } as const;

const groups: Group[] = [
  {
    id: "audit", label: "Audit", to: "/ai-to-production", blurb: "Is your AI-built app ready?",
    items: [
      { to: "/ai-to-production", title: "App audit", desc: "A fixed-price review with a written report and a fixed quote.", icon: ShieldCheck },
      { to: "/sample-audit", title: "Sample report", desc: "See the format and depth before you book.", icon: FileText },
      { to: "/contact", title: "Book an audit", desc: `From ${site.auditPrice}. Report in ${site.auditTurnaround}.`, icon: CalendarCheck },
    ],
  },
  {
    id: "services", label: "What we do", to: "/services", blurb: "Explore our services",
    items: services.map((s) => ({ to: servicePath(s.id), title: s.title, desc: s.shortDescription, icon: s.icon })),
  },
  {
    id: "work", label: "Work", to: "/case-studies", blurb: "Sample builds",
    items: caseStudies.map((c) => ({ to: `/case-studies/${c.id}`, title: c.title, desc: c.shortDescription, icon: visualIcon[c.visual] })),
  },
  {
    id: "about", label: "About", to: "/about", blurb: "Who we are and how we work",
    items: [
      { to: "/about", title: "About us", desc: "Our mission, our principles and the team.", icon: Users },
      { to: "/agency-partnerships", title: "For agencies", desc: "White-label engineering behind your brand.", icon: Handshake },
      { to: "/contact", title: "Contact", desc: `Write to ${site.email}.`, icon: Mail },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [shownGroup, setShownGroup] = useState("audit");
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const barRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<number>();

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      const dy = y - last;
      if (y < 120) setHidden(false);
      else if (dy > 6) setHidden(true);
      else if (dy < -6) setHidden(false);
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); setOpenGroup(null); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const clearTimer = () => window.clearTimeout(timer.current);
  const openMenu = (id: string) => {
    clearTimer();
    setShownGroup(id);
    timer.current = window.setTimeout(() => setOpenGroup(id), openGroup ? 0 : 80);
  };
  const closeMenu = () => { clearTimer(); timer.current = window.setTimeout(() => setOpenGroup(null), 160); };

  const onBookClick = (e: React.MouseEvent) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      setOpenGroup(null);
      scrollToContactForm();
    }
  };

  const menuOpen = openGroup !== null;
  const solid = isScrolled || menuOpen; // transparent only at the very top of the page
  const onDark = !solid || isMobileMenuOpen;
  const isActive = (href: string) => location.pathname.startsWith(href);
  const current = groups.find((g) => g.id === shownGroup) ?? groups[0];

  const triggerClass = (active: boolean) =>
    `relative inline-flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors ${
      active ? "text-accent" : onDark ? "text-white/90 hover:text-white" : "text-foreground hover:text-accent"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,border-color] duration-300 ${
        isMobileMenuOpen ? "bg-surface-dark" : solid ? "bg-background border-b border-border" : "bg-transparent"
      }`}
      style={{ transform: hidden && !isMobileMenuOpen && !menuOpen ? "translateY(-100%)" : "none" }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") closeMenu(); }}
      onKeyDown={(e) => { if (e.key === "Escape") setOpenGroup(null); }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main">
          {/* Logo */}
          <Link to="/" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); scrollToTop(); } }} className="flex items-center gap-3">
          <img src={onDark ? light : dark}
            alt="Devilon Logo"
            className="w-12 h-12 object-contain transition-[transform,background-color,color,border-color,opacity] duration-300"
        />

  <span
    className={`font-extrabold text-4xl leading-none tracking-tight transition-colors duration-300 ${
      !onDark ? "text-foreground" : "text-primary-foreground"
    }`}
  >
    DEVILON
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {groups.map((g) => {
              const open = openGroup === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onPointerEnter={(e) => { if (e.pointerType === "mouse") openMenu(g.id); }}
                  onClick={() => (open ? setOpenGroup(null) : (setShownGroup(g.id), setOpenGroup(g.id)))}
                  className={triggerClass(open || isActive(g.to))}
                >
                  {g.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "none" }} />
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent origin-left transition-transform duration-200" style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }} />
                </button>
              );
            })}
            <Link to="/contact" className={triggerClass(isActive("/contact"))}>Contact</Link>
          </div>

          <div className="hidden lg:block">
            <Button variant="cta" size="default" asChild>
              <Link to="/contact" onClick={onBookClick}>Book an audit <ArrowRight /></Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-primary-foreground" size={26} />
            ) : (
              <Menu className={!onDark ? "text-foreground" : "text-primary-foreground"} size={26} />
            )}
          </button>
        </nav>
      </div>

      {/* Mega panel (desktop): groups on the left, their pages on the right */}
      <div
        className="hidden lg:block absolute left-0 right-0 top-full"
        onPointerEnter={(e) => { if (e.pointerType === "mouse") clearTimer(); }}
        style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "none" : "translateY(-6px)",
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 180ms var(--ease-out), transform 180ms var(--ease-out), visibility 0s linear " + (menuOpen ? "0s" : "180ms"),
        }}
      >
        <div className="bg-background border-t border-border shadow-[0_30px_60px_-30px_rgba(20,28,45,0.35)] rounded-b-3xl">
          <div className="container mx-auto px-4 lg:px-8 py-8 grid grid-cols-[19rem_1fr] gap-12">
            <ul className="space-y-1">
              {groups.map((g) => {
                const on = g.id === shownGroup;
                return (
                  <li key={g.id}>
                    <Link
                      to={g.to}
                      onPointerEnter={(e) => { if (e.pointerType === "mouse") { clearTimer(); setShownGroup(g.id); } }}
                      onFocus={() => setShownGroup(g.id)}
                      className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-colors ${on ? "bg-accent/15 text-accent" : "text-foreground hover:bg-black/5"}`}
                    >
                      <span>
                        <span className="block font-semibold text-lg leading-tight">{g.label}</span>
                        <span className={`block text-sm ${on ? "text-accent/80" : "text-muted-foreground"}`}>{g.blurb}</span>
                      </span>
                      <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="grid grid-cols-2 gap-x-10 gap-y-1 content-start">
              {current.items.map((it) => {
                const Icon = it.icon;
                return (
                  <Link key={it.to + it.title} to={it.to} onClick={it.to === "/contact" ? onBookClick : undefined} className="group flex gap-4 rounded-2xl p-3 hover:bg-black/5 transition-colors">
                    <span className="icon-tile"><Icon className="w-5 h-5" /></span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-foreground leading-tight">{it.title}</span>
                      <span className="block text-sm text-muted-foreground mt-0.5 line-clamp-2">{it.desc}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress (scaleX only) */}
      <span ref={barRef} aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent origin-left" style={{ transform: "scaleX(0)" }} />

      {/* Mobile menu: full screen */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 -z-10 section-dark on-dark overflow-y-auto pt-24 pb-10 animate-menu">
          <div className="container mx-auto px-4">
            <ol className="border-t border-white/15">
              {[
                { href: "/ai-to-production", label: "Audit" },
                { href: "/services", label: "What we do" },
                { href: "/case-studies", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={link.href} className="border-b border-white/15">
                  <Link to={link.href} className={`flex items-baseline gap-4 py-4 font-extrabold text-3xl ${isActive(link.href) ? "text-blue-400" : "text-primary-foreground"}`}>
                    <span className="text-xs text-white/40 font-normal">0{i + 1}</span>
                    {link.label}
                  </Link>
                  {link.href === "/services" && (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 pb-4 pl-9">
                      {services.map((s) => (
                        <Link key={s.id} to={servicePath(s.id)} className="py-1 text-sm text-white/65">{s.title}</Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <Button variant="hero" size="xl" className="w-full mt-8" asChild>
              <Link to="/contact" onClick={onBookClick}>Book an audit from {site.auditPrice}</Link>
            </Button>
            <p className="mt-4 text-center text-xs text-white/50">
              Report in {site.auditTurnaround} · <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <Link to="/agency-partnerships" className="block mt-6 text-center text-sm text-white/60 underline underline-offset-4">For agencies</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
