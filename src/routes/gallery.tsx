import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site-data";
import { motion } from "motion/react";
import { useState } from "react";
import { X, Download, Grid, LayoutGrid } from "lucide-react";

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

// Import images from assets/products folder
const productImages = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  return `/src/assets/products/${num}.jpeg`;
});

// Combine with existing IMAGES (removed the last 4 images)
const galleryImages = [
  ...productImages,
  IMAGES.reaperYellowSonalika,
  IMAGES.reaperOrangeGreen,
  IMAGES.reaperYellowCloseup,
  IMAGES.reaperRedMounted,
  IMAGES.reaperSwarajYellow,
];

// Categories for filtering
const categories = [
  { id: "all", label: "All Photos" },
  { id: "products", label: "Products" },
  { id: "field", label: "Field Shots" },
  { id: "action", label: "In Action" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  // Assign categories to each image based on index
  const getImageCategory = (index: number): string => {
    if (index < 12) return "products";
    if (index < 15) return "field";
    return "action";
  };

  const filteredImages = galleryImages.filter((_, index) => {
    if (selectedCategory === "all") return true;
    return getImageCategory(index) === selectedCategory;
  });

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Deosi in the field."
        description="Six decades of harvest seasons, captured across Punjab, Haryana and beyond."
        image={IMAGES.reaperYellowSonalika}
      />

      {/* Gallery Controls */}
      <section className="py-8 border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-brand-red text-white"
                    : "bg-transparent text-muted-foreground hover:bg-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors ${
                viewMode === "grid" ? "text-brand-red" : "text-muted-foreground"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 transition-colors ${
                viewMode === "masonry" ? "text-brand-red" : "text-muted-foreground"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Image Count */}
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
          </div>

          {/* 3x3 Grid with uniform aspect ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((src, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLightbox(src)}
                  className="relative block w-full overflow-hidden bg-muted rounded-lg shadow-md group aspect-square"
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white text-xs uppercase tracking-widest">
                          {getImageCategory(i) === "products" && "📦 Product"}
                          {getImageCategory(i) === "field" && "🌾 Field"}
                          {getImageCategory(i) === "action" && "⚡ In Action"}
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              const link = document.createElement('a');
                              link.href = src;
                              link.download = `deosi-gallery-${i+1}.jpg`;
                              link.click();
                            }}
                            className="bg-white/20 backdrop-blur text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <Download className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-brand-red text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">
                    {getImageCategory(i)}
                  </div>

                  {/* Image number */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur text-white/80 text-[10px] font-mono px-2 py-1 rounded">
                    #{i + 1}
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>

          {/* No results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">📸</div>
              <div className="text-muted-foreground text-lg">No images found in this category</div>
              <button 
                onClick={() => setSelectedCategory("all")}
                className="mt-4 text-brand-red font-semibold hover:underline"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={lightbox}
            alt="Gallery image"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.indexOf(lightbox);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
              setLightbox(galleryImages[prevIndex]);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.indexOf(lightbox);
              const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
              setLightbox(galleryImages[nextIndex]);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full">
            {galleryImages.indexOf(lightbox) + 1} / {galleryImages.length}
          </div>

          {/* Download button in lightbox */}
          <button 
            className="absolute bottom-8 right-8 text-white/60 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
            onClick={(e) => {
              e.stopPropagation();
              const link = document.createElement('a');
              link.href = lightbox;
              link.download = `deosi-gallery-${galleryImages.indexOf(lightbox) + 1}.jpg`;
              link.click();
            }}
          >
            <Download className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </>
  );
}