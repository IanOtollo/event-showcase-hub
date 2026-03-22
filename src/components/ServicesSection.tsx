import { motion } from "framer-motion";
import { Calendar, Video, Radio, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    path: "/services/event-planning",
    description: "End-to-end corporate event management — from concept and logistics to flawless execution. We handle every detail so you can focus on your guests.",
    features: ["Venue sourcing", "Vendor coordination", "Timeline management", "On-site direction"],
  },
  {
    icon: Video,
    title: "Video Coverage",
    path: "/services/video-coverage",
    description: "Cinematic multi-camera production that captures the energy and emotion of your event. Delivered as highlight reels, full edits, or social-ready cuts.",
    features: ["4K cinematic capture", "Multi-camera setup", "Professional editing", "Drone footage"],
  },
  {
    icon: Radio,
    title: "Livestreaming",
    path: "/services/livestreaming",
    description: "Broadcast-quality live streaming to any platform. We bring studio-grade production to your corporate events with real-time graphics and switching.",
    features: ["Multi-platform streaming", "Real-time graphics", "Live switching", "Recording & replay"],
  },
];

import { Link } from "react-router-dom";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3 font-medium">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link to={service.path} key={service.title} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-card rounded-2xl p-10 border border-border group-hover:border-primary/30 h-full transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle Glow Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-left">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 rotate-3 group-hover:rotate-0">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Vertical <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
