import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-bold text-primary tracking-wide">
          MOSES MUSAH
        </Link>
        <p className="text-muted-foreground text-xs tracking-wide">
          © {new Date().getFullYear()} Moses Musah Events. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
