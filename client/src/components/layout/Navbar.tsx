import { useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-provider";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Get base from environment
const base = import.meta.env.BASE_URL;

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActiveTab = (path: string) => {
    const currentPath = location.startsWith(base) 
      ? location.slice(base.length) || "/"
      : location;
    return currentPath === path;
  };

  const navigate = (to: string) => {
    const path = to === "/" ? base : `${base}${to}`;
    setLocation(path);
  };

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                {t('app.title')}
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                onClick={() => navigate("/")}
                className={`${
                  isActiveTab("/")
                    ? "border-indigo-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-100"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
              >
                {t('nav.home')}
              </a>
              <a
                onClick={() => navigate("/templates")}
                className={`${
                  isActiveTab("/templates")
                    ? "border-indigo-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-100"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
              >
                {t('nav.templates')}
              </a>
              <a
                onClick={() => navigate("/settings")}
                className={`${
                  isActiveTab("/settings")
                    ? "border-indigo-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-100"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
              >
                {t('nav.settings')}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a
            onClick={() => navigate("/")}
            className={`${
              isActiveTab("/")
                ? "bg-indigo-50 dark:bg-slate-700 border-indigo-500 text-indigo-700 dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-gray-500"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer`}
          >
            {t('nav.home')}
          </a>
          <a
            onClick={() => navigate("/templates")}
            className={`${
              isActiveTab("/templates")
                ? "bg-indigo-50 dark:bg-slate-700 border-indigo-500 text-indigo-700 dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-gray-500"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer`}
          >
            {t('nav.templates')}
          </a>
          <a
            onClick={() => navigate("/settings")}
            className={`${
              isActiveTab("/settings")
                ? "bg-indigo-50 dark:bg-slate-700 border-indigo-500 text-indigo-700 dark:text-white"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-gray-500"
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer`}
          >
            {t('nav.settings')}
          </a>
        </div>
      </div>
    </nav>
  );
}
