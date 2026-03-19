import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, User as UserIcon } from "lucide-react";
import { auth, type Role } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<Role>("viewer");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Please enter a name");
      return;
    }
    
    auth.login(username, role);
    toast.success(`Logged in as ${username} (${role})`);
    
    const from = (location.state as any)?.from?.pathname || "/admin";
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2 uppercase tracking-widest">Moses Musah</h1>
          <p className="text-muted-foreground">Admin Portal Authentication</p>
        </div>

        <div className="bg-gradient-card border border-border rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <UserIcon className="h-3 w-3" /> Full Name
              </label>
              <Input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Moses Musah"
                className="bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Lock className="h-3 w-3" /> Select Access Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["admin", "editor", "viewer"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r as Role)}
                    className={`px-3 py-2 rounded text-xs transition-all border ${
                      role === r 
                        ? "bg-primary/20 border-primary text-primary font-bold" 
                        : "bg-secondary border-border text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-gold-dark font-bold tracking-widest uppercase">
              Enter Dashboard
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Secured Enterprise System • Role Based Access
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
