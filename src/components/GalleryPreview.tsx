import { useRef, useState, useMemo } from "react";
import { 
  motion, 
  useTransform, 
  useAnimationFrame,
  useMotionValue,
  wrap
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { galleryItems } from "@/data/galleryData";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxRow({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  /**
   * Continuous wrap - it should roughly correspond to the width of the children
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000) * 0.8; // Reduced speed for an elegant flow
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax flex whitespace-nowrap overflow-hidden flex-nowrap">
      <motion.div className="scroller flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function GalleryPreview() {
  const featured = galleryItems.slice(0, 8);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  
  const row1 = useMemo(() => featured.slice(0, 4), [featured]);
  const row2 = useMemo(() => featured.slice(4, 8), [featured]);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const renderItem = (item: any) => (
    <div key={item.id} className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl overflow-hidden shrink-0 group mx-3 shadow-2xl bg-muted">
      {!loadedImages[item.id] && <Skeleton className="absolute inset-0 z-10 w-full h-full rounded-2xl" />}
      <img 
        src={item.image} 
        alt={item.title} 
        onLoad={() => handleImageLoad(item.id)}
        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 ${loadedImages[item.id] ? 'opacity-100' : 'opacity-0'}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-6 left-6 pr-6 pointer-events-none">
        <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
        <h3 className="text-white font-display text-xl font-bold mb-1 leading-tight tracking-tight">{item.title}</h3>
        <p className="text-white/60 text-[9px] uppercase tracking-wider flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4 font-bold">Bespoke Production</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
              Immersive <span className="text-gradient-gold italic font-medium">Visuals</span>
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex text-primary hover:text-gold-light group hover:bg-transparent">
            <Link to="/portfolio" className="flex items-center tracking-widest text-[10px] uppercase font-bold">
              Explore All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="space-y-8">
        <ParallaxRow baseVelocity={-1}>
          {row1.map(renderItem)}
        </ParallaxRow>
        
        <ParallaxRow baseVelocity={1}>
          {row2.map(renderItem)}
        </ParallaxRow>
      </div>

      <div className="container mx-auto px-4 mt-20 md:hidden text-center">
        <Button asChild variant="outline" className="h-14 border-white/10 text-white rounded-full uppercase tracking-widest text-xs px-10">
          <Link to="/portfolio">
            View All Projects
          </Link>
        </Button>
      </div>
    </section>
  );
}
