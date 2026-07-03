import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES, COMPANY } from "@/lib/site-data";
import { 
  Award, 
  MapPin, 
  Wrench, 
  Users, 
  Calendar, 
  Trophy, 
  ShieldCheck,
  Star,
  ThumbsUp,
  Leaf,
  Zap,
  CheckCircle,
  Building,
  Globe
} from "lucide-react";

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
  // Extended values data
  const values = [
    { 
      icon: Award, 
      title: "Quality First", 
      body: "ISO 9001:2008 certified processes. Every unit hand-inspected before dispatch." 
    },
    { 
      icon: Wrench, 
      title: "Field-Serviceable", 
      body: "Designed so blades, fingers and belts can be swapped in-field with basic tools." 
    },
    { 
      icon: Users, 
      title: "Farmer-Led Design", 
      body: "Our reapers evolve from feedback loops with the operators who use them every season." 
    },
    { 
      icon: MapPin, 
      title: "Nationwide Network", 
      body: "Distribution and service partners across Punjab, Haryana, UP, MP and Rajasthan." 
    },
  ];

  // Milestones data
  const milestones = [
    { year: "1964", title: "The Beginning", description: "Founded in Mansa, Punjab with a vision to build durable farm implements." },
    { year: "1980", title: "First Reaper", description: "Launched our first tractor-mounted reaper for the wheat harvest season." },
    { year: "1995", title: "Expansion", description: "Expanded operations to serve farmers across North India." },
    { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management." },
    { year: "2010", title: "Government Approval", description: "Received Govt. of India approval for all reaper models." },
    { year: "2024", title: "60 Years Strong", description: "Celebrating six decades of serving the farming community." },
  ];

  // Stats data
  const stats = [
    { number: "60+", label: "Years of Excellence", icon: Calendar },
    { number: "50,000+", label: "Farmers Served", icon: Users },
    { number: "500+", label: "Dealer Network", icon: Globe },
    { number: "7", label: "Crops Supported", icon: Leaf },
    { number: "29", label: "Blades per Machine", icon: Zap },
    { number: "98%", label: "Satisfaction Rate", icon: ThumbsUp },
  ];

  // Certifications data
  const certifications = [
    { label: "ISO 9001:2008", icon: ShieldCheck, description: "International quality management standard" },
    { label: "Govt. of India Approved", icon: CheckCircle, description: "Approved by Ministry of Agriculture" },
    { label: "Made in India", icon: Star, description: "Proudly manufactured in Mansa, Punjab" },
    { label: "3+ Years Warranty", icon: Trophy, description: "Comprehensive coverage on all machines" },
  ];

  // Team/Leadership data
  const leadership = [
    { 
      name: "Kartar Singh Deosi", 
      role: "Founder", 
      description: "Started Deosi Agriculture Works in 1964 with a vision to revolutionize Indian farming.",
      years: "1964-1990"
    },
    { 
      name: "Gurmeet Singh Deosi", 
      role: "Chairman", 
      description: "Led the company through expansion and ISO certification, establishing Deosi as India's No.1 reaper manufacturer.",
      years: "1990-2020"
    },
    { 
      name: "Harpreet Singh Deosi", 
      role: "Managing Director", 
      description: "Continuing the legacy with innovation, technology integration, and nationwide expansion.",
      years: "2020-Present"
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Six decades of reaper craft."
        description="From a workshop in Mansa, Punjab in 1964 to farms across India today — the Deosi story is one of steady, stubborn commitment to quality."
        image={IMAGES.posterCatalogue}
      />

      {/* Legacy Stats */}
      <section className="py-12 bg-brand-charcoal border-y border-brand-cream/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <div className="text-center">
                  <stat.icon className="w-6 h-6 text-brand-yellow mx-auto mb-2" />
                  <div className="font-heading text-2xl md:text-3xl text-white">{stat.number}</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cream/50 mt-1">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={IMAGES.reaperRedMounted} alt="Deosi Reaper" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-brand-red p-6 max-w-[200px]">
                <div className="font-heading text-3xl text-white">#1</div>
                <div className="text-xs uppercase tracking-widest text-brand-yellow mt-1">India's No.1 Reaper</div>
              </div>
            </div>
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

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div>
                <div className="font-heading text-2xl text-brand-red">60+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years</div>
              </div>
              <div>
                <div className="font-heading text-2xl text-brand-red">7</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Crops</div>
              </div>
              <div>
                <div className="font-heading text-2xl text-brand-red">29</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Blades</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Our Journey</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                A legacy of <span className="text-brand-red">excellence</span>.
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-red/20 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <Reveal key={milestone.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6 md:gap-12 relative`}>
                    <div className="flex-1 md:text-right">
                      <div className="text-xs uppercase tracking-[0.3em] text-brand-red font-bold">{milestone.year}</div>
                      <h3 className="font-heading text-2xl uppercase mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                    <div className="flex-none flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-brand-red border-4 border-brand-yellow flex items-center justify-center relative z-10">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex-1 md:flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-charcoal text-brand-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Our Values</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                What we <span className="text-brand-yellow">stand for</span>.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border border-brand-cream/10 p-8 h-full hover:border-brand-yellow transition-all hover:bg-brand-cream/5">
                  <v.icon className="w-9 h-9 text-brand-yellow mb-5" />
                  <h3 className="font-heading text-xl uppercase mb-3">{v.title}</h3>
                  <p className="text-sm text-brand-cream/70 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Certifications</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                Quality <span className="text-brand-red">assured</span>.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.label} delay={i * 0.1}>
                <div className="border border-border p-8 text-center hover:border-brand-red transition-all hover:shadow-lg">
                  <cert.icon className="w-10 h-10 text-brand-red mx-auto mb-4" />
                  <h3 className="font-heading text-sm uppercase tracking-widest">{cert.label}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{cert.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Company Snapshot</div>
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-4">At a glance.</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Everything you need to know about Deosi Agriculture Works — from our foundation to our reach today.
            </p>
          </Reveal>
          <div className="border border-border rounded-lg overflow-hidden">
            {[
              ["Company", COMPANY.name],
              ["Brand", COMPANY.brand],
              ["Founded", String(COMPANY.founded)],
              ["Certification", "ISO 9001:2008 · Govt. of India Approved"],
              ["Specialisation", "Tractor Mounted Reapers — Wheat, Paddy, Mustard, Soyabean, Jubar, Bajra, Maize"],
              ["Distribution", "Punjab, Haryana, UP, MP, Rajasthan and other Indian states"],
              ["Headquarters", "Mansa, Punjab, India"],
              ["Product Range", "4+ Models across different crop types and field conditions"],
              ["Customer Base", "50,000+ farmers across 10+ Indian states"],
              ["Warranty", "Comprehensive 3+ years warranty on all machines"],
            ].map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ${i % 2 === 0 ? "bg-muted/40" : ""}`}>
                <div className="text-xs uppercase tracking-widest text-brand-red font-semibold flex items-center gap-2">
                  {k === "Company" && <Building className="w-4 h-4" />}
                  {k === "Founded" && <Calendar className="w-4 h-4" />}
                  {k === "Certification" && <ShieldCheck className="w-4 h-4" />}
                  {k === "Distribution" && <Globe className="w-4 h-4" />}
                  {k === "Headquarters" && <MapPin className="w-4 h-4" />}
                  {k === "Customer Base" && <Users className="w-4 h-4" />}
                  {k === "Warranty" && <Trophy className="w-4 h-4" />}
                  {k}
                </div>
                <div className="md:col-span-2 text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Leadership</div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[0.95]">
                Family <span className="text-brand-red">legacy</span>.
              </h2>
              <p className="text-muted-foreground mt-4">Three generations of dedication to Indian agriculture.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 0.1}>
                <div className="border border-border p-8 hover:border-brand-red transition-all">
                  <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="font-heading text-2xl uppercase">{leader.name}</h3>
                  <div className="text-xs uppercase tracking-widest text-brand-red font-bold mt-1">{leader.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{leader.years}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{leader.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-brand-red text-white py-20">
        <div className="absolute inset-0 diagonal-stripes opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-3">Connect With Us</div>
            <h3 className="font-heading text-4xl md:text-5xl uppercase leading-tight">
              Be part of our <br /><span className="text-brand-yellow">legacy</span>.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`} 
              className="border-2 border-white/40 hover:bg-white hover:text-brand-red px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href={`mailto:${COMPANY.email}`}
              className="bg-brand-yellow text-brand-charcoal hover:bg-white px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}