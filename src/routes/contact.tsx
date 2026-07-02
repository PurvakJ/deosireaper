import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COMPANY, IMAGES } from "@/lib/site-data";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Deosi Agriculture Works — Mansa, Punjab" },
      { name: "description", content: "Reach Deosi Agriculture Works. Phone, email, address and showroom details in Mansa, Punjab." },
      { property: "og:title", content: "Contact — Deosi Reaper" },
      { property: "og:description", content: "Get in touch with Deosi Agriculture Works." },
      { property: "og:image", content: "" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help."
        description="Reach us by phone, email or drop in at our Mansa workshop and showroom."
        image={IMAGES.posterContact}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Head Office", value: COMPANY.address },
              { icon: MapPin, label: "Showroom", value: COMPANY.showroom },
              { icon: Phone, label: "Call Us", value: COMPANY.phones.join(" · ") },
              { icon: Mail, label: "Email & Web", value: `${COMPANY.email} · ${COMPANY.website}` },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="bg-card border border-border p-6 h-full hover:border-brand-red transition-colors">
                  <div className="w-11 h-11 bg-brand-red/10 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-red mb-2">{c.label}</div>
                  <div className="text-sm text-foreground leading-relaxed">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Deosi Agriculture Works — Map"
                src="https://www.google.com/maps?q=Mansa,+Punjab+151505&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-brand-charcoal text-brand-cream p-8 md:p-10 h-full grain-overlay">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Working Hours</div>
              <h3 className="font-heading text-4xl uppercase mb-8">Visit the workshop.</h3>
              <div className="space-y-4 text-sm">
                <Row icon={Clock} label="Mon – Sat" value="9:00 AM – 7:00 PM" />
                <Row icon={Clock} label="Sunday" value="10:00 AM – 4:00 PM" />
                <Row icon={MapPin} label="Showroom" value={COMPANY.showroom} />
                <Row icon={Globe} label="Website" value={COMPANY.website} />
              </div>
              <div className="mt-10 pt-6 border-t border-brand-cream/10 text-xs uppercase tracking-widest text-brand-cream/60">
                Built Strong · Made to Perform · Backed by Trust
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-brand-red" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">{label}</div>
        <div className="text-brand-cream/90">{value}</div>
      </div>
    </div>
  );
}
