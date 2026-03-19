import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Admin from "./pages/Admin.tsx";
import Login from "./pages/Login.tsx";
import EventPlanning from "./pages/services/EventPlanning.tsx";
import VideoCoverage from "./pages/services/VideoCoverage.tsx";
import Livestreaming from "./pages/services/Livestreaming.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import { ScrollToHash } from "./components/ScrollToHash.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/event-planning" element={<EventPlanning />} />
          <Route path="/services/video-coverage" element={<VideoCoverage />} />
          <Route path="/services/livestreaming" element={<Livestreaming />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requiredRoles={["admin", "editor"]}>
                <Admin />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
