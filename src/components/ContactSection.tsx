import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
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
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">hello@mosesmusah.events</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 bg-gradient-card rounded-lg p-8 border border-border"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <Input placeholder="Your name" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Company</label>
                <Input placeholder="Company name" className="bg-secondary border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <Input type="email" placeholder="your@email.com" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Event Type</label>
              <Input placeholder="e.g. Conference, Gala, Product Launch" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your event..." rows={4} className="bg-secondary border-border resize-none" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-gold-dark font-semibold tracking-wide uppercase text-sm">
              Send Inquiry
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
