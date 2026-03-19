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
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                link.path.startsWith("/#") ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              
              {user ? (
                <div className="pt-4 border-t border-border flex flex-col gap-4">
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="text-sm font-bold tracking-wide uppercase text-primary flex items-center gap-2"
                  >
                    <ShieldCheck className="h-4 w-4" /> Admin ({user.role})
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="text-sm font-medium tracking-wide uppercase text-destructive flex items-center gap-2 text-left"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary"
                >
                  Admin
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
