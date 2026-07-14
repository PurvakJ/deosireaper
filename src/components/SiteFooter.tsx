import { Link } from "@tanstack/react-router";
import { COMPANY, NAV_LINKS } from "@/lib/site-data";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream mt-24">
      <div className="diagonal-stripes h-2" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-sm bg-brand-yellow flex items-center justify-center font-heading text-xl text-brand-charcoal">
              D
            </div>
            <div className="leading-none">
              <div className="font-heading text-2xl">DEOSI</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-yellow">Since 1964</div>
            </div>
          </div>
          <p className="text-sm text-brand-cream/70 leading-relaxed">
            Manufacturers of tractor-mounted reapers for wheat, paddy, mustard, soyabean, jubar, bajra and maize.
            Neat, clean harvesting at 1"–2" from ground level.
          </p>
        </div>

        <div>
          <h4 className="text-brand-yellow uppercase tracking-widest text-xs mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-brand-cream/70 hover:text-brand-yellow transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-yellow uppercase tracking-widest text-xs mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-brand-cream/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /> {COMPANY.address}</li>
            {/* Only display the second phone number (index 1) */}
            {COMPANY.phones.slice(1).map((p) => (
              <li key={p} className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /> <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-yellow">{p}</a></li>
            ))}
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /> <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-yellow">{COMPANY.email}</a></li>

          </ul>
        </div>

        <div>
          <h4 className="text-brand-yellow uppercase tracking-widest text-xs mb-4">Certifications</h4>
          <ul className="space-y-2 text-sm text-brand-cream/70">
            <li>★ India's No.1 Reaper</li>
            <li>ISO 9001:2015 Certified</li>
            <li>Approved by Govt. of India</li>
            <li>25+ Years of Trust & Excellence</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap justify-between gap-3 text-xs text-brand-cream/50">
          <div>© {new Date().getFullYear()} Deosi Agriculture Works. All Rights Reserved.</div>
          <div className="uppercase tracking-widest">Built Strong · Made to Perform · Backed by Trust</div>
        </div>
      </div>
    </footer>
  );
}