import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS, COMPANY } from "@/lib/site-data";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Award,
  Shield,
  Truck,
  Wrench,
  Wheat,
  Star,
  TrendingUp,
  Leaf,
  Zap,
  BarChart,
  Calendar,
} from "lucide-react";

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
  const prev = PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length];

  // Additional product data
  const productHighlights = [
    { icon: Award, label: "ISO 9001:2008 Certified", description: "International quality standard" },
    { icon: Shield, label: "Govt. Approved", description: "Ministry of Agriculture approved" },
    { icon: Truck, label: "Nationwide Delivery", description: "Pan-India shipping available" },
    { icon: Wrench, label: "Easy Maintenance", description: "Field-serviceable design" },
  ];

  const performanceMetrics = [
    { label: "Working Width", value: "2230mm", icon: BarChart },
    { label: "Blades", value: "29", icon: Zap },
    { label: "Cutting Height", value: "1-2 inches", icon: Leaf },
    { label: "Crops Supported", value: "7", icon: Wheat },
    { label: "Efficiency", value: "98%", icon: TrendingUp },
    { label: "Warranty", value: "3+ Years", icon: Calendar },
  ];

  const productBenefits = [
    "Reduces harvesting time by up to 70%",
    "Clean cutting at 1-2 inches from ground",
    "Minimal grain loss during harvesting",
    "Fuel efficient operation",
    "Low maintenance requirements",
    "Durable construction for long life",
  ];

  return (
    <>
      {/* Product Hero Section */}
      <section className="bg-brand-charcoal text-brand-cream grain-overlay relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-yellow hover:text-brand-cream mb-12 group transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Products
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 text-xs uppercase tracking-widest font-bold rounded">
                  {product.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-yellow text-brand-charcoal px-4 py-2 text-xs uppercase tracking-widest font-bold rounded">
                  ★ Best Seller
                </div>
              </div>
              
              {/* Quick stats overlay */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-brand-cream/10 backdrop-blur p-3 text-center rounded-lg">
                  <div className="text-brand-yellow font-heading text-xl">7</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cream/60">Crops</div>
                </div>
                <div className="bg-brand-cream/10 backdrop-blur p-3 text-center rounded-lg">
                  <div className="text-brand-yellow font-heading text-xl">29</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cream/60">Blades</div>
                </div>
                <div className="bg-brand-cream/10 backdrop-blur p-3 text-center rounded-lg">
                  <div className="text-brand-yellow font-heading text-xl">3+</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cream/60">Warranty</div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-yellow px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4">
                <Star className="w-3 h-3 fill-brand-yellow" />
                Premium Quality
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl uppercase leading-[0.9] mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-brand-yellow font-medium mb-4">
                {product.tagline}
              </p>
              
              <p className="text-brand-cream/70 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {productBenefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-brand-cream/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/enquiry" 
                  className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all hover:gap-5"
                >
                  Request Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`} 
                  className="inline-flex items-center gap-2 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-brand-cream/10">
                {productHighlights.slice(0, 3).map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-brand-yellow" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider">{item.label}</div>
                      <div className="text-[10px] text-brand-cream/50">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-brand-charcoal border-t border-brand-cream/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <metric.icon className="w-6 h-6 text-brand-yellow mx-auto mb-2" />
                <div className="font-heading text-2xl text-white">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <Wrench className="w-6 h-6 text-brand-red" />
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red">Specifications</div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4">
              Technical <span className="text-brand-red">spec sheet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Detailed technical specifications for the {product.name}. All measurements and standards are verified and tested.
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="border border-border rounded-xl overflow-hidden shadow-lg">
              {product.specs.map((s: { label: string; value: string }, i: number) => (
                <div 
                  key={s.label} 
                  className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-muted/30"
                  } hover:bg-muted/50 transition-colors`}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-red font-bold">
                    <div className="w-1 h-1 bg-brand-red rounded-full" />
                    {s.label}
                  </div>
                  <div className="md:col-span-2 text-foreground font-medium text-lg">{s.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Additional features */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {productHighlights.map((highlight, i) => (
              <Reveal key={highlight.label} delay={i * 0.08}>
                <div className="border border-border p-6 rounded-xl hover:shadow-lg transition-all hover:border-brand-red group">
                  <highlight.icon className="w-8 h-8 text-brand-red mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading text-sm uppercase tracking-widest">{highlight.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{highlight.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Why Choose</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                Built to <span className="text-brand-yellow">perform</span>
              </h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productBenefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-brand-cream/5 border border-brand-cream/10 p-6 rounded-xl hover:border-brand-yellow transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow group-hover:text-brand-charcoal transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-white">{benefit}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related / Similar Products */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-2">Related Products</div>
                <h2 className="font-heading text-4xl uppercase">Explore <span className="text-brand-red">more</span></h2>
              </div>
              <Link to="/products" className="text-sm uppercase tracking-widest text-brand-red font-semibold hover:underline">
                View All →
              </Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link 
                  to="/products/$slug" 
                  params={{ slug: p.slug }} 
                  className="group block bg-card border border-border overflow-hidden rounded-xl hover:shadow-2xl transition-all hover:border-brand-red"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest text-brand-red mb-1">{p.category}</div>
                    <h3 className="font-heading text-xl uppercase leading-tight group-hover:text-brand-red transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
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

      {/* Navigation between products */}
      <section className="py-12 bg-brand-charcoal border-y border-brand-cream/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link 
              to="/products/$slug" 
              params={{ slug: prev.slug }} 
              className="group inline-flex items-center gap-2 text-brand-cream/60 hover:text-brand-yellow transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm uppercase tracking-widest">Previous</span>
            </Link>
            
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest text-brand-cream/40">Browse</div>
              <div className="flex gap-2 mt-1">
                {PRODUCTS.map((p, i) => (
                  <Link 
                    key={p.slug}
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      p.slug === product.slug ? 'bg-brand-yellow w-6' : 'bg-brand-cream/20 hover:bg-brand-cream/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <Link 
              to="/products/$slug" 
              params={{ slug: next.slug }} 
              className="group inline-flex items-center gap-2 text-brand-cream/60 hover:text-brand-yellow transition-colors"
            >
              <span className="text-sm uppercase tracking-widest">Next</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky CTA - Show on scroll */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-charcoal/95 backdrop-blur border-t border-brand-cream/10 p-4 z-50 transform translate-y-full animate-[slideUp_0.5s_ease-out_2s_forwards] hidden md:block">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
            <div>
              <div className="font-heading text-sm text-white uppercase">{product.name}</div>
              <div className="text-xs text-brand-cream/60">{product.category}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/enquiry" 
              className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Get Quote
            </Link>
            <a 
              href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
              className="border border-brand-cream/30 hover:border-brand-yellow text-brand-cream hover:text-brand-yellow px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}