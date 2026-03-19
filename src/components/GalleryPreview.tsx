import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/galleryData";

export function GalleryPreview() {
  const featured = galleryItems.slice(0, 8); // Take more items for the rows
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Increased speed by using larger transform range
  const x1 = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  const row1 = featured.slice(0, 4);
  const row2 = featured.slice(4, 8);

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">Bespoke Production</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Immersive <span className="text-gradient-gold italic">Visuals</span>
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex text-primary hover:text-gold-light group">
            <Link to="/portfolio" className="flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="space-y-12">
        {/* Row 1 - Moves Left on Scroll Down */}
        <motion.div style={{ x: x1 }} className="flex gap-6 whitespace-nowrap px-4">
          {row1.map((item) => (
            <div key={item.id} className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl overflow-hidden shrink-0 group shadow-2xl">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 pr-6 pointer-events-none">
                <span className="text-xs text-primary font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
                <h3 className="text-white font-display text-xl font-bold mb-1 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-wider flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moves Right on Scroll Down */}
        <motion.div style={{ x: x2 }} className="flex gap-6 whitespace-nowrap px-4 md:pl-[200px]">
          {row2.map((item) => (
            <div key={item.id} className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl overflow-hidden shrink-0 group shadow-2xl">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 pr-6 pointer-events-none">
                <span className="text-xs text-primary font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
                <h3 className="text-white font-display text-xl font-bold mb-1 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-wider flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-20 md:hidden">
        <Button asChild variant="outline" className="w-full border-primary/30 text-primary">
          <Link to="/portfolio" className="flex items-center justify-center">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
