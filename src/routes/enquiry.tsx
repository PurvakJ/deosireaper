import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS, IMAGES, COMPANY } from "@/lib/site-data";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Send Enquiry — Deosi Reaper" },
      { name: "description", content: "Request a quote or product details from Deosi Agriculture Works. We respond within one business day." },
      { property: "og:title", content: "Send Enquiry — Deosi Reaper" },
      { property: "og:description", content: "Request a quote or product details." },
    ],
  }),
  component: Enquiry,
});

function Enquiry() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Send Enquiry"
        title="Tell us what you need."
        description="Share your requirement and we'll get back with pricing, availability and delivery timeline — usually within one working day."
        image={IMAGES.posterContact}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="bg-card border border-border p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-10"
                    >
                      <CheckCircle2 className="w-16 h-16 text-brand-red mx-auto mb-4" />
                      <h3 className="font-heading text-3xl uppercase mb-3">Enquiry Received</h3>
                      <p className="text-muted-foreground">We'll be in touch shortly. For urgent needs, call {COMPANY.phones[1]}.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="text-xs uppercase tracking-[0.3em] text-brand-red">Fill the form below</div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <Field label="Full Name" name="name" required />
                        <Field label="Phone Number" name="phone" type="tel" required />
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <Field label="Email" name="email" type="email" required />
                        <Field label="City / State" name="city" required />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Product of Interest</label>
                        <select name="product" className="w-full border border-border bg-background px-4 py-3 focus:border-brand-red outline-none">
                          <option value="">Select a product…</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.slug} value={p.slug}>{p.name}</option>
                          ))}
                          <option value="other">Other / Not sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                        <textarea name="message" rows={5} className="w-full border border-border bg-background px-4 py-3 focus:border-brand-red outline-none resize-none" placeholder="Tell us about your farm, crop, tractor HP…" />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-4 text-sm uppercase tracking-widest font-semibold transition-colors"
                      >
                        Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-brand-charcoal text-brand-cream p-8 md:p-10 h-full grain-overlay">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">Direct Contact</div>
                <h3 className="font-heading text-3xl uppercase mb-8">Prefer to call?</h3>
                <ul className="space-y-5">
                  {COMPANY.phones.map((p) => (
                    <li key={p} className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-brand-red" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">Phone</div>
                        <a href={`tel:${p.replace(/\s/g, "")}`} className="text-lg hover:text-brand-yellow">{p}</a>
                      </div>
                    </li>
                  ))}
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-red" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">Email</div>
                      <a href={`mailto:${COMPANY.email}`} className="text-lg hover:text-brand-yellow">{COMPANY.email}</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-brand-red" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">Visit</div>
                      <div className="text-sm text-brand-cream/80">{COMPANY.address}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-border bg-background px-4 py-3 focus:border-brand-red outline-none transition-colors"
      />
    </div>
  );
}
