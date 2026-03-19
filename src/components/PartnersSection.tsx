import { motion } from "framer-motion";

const partners = [
  { name: "Safaricom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Safaricom_logo.svg" },
  { name: "KCB Bank", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/KCB_Bank_Logo.png" },
  { name: "Equity Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Equity_Bank_Logo.svg" },
  { name: "Kenya Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kenya_Airways_logo.svg" },
  { name: "East African Breweries", logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/EABL_Logo.png" },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-12 font-semibold"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-8 md:h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair"
            >
              {/* Using a placeholder-style label since real SVG urls might be broken/blocked */}
              <span className="text-lg md:text-2xl font-display font-bold tracking-widest text-muted-foreground/40 hover:text-primary transition-colors">
                {partner.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
