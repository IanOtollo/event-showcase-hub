import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Video, CheckCircle2, PlayCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoCoverage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 text-primary mb-6">
              <Video className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.3em] font-medium">Cinematic Vision</span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Corporate <span className="text-gradient-gold italic">Video Production</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 font-light leading-relaxed">
              We don't just record events; we craft cinematic experiences that preserve your brand's most important moments. Our production team utilizes cinema-grade 4K equipment and sophisticated lighting to ensure your event looks as premium on screen as it does in person.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                  <Camera className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">4K Cinema Capture</h3>
                  <p className="text-sm text-muted-foreground">Utilizing industry-leading Sony and Blackmagic cinema cameras for unparalleled image quality.</p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                  <PlayCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Engaging Edits</h3>
                  <p className="text-sm text-muted-foreground">Expert post-production focused on rhythm, messaging, and visual storytelling.</p>
                </div>
              </div>
              <div className="space-y-4 py-4">
                <h2 className="text-2xl font-bold font-display">Production Features</h2>
                {[
                  "Multi-Camera Live Switching",
                  "Aerial 4K Drone Coverage",
                  "Professional Audio Mastering",
                  "Color Grading & Brand Matching",
                  "Interviews & Testimonial Clips",
                  "Same-Day Edit Highlights"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 py-2 border-b border-border/50">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoCoverage;
