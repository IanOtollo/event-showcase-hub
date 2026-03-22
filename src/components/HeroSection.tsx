import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-event.jpg";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax-ready setup */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src={heroImage}
          alt="Corporate event production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p 
            variants={itemVariants}
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-[0.4em] mb-8"
          >
            Corporate Events • Video Production • Livestreaming
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter"
          >
            We Capture Your{" "}
            <span className="text-gradient-gold italic font-medium block md:inline">Momentum</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance"
          >
            Full-service corporate event planning and cinematic video production
            crafted for brands that demand nothing short of excellence.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button asChild size="lg" className="h-14 bg-primary text-primary-foreground hover:bg-gold-dark font-bold tracking-widest text-xs uppercase px-10 rounded-full transition-all duration-300">
              <Link to="/portfolio" className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Explore Portfolio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 tracking-widest text-xs uppercase px-10 rounded-full transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                Consult With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-0.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
