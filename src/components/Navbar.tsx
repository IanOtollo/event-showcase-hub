import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "@/lib/auth";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/#services" },
  { label: "Contact", path: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(auth.getUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.getUser());
  }, [location]);

  const handleLogout = () => {
    auth.logout();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold tracking-wide text-primary">
          MOSES MUSAH
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.path.startsWith("/#") ? (
              <a
                key={link.path}
                href={link.path}
                className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {user ? (
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <Link to="/admin" className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" /> {user.role}
              </Link>
              <button 
                onClick={handleLogout}
                className="text-muted-foreground hover:text-destructive transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/admin"
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary rounded-full origin-center transition-colors"
          />
          <motion.span
            animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-primary rounded-full transition-all"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary rounded-full origin-center transition-colors"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8 gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {link.path.startsWith("/#") ? (
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-display font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-3xl font-display font-bold tracking-widest transition-colors ${
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full h-px bg-border max-w-[100px]"
            />

            {user ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-6"
              >
                <Link
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold tracking-[0.2em] text-primary flex items-center gap-2"
                >
                  <ShieldCheck className="h-5 w-5" /> ADMIN • {user.role.toUpperCase()}
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="text-lg font-bold tracking-[0.2em] text-destructive flex items-center gap-2"
                >
                  <LogOut className="h-5 w-5" /> LOGOUT
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-bold tracking-widest text-muted-foreground hover:text-primary"
                >
                  ADMIN
                </Link>
              </motion.div>
            )}

            <div className="absolute bottom-12 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-medium opacity-60">
                Moses Musah Events • Nairobi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
