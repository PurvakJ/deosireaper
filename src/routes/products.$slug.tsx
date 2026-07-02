import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS, COMPANY } from "@/lib/site-data";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: p ? `${p.name} — Deosi Reaper` : "Product — Deosi Reaper" },
        { name: "description", content: p?.description ?? "Deosi Reaper product." },
        { property: "og:title", content: p?.name ?? "Deosi Reaper" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:image", content: p?.image ?? "" },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-heading text-5xl uppercase mb-4">Product Not Found</h1>
      <Link to="/products" className="text-brand-red underline">Back to products</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const idx = PRODUCTS.findIndex((p) => p.slug === product.slug);
  const next = PRODUCTS[(idx + 1) % PRODUCTS.length];

  return (
    <>
      <section className="bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-yellow hover:text-brand-cream mb-10">
            <ArrowLeft className="w-4 h-4" /> All Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
              <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 text-[10px] uppercase tracking-widest">
                {product.category}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading text-5xl md:text-6xl uppercase leading-[0.95] mb-5">{product.name}</h1>
              <p className="text-xl text-brand-yellow font-medium mb-6">{product.tagline}</p>
              <p className="text-brand-cream/70 leading-relaxed mb-8">{product.description}</p>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {["ISO 9001:2008", "Govt. Approved", "Full Season Warranty", "Nationwide Support"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-brand-cream/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow" /> {b}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/enquiry" className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 text-sm uppercase tracking-widest font-semibold">
                  Request Quote
                </Link>
                <a href={`tel:${COMPANY.phones[1].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-colors">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Specifications</div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-10">Technical spec sheet.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-border">
              {product.specs.map((s, i) => (
                <div key={s.label} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${i % 2 === 0 ? "bg-muted/40" : ""}`}>
                  <div className="text-xs uppercase tracking-widest text-brand-red font-semibold">{s.label}</div>
                  <div className="md:col-span-2 text-foreground font-medium">{s.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-between items-center gap-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Up Next</div>
          <Link to="/products/$slug" params={{ slug: next.slug }} className="group inline-flex items-center gap-3 font-heading text-2xl uppercase text-brand-charcoal hover:text-brand-red transition-colors">
            {next.name} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
