import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site-data";
import { Play, Youtube } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Deosi Reaper Working Demos" },
      { name: "description", content: "Watch Deosi Reapers in action — cutting wheat, paddy and mustard across Indian farms." },
      { property: "og:title", content: "Deosi Reaper — Videos" },
      { property: "og:description", content: "Working demos from the field." },
    ],
  }),
  component: Videos,
});

const videos = [
  { 
    title: "Deosi Reaper — Wheat Harvesting Demo", 
    desc: "Front-mounted reaper in a wheat field, Mansa.",
    url: "https://youtu.be/lv65injrxvQ?si=aD1-ONJ0Pq9y4tGd"
  },
  { 
    title: "Deosi Binder Reaper — Cut & Bind", 
    desc: "Single-pass cutting and bundling in paddy.",
    url: "https://youtu.be/v270pgb3-GA?si=S2zJJi5Yp21YX_g2"
  },
  { 
    title: "Deosi Multicrop Reaper", 
    desc: "Switching between wheat and mustard operations.",
    url: "https://youtube.com/shorts/i6fD6YBfei4?si=XAk2spg1dNTHoOgR"
  },
  { 
    title: "Field Test — Punjab Season", 
    desc: "Long-shift operation across a 12-acre plot.",
    url: "https://www.youtube.com/shorts/JtimKn9v7Jc"
  },
  { 
    title: "Reaper Maintenance Guide", 
    desc: "In-field blade and finger replacement walkthrough.",
    url: "youtube.com/watch?v=56Y_jq_PA4s&feature=youtu.be"
  },
  { 
    title: "Farmer Testimonial — Haryana", 
    desc: "Owner interview after three harvest seasons.",
    url: "https://youtu.be/lv65injrxvQ?si=aD1-ONJ0Pq9y4tGd" // Reusing first video as fallback
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="See Deosi in action."
        description="Working demos, field tests, and farmer conversations. Full playlists on our YouTube channel."
        image={IMAGES.posterBinder}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-card border border-border overflow-hidden hover:border-brand-red transition-all"
                >
                  <div className="relative aspect-video bg-brand-charcoal overflow-hidden">
                    <img
                      src={[IMAGES.reaperYellowSonalika, IMAGES.reaperOrangeGreen, IMAGES.reaperRedMounted, IMAGES.reaperSwarajYellow, IMAGES.reaperYellowCloseup, IMAGES.posterMountedFront][i]}
                      alt={v.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl uppercase leading-tight mb-2 group-hover:text-brand-red transition-colors">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <a
                href="https://www.youtube.com/results?search_query=Deosi+Agriculture+Works+Deosi+Reaper"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-colors"
              >
                <Youtube className="w-5 h-5" /> Full YouTube Channel
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}