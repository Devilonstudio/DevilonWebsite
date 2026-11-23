import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/config/site";

// Persistent call to action on small screens, after the hero. Transform and opacity only.
const MobileCtaBar = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;
    const update = () => { setShow(window.scrollY > 600); ticking = false; };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-background border-t-2 border-foreground px-4 pt-3"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
        transform: show ? "none" : "translateY(100%)",
        opacity: show ? 1 : 0,
        transition: "transform 250ms var(--ease-out), opacity 250ms var(--ease-out)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <Link to="/contact" className="flex items-center justify-between h-12 px-5 bg-accent text-white font-bold uppercase tracking-wide text-sm active:scale-[0.98] transition-transform duration-150">
        <span>Book an audit</span>
        <span className="font-mono-ui text-xs normal-case tracking-normal text-white/80">from {site.auditPrice}</span>
      </Link>
    </div>
  );
};

export default MobileCtaBar;
