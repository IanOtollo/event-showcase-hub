import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tighter">
            MOSES MUSAH
          </Link>
          
          <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex gap-5">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" }
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border/30 flex flex-col items-center text-center gap-6">
          <p className="text-primary/60 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
            Premium Production • Nairobi, Kenya
          </p>
          
          <div className="space-y-2">
            <p className="text-muted-foreground/50 text-[10px] uppercase tracking-[0.2em] font-medium">
              © {new Date().getFullYear()} Moses Musah Events. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
