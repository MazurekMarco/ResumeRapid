import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/home";
import Templates from "@/pages/templates";
import Settings from "@/pages/settings";
import { ResumeProvider } from "@/context/ResumeContext";
import { ThemeProvider } from "@/lib/theme-provider";

function Router() {
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
          <WouterRouter base="/ResumeRapid">
            <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 transition-colors duration-200">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
              <Toaster />
            </div>
          </WouterRouter>
        </TooltipProvider>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
