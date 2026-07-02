import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES, PRODUCTS } from "@/lib/site-data";
import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Deosi Reaper in the Field" },
      { name: "description", content: "See Deosi Reapers working across Indian fields — wheat, paddy, mustard harvesting in action." },
      { property: "og:title", content: "Deosi Reaper — Gallery" },
      { property: "og:description", content: "Photos from farms across India." },
    ],
  }),
  component: Gallery,
});

const images = [
  IMAGES.reaperYellowSonalika,
  IMAGES.reaperOrangeGreen,
  IMAGES.reaperYellowCloseup,
  IMAGES.reaperRedMounted,
  IMAGES.reaperSwarajYellow,
  IMAGES.posterMountedFront,
  IMAGES.posterBinder,
  IMAGES.posterCatalogue,
  IMAGES.posterContact,
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Deosi in the field."
        description="Six decades of harvest seasons, captured across Punjab, Haryana and beyond."
        image={IMAGES.reaperYellowSonalika}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(src)}
                  className={`relative block w-full overflow-hidden bg-muted ${
                    i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}><X className="w-8 h-8" /></button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </>
  );
}
