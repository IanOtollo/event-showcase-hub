import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Season = "none" | "christmas" | "newyear" | "valentines" | "halloween" | "national";

interface ParticleProps {
  id: number;
  season: Season;
}

const SeasonalParticle = memo(({ id, season }: ParticleProps) => {
  const duration = 10 + Math.random() * 20;
  const delay = Math.random() * 20;
  const size = 1 + Math.random() * 3;
  const left = Math.random() * 100;

  // Define colors based on season
  const colors = {
    christmas: ["#ffffff", "#e0e0e0"],
    newyear: ["#ffffff", "#ffd700", "#c0c0c0"], // White, Gold, Silver
    valentines: ["#ff4d6d", "#ffb3c1", "#c9184a"], // Pinks and Reds
    halloween: ["#ff9100", "#ff6d00", "#9d4edd"], // Orange and Purple
    national: ["#000000", "#990000", "#006600"], // Kenya: Black, Red, Green
    none: ["#ffffff"]
  };

  const particleColor = colors[season][Math.floor(Math.random() * colors[season].length)];

  return (
    <motion.div
      initial={{ y: -20, x: `${left}vw`, opacity: 0 }}
      animate={{ 
        y: "110vh",
        x: [`${left}vw`, `${left + (Math.random() * 10 - 5)}vw`],
        opacity: [0, 0.2, 0.2, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay,
        ease: "linear",
        times: [0, 0.1, 0.9, 1]
      }}
      className="fixed top-0 pointer-events-none z-[100] rounded-full"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: particleColor,
        filter: season === "christmas" || season === "newyear" ? "blur(0.5px)" : "none"
      }}
    />
  );
});

export function SeasonalEffects() {
  const [season, setSeason] = useState<Season>("none");

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth(); // 0 is Jan, 11 is Dec
    const day = now.getDate();

    // Valentine's: Feb 1 - Feb 14
    if (month === 1 && day <= 14) {
      setSeason("valentines");
    }
    // Halloween: Oct 25 - Oct 31
    else if (month === 9 && day >= 25) {
      setSeason("halloween");
    }
    // Jamhuri Day / National: Dec 10 - Dec 13
    else if (month === 11 && day >= 10 && day <= 13) {
      setSeason("national");
    }
    // Christmas: Dec 15 - Dec 31
    else if (month === 11 && day >= 15) {
      setSeason("christmas");
    } 
    // New Year: Jan 1 - Jan 5
    else if (month === 0 && day <= 5) {
      setSeason("newyear");
    } 
    else {
      setSeason("none");
    }
  }, []);

  if (season === "none") return null;

  const accents = {
    christmas: "🎄",
    newyear: "✨",
    valentines: "❤️",
    halloween: "🎃",
    national: "🇰🇪"
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {Array.from({ length: 40 }).map((_, i) => (
          <SeasonalParticle key={i} id={i} season={season} />
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        className="absolute bottom-10 left-10 text-white hidden lg:block text-sm"
      >
        {accents[season]}
      </motion.div>
    </div>
  );
}
