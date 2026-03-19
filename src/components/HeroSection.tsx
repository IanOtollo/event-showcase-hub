import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-event.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Corporate event with cinematic lighting and professional camera setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Corporate Events • Video Production • Livestreaming
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            We Capture Your{" "}
            <span className="text-gradient-gold italic">Story</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Full-service corporate event planning, cinematic video coverage, and
            professional livestreaming — crafted for brands that demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark font-semibold tracking-wide text-sm uppercase px-8">
              <Link to="/portfolio">
                <Camera className="mr-2 h-4 w-4" />
                View Portfolio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 tracking-wide text-sm uppercase px-8">
              <a href="#contact">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get a Quote
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
