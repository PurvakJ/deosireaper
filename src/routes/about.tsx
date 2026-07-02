import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES, COMPANY } from "@/lib/site-data";
import { Award, MapPin, Wrench, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Deosi Agriculture Works — 60+ Years of Reaper Craft" },
      { name: "description", content: "Founded 1964 in Mansa, Punjab. Deosi Agriculture Works is India's trusted manufacturer of ISO-certified tractor-mounted reapers, serving farmers nationwide." },
      { property: "og:title", content: "About Deosi Agriculture Works" },
      { property: "og:description", content: "Six decades of building India's most trusted tractor reapers." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Six decades of reaper craft."
        description="From a workshop in Mansa, Punjab in 1964 to farms across India today — the Deosi story is one of steady, stubborn commitment to quality."
        image={IMAGES.posterCatalogue}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={IMAGES.reaperRedMounted} alt="Deosi Reaper" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Our Story</div>
            <h2 className="font-heading text-5xl uppercase leading-[0.95] mb-6">
              Since <span className="text-brand-red">1964</span>.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Deosi Agriculture Works began in Mansa, Punjab with a single conviction: farmers deserve
                implements that hold up. Over sixty years and thousands of machines later, that conviction still
                sets the bar in our workshop.
              </p>
              <p>
                Today we're India's No.1 manufacturer of tractor-mounted reapers — ISO 9001:2008 certified,
                Govt. of India approved, and shipped to distributors across Punjab, Haryana, Uttar Pradesh,
                Madhya Pradesh, Rajasthan and beyond.
              </p>
              <p>
                Every reaper leaves our floor tested, warrantied and backed by dedicated after-sales support.
                That's how "Built Strong · Made to Perform · Backed by Trust" became more than a tagline.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-14 max-w-2xl">
              What we <span className="text-brand-yellow">stand for</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Quality First", body: "ISO 9001:2008 certified processes. Every unit hand-inspected before dispatch." },
              { icon: Wrench, title: "Field-Serviceable", body: "Designed so blades, fingers and belts can be swapped in-field with basic tools." },
              { icon: Users, title: "Farmer-Led Design", body: "Our reapers evolve from feedback loops with the operators who use them every season." },
              { icon: MapPin, title: "Nationwide Network", body: "Distribution and service partners across Punjab, Haryana, UP, MP and Rajasthan." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border border-brand-cream/10 p-8 h-full">
                  <v.icon className="w-9 h-9 text-brand-yellow mb-5" />
                  <h3 className="font-heading text-xl uppercase mb-3">{v.title}</h3>
                  <p className="text-sm text-brand-cream/70 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Company Snapshot</div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-10">At a glance.</h2>
          </Reveal>
          <div className="border border-border">
            {[
              ["Company", COMPANY.name],
              ["Brand", COMPANY.brand],
              ["Founded", String(COMPANY.founded)],
              ["Certification", "ISO 9001:2008 · Govt. of India Approved"],
              ["Specialisation", "Tractor Mounted Reapers — Wheat, Paddy, Mustard, Soyabean, Jubar, Bajra, Maize"],
              ["Distribution", "Punjab, Haryana, UP, MP, Rajasthan and other Indian states"],
              ["Headquarters", "Mansa, Punjab, India"],
            ].map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${i % 2 === 0 ? "bg-muted/40" : ""}`}>
                <div className="text-xs uppercase tracking-widest text-brand-red font-semibold">{k}</div>
                <div className="md:col-span-2 text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
