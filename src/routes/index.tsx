import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Award, Cog, ShieldCheck, Tractor, Wheat, Users } from "lucide-react";
import { PRODUCTS, COMPANY, IMAGES } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-charcoal text-brand-cream grain-overlay">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img src={IMAGES.posterMountedFront} alt="Deosi Reaper in field" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/20" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 border border-brand-yellow/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-brand-yellow mb-8"
            >
              ★ India's No.1 · Since 1964
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.88] tracking-tight"
            >
              Built to <br />
              <span className="text-brand-red">Reap</span>.<br />
              Made to <br />
              <span className="text-brand-yellow">Last</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-lg text-brand-cream/70 max-w-xl leading-relaxed"
            >
              ISO 9001:2008 certified, Govt. of India approved tractor-mounted reapers.
              Neat, clean harvesting at 1–2 inches from ground level — across wheat, paddy, mustard,
              soyabean, jubar, bajra and maize.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/products" className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-colors">
                Explore Reapers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/enquiry" className="inline-flex items-center gap-3 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-colors">
                Request Quote
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { k: "60+", v: "Years of Craft" },
              { k: "2230mm", v: "Working Width" },
              { k: "29", v: "Blades / Machine" },
              { k: "7", v: "Crops Handled" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="border border-brand-cream/10 bg-brand-charcoal/60 backdrop-blur p-6"
              >
                <div className="font-heading text-4xl text-brand-yellow">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-brand-cream/60 mt-2">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-red text-white overflow-hidden py-3 border-t-2 border-brand-yellow">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap font-heading text-lg uppercase tracking-[0.2em]"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-8 flex items-center gap-8">
                Built Strong <span className="text-brand-yellow">◆</span>
                Made to Perform <span className="text-brand-yellow">◆</span>
                Backed by Trust <span className="text-brand-yellow">◆</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={IMAGES.reaperYellowCloseup} alt="Deosi Reaper detail" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-6 max-w-[240px]">
                <div className="font-heading text-5xl text-brand-charcoal">1964</div>
                <div className="text-xs uppercase tracking-widest text-brand-charcoal/70 mt-1">The year we started</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Who We Are</div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase leading-[0.95] mb-6">
              A house of<br />agriculture<br /><span className="text-brand-red">implements.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For over six decades, Deosi Agriculture Works has manufactured reapers trusted by farmers across
              North India. Our workshop in Mansa, Punjab, has grown into a byword for durability — machines
              that survive season after season without losing their edge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every Deosi Reaper is Govt. of India approved and ISO 9001:2008 certified — a promise backed by
              dedicated after-sales service, nationwide.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-2 text-brand-red font-semibold uppercase tracking-widest text-sm border-b-2 border-brand-red pb-1">
              Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Why Deosi</div>
              <h2 className="font-heading text-5xl md:text-6xl uppercase leading-[0.95]">
                Engineered for Indian fields.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Heavy Duty Build", body: "Reinforced frame, hardened blades — engineered to punish, built to last." },
              { icon: Cog, title: "High Field Efficiency", body: "2230 mm working width and 29 blades for fast, clean cutting passes." },
              { icon: Wheat, title: "7 Crops, 1 Machine", body: "Wheat, paddy, mustard, soyabean, jubar, bajra, maize — all in one." },
              { icon: Users, title: "Nationwide Support", body: "Trusted by farmers across Punjab, Haryana, UP, MP, Rajasthan & beyond." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group border border-brand-cream/10 p-8 hover:border-brand-yellow hover:bg-brand-cream/5 transition-all h-full">
                  <f.icon className="w-10 h-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-2xl uppercase mb-3">{f.title}</h3>
                  <p className="text-sm text-brand-cream/70 leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Our Products</div>
                <h2 className="font-heading text-5xl md:text-6xl uppercase leading-[0.95] max-w-2xl">
                  Reapers for every season.
                </h2>
              </div>
              <Link to="/products" className="group inline-flex items-center gap-2 text-brand-red font-semibold uppercase tracking-widest text-sm border-b-2 border-brand-red pb-1">
                All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block bg-card border border-border overflow-hidden hover:border-brand-red transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest text-brand-red mb-2">{p.category}</div>
                    <h3 className="font-heading text-2xl uppercase leading-tight mb-2 group-hover:text-brand-red transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-charcoal group-hover:text-brand-red">
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden bg-brand-red text-white py-20">
        <div className="absolute inset-0 diagonal-stripes opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-3">Ready to Harvest?</div>
            <h3 className="font-heading text-4xl md:text-5xl uppercase leading-tight">
              Talk to our team today.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {COMPANY.phones.slice(0, 2).map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="border-2 border-white/40 hover:bg-white hover:text-brand-red px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-colors">
                {p}
              </a>
            ))}
            <Link to="/enquiry" className="bg-brand-yellow text-brand-charcoal hover:bg-white px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-colors">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
