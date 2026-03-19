import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventPlanning = () => {
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
              <Calendar className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.3em] font-medium">Bespoke Excellence</span>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Strategic <span className="text-gradient-gold italic">Event Planning</span> & Logistics
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 font-light leading-relaxed">
              At Moses Musah Events, we believe that every corporate gathering is an opportunity to reinforce your brand's narrative. Our planning process is rooted in strategy, precision, and a relentless pursuit of perfection. From intimate board retreats in Naivasha to massive industry summits in Nairobi, we handle the complexity so you can focus on the connection.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold font-display">Our Approach</h2>
                <div className="space-y-4">
                  {[
                    { title: "Venue Intelligence", desc: "Access to Kenya's most exclusive and effective venues, negotiated at preferred rates." },
                    { title: "Technical Integration", desc: "Seamless merging of AV, lighting, and stage design into the flow of your program." },
                    { title: "Stakeholder Management", desc: "Coordinating vendors and partners with absolute clarity and professionalism." },
                    { title: "Risk Mitigation", desc: "Proactive contingency planning for every technical or logistical variable." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-card border border-border rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-display mb-4">Start Planning</h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Ready to elevate your next corporate event? Let's discuss your objectives and how we can deliver a world-class experience.
                  </p>
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground font-semibold">
                  Get a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventPlanning;
