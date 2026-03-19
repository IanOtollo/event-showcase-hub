import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Radio, CheckCircle2, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Livestreaming = () => {
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
              <Radio className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.3em] font-medium">Global Reach</span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Elite <span className="text-gradient-gold italic">Livestreaming</span> Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 font-light leading-relaxed">
              In an interconnected world, your event's audience shouldn't be limited by geography. Moses Musah Events provides broadcast-grade livestreaming services that make remote attendees feel like they have a front-row seat. From high-stakes AGMs to global product launches, we ensure your message is delivered without interruption.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Globe, title: "Multi-Platform", desc: "Facebook, YouTube, LinkedIn, or custom private portals." },
                { icon: Zap, title: "Zero Latency", desc: "High-speed bonded internet solutions for rock-solid stability." },
                { icon: Radio, title: "Pro Graphics", desc: "Live lower-thirds, brand overlays, and interactive elements." }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-card p-6 rounded-xl border border-border">
                  <item.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary/20 rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold font-display mb-6">Broadcasting Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Remote Guest Integration (Zoom/Teams)",
                  "Custom Branded Hubs",
                  "Simultaneous Interpretation Support",
                  "Live Q&A and Polling Integration",
                  "Bonded Cellular Internet Connectivity",
                  "Full HD/4K Streaming Quality"
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{cap}</span>
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

export default Livestreaming;
