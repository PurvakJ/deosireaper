import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COMPANY, IMAGES } from "@/lib/site-data";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send,
  ChevronRight,
  Building,
  Award,
  Headphones,
  Truck,
  ThumbsUp
} from "lucide-react";

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
  // Only use the second phone number
  const phoneNumbers = COMPANY.phones.slice(1); // Keep only the second number
  
  // Additional contact info - removed showroom
  const contactDetails = [
    { 
      icon: MapPin, 
      label: "Head Office", 
      value: COMPANY.address,
      highlight: "Workshop & Manufacturing"
    },
    { 
      icon: Phone, 
      label: "Call Us", 
      value: phoneNumbers.join(" · "),
      highlight: "Available during working hours"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: `${COMPANY.email}`,
      highlight: "We reply within 24 hours"
    },
  ];

  const quickLinks = [
    { label: "Request a Quote", icon: Send, to: "/enquiry" },
    { label: "View Products", icon: ChevronRight, to: "/products" },
    { label: "About Us", icon: Building, to: "/about" },
    { label: "Gallery", icon: Globe, to: "/gallery" },
  ];

  const supportInfo = [
    { icon: Headphones, label: "24/7 Support", description: "Round the clock assistance" },
    { icon: Truck, label: "Pan-India Delivery", description: "Nationwide shipping" },
    { icon: Award, label: "3+ Years Warranty", description: "Comprehensive coverage" },
    { icon: ThumbsUp, label: "98% Satisfaction", description: "Happy farmers" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help."
        description="Reach us by phone, email or drop in at our Mansa workshop and showroom."
        image={IMAGES.posterContact}
      />

      {/* Contact Cards */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-muted/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {contactDetails.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="group bg-card border border-border p-6 sm:p-8 hover:border-brand-red hover:shadow-xl transition-all rounded-xl hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-red font-bold mb-1">{c.label}</div>
                  <div className="text-xs sm:text-sm text-foreground leading-relaxed font-medium break-words">{c.value}</div>
                  <div className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">{c.highlight}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Details Section */}
      <section className="pb-12 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            
            {/* Map Column */}
            <Reveal>
              <div className="relative h-full">
                <div className="w-full overflow-hidden rounded-xl shadow-2xl border border-border" style={{ minHeight: '320px', height: '100%' }}>
                  <iframe
                    title="Deosi Agriculture Works — Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1908.9403018343407!2d75.39504450808893!3d30.033424021801654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1783047599276!5m2!1sen!2sin"
                    className="w-full h-full absolute inset-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ minHeight: '320px', position: 'relative' }}
                  />
                </div>
                {/* Find Us Badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-brand-yellow text-brand-charcoal p-3 sm:p-4 rounded-lg shadow-lg z-10">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> 
                    <span>Find Us</span>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Working Hours Column */}
            <Reveal delay={0.1}>
              <div className="bg-brand-charcoal text-brand-cream p-6 sm:p-8 md:p-10 rounded-xl grain-overlay shadow-2xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-red/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-yellow/10 rounded-full blur-2xl" />
                
                <div className="relative flex-1 flex flex-col">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-yellow mb-3 sm:mb-4 flex items-center gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    Working Hours
                  </div>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase mb-4 sm:mb-6 md:mb-8 leading-[1.1]">
                    Visit the <br className="hidden sm:block" /><span className="text-brand-yellow">workshop</span>.
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-1">
                    <Row 
                      icon={Clock} 
                      label="Mon – Sat" 
                      value="9:00 AM – 7:00 PM"
                      highlight="Open for walk-ins"
                    />
                    <Row 
                      icon={Clock} 
                      label="Sunday" 
                      value="10:00 AM – 4:00 PM"
                      highlight="Limited support"
                    />
                    <Row 
                      icon={Phone} 
                      label="Contact" 
                      value={phoneNumbers[0] || "+91 98157 80231"}
                      highlight="Call for inquiries"
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-brand-cream/10 flex flex-wrap gap-2 sm:gap-3">
                    <a 
                      href={`tel:${(phoneNumbers[0] || "+91 98157 80231").replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-xs uppercase tracking-widest font-semibold transition-colors rounded flex-1 sm:flex-none justify-center"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> Call Now
                    </a>
                    <a 
                      href={`mailto:${COMPANY.email}`}
                      className="inline-flex items-center gap-2 border border-brand-cream/30 hover:border-brand-yellow text-brand-cream hover:text-brand-yellow px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-xs uppercase tracking-widest font-semibold transition-colors rounded flex-1 sm:flex-none justify-center"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" /> Email Us
                    </a>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-brand-cream/10 text-[10px] sm:text-xs uppercase tracking-widest text-brand-cream/40 text-center sm:text-left">
                    Built Strong · Made to Perform · Backed by Trust
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Support & Quick Links */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red mb-4">Support</div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.1]">
                We're here to <span className="text-brand-red">assist</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-4">
                Whether you need technical support, product information, or want to place an order — we're just a call away.
              </p>
            </div>
          </Reveal>

          {/* Support Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 md:mb-16">
            {supportInfo.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="bg-card border border-border p-4 sm:p-6 text-center rounded-lg hover:border-brand-red hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:bg-brand-red transition-colors">
                    <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-heading text-xs sm:text-lg uppercase">{item.label}</h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick Links */}
          <Reveal>
            <div className="bg-brand-charcoal text-brand-cream rounded-xl p-6 sm:p-8 md:p-12 grain-overlay">
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Quick Links</div>
                <h3 className="font-heading text-lg sm:text-2xl uppercase mt-2">Need something specific?</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {quickLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.to}
                    className="group flex items-center justify-between gap-2 sm:gap-3 border border-brand-cream/10 hover:border-brand-yellow p-3 sm:p-4 rounded-lg transition-all hover:bg-brand-cream/5"
                  >
                    <span className="text-[11px] sm:text-sm font-medium">{link.label}</span>
                    <link.icon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-brand-red text-white py-12 md:py-16">
        <div className="absolute inset-0 diagonal-stripes opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-yellow mb-2 sm:mb-3">Ready to Get Started?</div>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase leading-tight">
              Let's talk about your <br className="hidden sm:block" /><span className="text-brand-yellow">harvest needs</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href={`mailto:${COMPANY.email}`}
              className="bg-brand-yellow text-brand-charcoal hover:bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-colors rounded text-center"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
              Email Us
            </a>
            <a 
              href={`tel:${(phoneNumbers[0] || "+91 98157 80231").replace(/\s/g, "")}`}
              className="border-2 border-white/40 hover:bg-white hover:text-brand-red px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-colors rounded text-center"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ 
  icon: Icon, 
  label, 
  value, 
  highlight 
}: { 
  icon: any; 
  label: string; 
  value: string; 
  highlight?: string;
}) {
  return (
    <div className="flex gap-3 sm:gap-4 group hover:bg-brand-cream/5 p-1.5 sm:p-2 rounded-lg transition-colors">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0 rounded-lg group-hover:bg-brand-red group-hover:border-brand-yellow transition-colors">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red group-hover:text-brand-yellow transition-colors" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-brand-cream/50">{label}</div>
        <div className="text-xs sm:text-sm text-brand-cream/90 font-medium break-words">{value}</div>
        {highlight && <div className="text-[10px] sm:text-xs text-brand-yellow/60 break-words">{highlight}</div>}
      </div>
    </div>
  );
}