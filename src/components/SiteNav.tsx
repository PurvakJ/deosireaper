import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";
import { Menu, X, Phone } from "lucide-react";

export function SiteNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* Top badge strip */}
      <div className="hidden md:block bg-brand-charcoal text-brand-cream text-[11px] uppercase tracking-[0.2em]">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex gap-6">
            <span className="text-brand-yellow">★ India's No.1</span>
            <span>ISO 9001:2008 Certified</span>
            <span>Approved by Govt. of India</span>
          </div>
          <a href={`tel:${COMPANY.phones[1].replace(/\s/g, "")}`} className="hover:text-brand-yellow flex items-center gap-2">
            <Phone className="w-3 h-3" /> {COMPANY.phones[1]}
          </a>
        </div>
      </div>

      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "oklch(0.15 0.01 40 / 0.95)" : "oklch(0.15 0.01 40 / 0.85)",
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50 border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-sm bg-brand-yellow flex items-center justify-center font-heading text-xl text-brand-charcoal group-hover:rotate-6 transition-transform">
              D
            </div>
            <div className="leading-none">
              <div className="font-heading text-2xl text-brand-cream tracking-wide">DEOSI</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-yellow">Agriculture Works</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm uppercase tracking-widest font-medium transition-colors ${
                    active ? "text-brand-yellow" : "text-brand-cream/80 hover:text-brand-cream"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-yellow"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/enquiry"
              className="ml-4 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-brand-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-brand-charcoal border-t border-white/5"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="py-3 text-brand-cream uppercase tracking-widest text-sm border-b border-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
