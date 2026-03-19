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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Link to={service.path} key={service.title} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-gradient-card rounded-lg p-8 border border-border hover:border-gold-subtle h-full transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Learn More <ChevronRight className="h-3 w-3" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
