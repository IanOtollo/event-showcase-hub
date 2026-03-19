import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/galleryData";

export function GalleryPreview() {
  const featured = galleryItems.slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">Featured Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Recent <span className="text-gradient-gold italic">Projects</span>
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex text-primary hover:text-gold-light">
            <Link to="/portfolio">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              {item.mediaType === "Video" && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play className="h-3 w-3 text-primary-foreground fill-current" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="font-display text-base font-semibold leading-tight mb-1">{item.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <Button asChild variant="outline" className="border-primary/30 text-primary">
            <Link to="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
