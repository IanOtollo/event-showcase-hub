import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Inquiry sent successfully!", {
      description: "Our production team will contact you shortly.",
    });
    
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Let's Create Something{" "}
              <span className="text-gradient-gold italic">Remarkable</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you're planning a corporate conference, product launch, or gala dinner —
              we'd love to bring your vision to life with world-class production.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:hello@mosesmusah.events?subject=Event Inquiry - Moses Musah Events"
                className="flex items-center gap-4 group hover:bg-white/5 p-2 -m-2 rounded-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Email</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">hello@mosesmusah.events</p>
                </div>
              </a>
              
              <a 
                href="tel:+254700000000"
                className="flex items-center gap-4 group hover:bg-white/5 p-2 -m-2 rounded-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Phone</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">+254 700 000 000</p>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Nairobi,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-white/5 p-2 -m-2 rounded-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Location</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">Nairobi, Kenya</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 bg-gradient-card rounded-lg p-8 border border-border"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <Input required placeholder="Your name" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Company</label>
                <Input placeholder="Company name" className="bg-secondary border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <Input required type="email" placeholder="your@email.com" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Event Type</label>
              <Input placeholder="e.g. Conference, Gala, Product Launch" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <Textarea required placeholder="Tell us about your event..." rows={4} className="bg-secondary border-border resize-none" />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-gold-dark font-semibold tracking-wide uppercase text-sm"
              asChild={false}
            >
              <motion.span
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full h-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </motion.span>
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
