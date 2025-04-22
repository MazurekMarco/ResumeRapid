import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/home";
import Templates from "@/pages/templates";
import Settings from "@/pages/settings";
import { ResumeProvider } from "@/context/ResumeContext";
import { ThemeProvider } from "@/lib/theme-provider";

// Get base from environment
const base = import.meta.env.BASE_URL;

// Custom hook for handling base path in routes
const useBasePath = () => {
  const [location, setLocation] = useLocation();
  
  const navigate = (to: string) => {
    // Ensure the base path is always included
    const path = to === "/" ? base : `${base}${to}`;
    setLocation(path);
  };

  return { location, navigate };
};

function Router() {
  const { location } = useBasePath();
  
  // Remove base path from location for route matching
  const path = location.startsWith(base) 
    ? location.slice(base.length) || "/"
    : location;

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/templates" component={Templates} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="resume-theme">
      <ResumeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Toaster />
          </div>
        </TooltipProvider>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
