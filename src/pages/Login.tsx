import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Mail, Chrome } from "lucide-react";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      auth.login(email.split("@")[0], "admin"); // Default to admin for this exercise
      toast.success(`Logged in as ${email}`);
      const from = (location.state as any)?.from?.pathname || "/admin";
      navigate(from, { replace: true });
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    toast.info("Connecting to Google...", { duration: 1500 });
    
    // Simulate a professional Google Auth popup/redirect flow
    setTimeout(() => {
      auth.login("Moses Musah", "admin");
      toast.success("Successfully authenticated with Google");
      const from = (location.state as any)?.from?.pathname || "/admin";
      navigate(from, { replace: true });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2 uppercase tracking-widest text-primary">Moses Musah</h1>
          <p className="text-muted-foreground text-sm">Secure Management Portal</p>
        </div>

        <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold flex items-center gap-2">
                <Mail className="h-3 w-3" /> Email Address
              </label>
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mosesmusah.com"
                className="bg-secondary/50 border-border focus:border-primary transition-all h-11"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold flex items-center gap-2">
                <Lock className="h-3 w-3" /> Password
              </label>
              <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-secondary/50 border-border focus:border-primary transition-all h-11"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-gold-dark font-bold tracking-widest uppercase h-11 transition-all"
            >
              {isLoading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-3 text-muted-foreground tracking-widest text-[9px]">Or continue with</span>
            </div>
          </div>

          <Button 
            type="button" 
            variant="outline"
            disabled={isLoading}
            onClick={handleGoogleLogin}
            className="w-full border-border hover:bg-secondary text-foreground flex items-center justify-center gap-3 h-11 font-medium"
          >
            <div className="bg-white rounded-full p-1">
              <Chrome className="h-4 w-4 text-[#4285F4]" />
            </div>
            Sign in with Google
          </Button>
          
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-medium opacity-60">
              Secured Enterprise Intelligence • Nairobi, Kenya
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
