import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Play, X, Calendar, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryItems, categories, type EventCategory, type GalleryItem } from "@/data/galleryData";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">Our Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Portfolio <span className="text-gradient-gold italic">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Browse our collection of corporate events — from intimate board meetings to
            large-scale conferences. Filter by event type to find what inspires you.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-gold"
                  : "bg-white/5 text-muted-foreground border-white/5 hover:border-white/20 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-muted"
              >
                {!loadedImages[item.id] && <Skeleton className="absolute inset-0 z-10 w-full h-full" />}
                <img
                  src={item.image}
                  alt={item.title}
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${loadedImages[item.id] ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                {item.mediaType === "Video" && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                    <Play className="h-3 w-3 text-primary-foreground fill-current" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Badge variant="outline" className="mb-2 text-xs border-primary/30 text-primary">
                    {item.category}
                  </Badge>
                  <h3 className="font-display text-lg font-semibold leading-tight mb-1">{item.title}</h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</span>
                    <span>{item.eventType}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-card rounded-lg overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-3 border-primary/30 text-primary text-xs">{selectedItem.category}</Badge>
                <h2 className="font-display text-2xl font-bold mb-2">{selectedItem.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" />{selectedItem.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-primary" />{new Date(selectedItem.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  {selectedItem.client && <span className="flex items-center gap-1"><Building2 className="h-4 w-4 text-primary" />{selectedItem.client}</span>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
