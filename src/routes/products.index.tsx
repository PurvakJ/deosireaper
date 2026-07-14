import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS, IMAGES } from "@/lib/site-data";
import { ArrowRight, CheckCircle, Wheat, Tractor, Award, Settings } from "lucide-react";

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
  // Extended product features based on category
  const getProductFeatures = (category: string) => {
    const featureMap: Record<string, string[]> = {
      "Front Mount Reaper": ["2230mm working width", "29 hardened blades", "1-2 inch ground clearance", "Heavy duty frame"],
      "Reaper Binder": ["Automatic binding", "Adjustable length", "Clean cut operation", "Multi-crop capability"],
      "Heavy Duty Reaper": ["Reinforced chassis", "Industrial bearings", "High torque performance", "Extended durability"],
      "Multi Crop Reaper": ["Versatile crop handling", "Quick adjustment", "7 crop compatibility", "Efficient harvesting"],
      "Mustard Reaper": ["Specialized blade design", "Low crop loss", "Gentle handling", "High efficiency"],
      "Soyabean Reaper": ["Precision cutting", "Minimal pod shatter", "Clean separation", "Optimal yield"],
    };
    return featureMap[category] || ["Built to last", "High performance", "Quality assured", "Farmer trusted"];
  };

  // Get icon based on category
  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      "Front Mount Reaper": Tractor,
      "Reaper Binder": Settings,
      "Heavy Duty Reaper": Award,
      "Multi Crop Reaper": Wheat,
      "Mustard Reaper": Wheat,
      "Soyabean Reaper": Wheat,
    };
    return iconMap[category] || Tractor;
  };

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="The Deosi lineup."
        description="Six purpose-built reapers, each engineered for a specific crop mix and operator workflow. All ISO 9001:2015 certified and Govt. of India approved."
        image={IMAGES.posterMountedFront}
      />

      {/* Product Showcase - Alternating Layout */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-muted/10">
        <div className="mx-auto max-w-7xl px-6">
          {/* Introduction */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Choose Your Reaper</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95] mb-6">
                Engineered for <span className="text-brand-red">every harvest</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From wheat to mustard, our reapers are designed to handle the diversity of Indian agriculture
                with unmatched precision and durability.
              </p>
            </div>
          </Reveal>

          {/* Alternating Product Cards */}
          <div className="space-y-24 md:space-y-32">
            {PRODUCTS.map((p, i) => {
              const features = getProductFeatures(p.category);
              const Icon = getCategoryIcon(p.category);
              const isEven = i % 2 === 0;

              return (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group block"
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                      isEven ? '' : 'lg:grid-flow-col-dense'
                    }`}>
                      {/* Image Section */}
                      <div className={`relative ${isEven ? '' : 'lg:order-2'}`}>
                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                          <div className="aspect-[4/3] md:aspect-[4/3] bg-muted">
                            <img 
                              src={p.image} 
                              alt={p.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                            />
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-brand-red text-white text-xs uppercase tracking-widest px-4 py-2 font-bold rounded">
                            {p.category}
                          </div>
                          
                          {/* Number Badge */}
                          <div className="absolute bottom-4 right-4 bg-brand-charcoal/90 backdrop-blur text-brand-yellow text-4xl font-heading px-4 py-2 rounded-lg">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl ${isEven ? '' : 'hidden lg:block'}`} />
                        <div className={`absolute -top-4 -left-4 w-24 h-24 bg-brand-red/20 rounded-full blur-2xl ${isEven ? 'hidden lg:block' : ''}`} />
                      </div>

                      {/* Content Section */}
                      <div className={`space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-brand-red/10 rounded-lg">
                            <Icon className="w-6 h-6 text-brand-red" />
                          </div>
                          <div className="text-xs uppercase tracking-[0.3em] text-brand-red font-bold">
                            {p.category}
                          </div>
                        </div>

                        <h3 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95] group-hover:text-brand-red transition-colors">
                          {p.name}
                        </h3>
                        
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {p.tagline}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                              <span className="text-foreground/80">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Specs */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="font-heading text-brand-red text-lg">✓</span>
                            ISO Certified
                          </div>
                          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="font-heading text-brand-red text-lg">✓</span>
                            Govt. Approved
                          </div>
                          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                            <span className="font-heading text-brand-red text-lg">✓</span>
                            Made in India
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="inline-flex items-center gap-3 text-brand-red font-semibold uppercase tracking-widest text-sm group-hover:gap-5 transition-all pt-2">
                          <span className="border-b-2 border-brand-red pb-1">View Product Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Comparison Section */}
      <section className="py-24 bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Quick Comparison</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                Find your <span className="text-brand-yellow">perfect match</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <Reveal key={`compare-${p.slug}`} delay={i * 0.08}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="block border border-brand-cream/10 p-6 hover:border-brand-yellow transition-all group"
                >
                  <div className="text-xs uppercase tracking-widest text-brand-yellow mb-2">{p.category}</div>
                  <h4 className="font-heading text-xl uppercase group-hover:text-brand-yellow transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm text-brand-cream/60 mt-2 line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-yellow">
                    View Product <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-red text-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-3">Need Help Choosing?</div>
            <h3 className="font-heading text-3xl md:text-4xl uppercase leading-tight">
              Talk to our <span className="text-brand-yellow">experts</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/enquiry" 
              className="bg-brand-yellow text-brand-charcoal hover:bg-white px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Get a Quote
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white/40 hover:bg-white hover:text-brand-red px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}