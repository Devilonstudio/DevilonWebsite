const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });

// Used when someone presses "Book an audit" while already on the contact page.
export const scrollToContactForm = () => {
  const el = document.getElementById("contact-form");
  if (!el) return;
  el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => {
    (document.getElementById("name") as HTMLInputElement | null)?.focus({ preventScroll: true });
  }, reduced() ? 0 : 450);
};
