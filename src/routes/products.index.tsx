import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS, IMAGES } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — Tractor Mounted Reapers | Deosi" },
      { name: "description", content: "Explore the full Deosi range: front-mount reapers, reaper binders, heavy-duty and multi-crop tractor reapers for wheat, paddy, mustard, soyabean and more." },
      { property: "og:title", content: "Deosi Reaper — Product Range" },
      { property: "og:description", content: "The full Deosi Reaper lineup." },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="The Deosi lineup."
        description="Six purpose-built reapers, each engineered for a specific crop mix and operator workflow. All ISO 9001:2008 certified and Govt. of India approved."
        image={IMAGES.posterMountedFront}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group block bg-card border border-border overflow-hidden hover:border-brand-red hover:shadow-2xl transition-all h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest text-brand-red mb-2">{p.category}</div>
                    <h3 className="font-heading text-2xl uppercase leading-tight mb-2 group-hover:text-brand-red transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-charcoal group-hover:text-brand-red">
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
