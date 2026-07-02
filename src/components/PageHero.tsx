import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative bg-brand-charcoal text-brand-cream overflow-hidden grain-overlay">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-yellow mb-6">
            <Link to="/" className="hover:text-brand-cream">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-cream/70">{eyebrow}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl uppercase leading-[0.95] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-brand-cream/70 max-w-2xl leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
      <div className="diagonal-stripes h-2" />
    </section>
  );
}
