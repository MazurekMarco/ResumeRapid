import { useRef } from "react";
import { DownloadCloud, UploadCloud, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useResume } from "@/context/ResumeContext";
import { useTheme } from "@/lib/theme-provider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { readFileAsText } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { settings, updateSettings, clearAllData, exportData, importData } = useResume();
  const { theme, setTheme } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const content = await readFileAsText(file);
      importData(content);
    } catch (error) {
      toast({
        title: t('toasts.import.error.title'),
        description: t('toasts.import.error.description'),
        variant: "destructive",
      });
    } finally {
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          {t('settings.title')}
        </h2>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <div>
            <h3 className="text-md font-medium text-gray-800 dark:text-white mb-3">
              {t('settings.appearance.title')}
            </h3>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-md">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-toggle" className="text-sm text-gray-700 dark:text-gray-300">
                  {t('settings.appearance.darkMode')}
                </Label>
                <Switch
                  id="theme-toggle"
                  checked={theme === "dark"}
                  onCheckedChange={handleThemeToggle}
                />
              </div>
            </div>
          </div>

          {/* Resume Settings */}
          <div>
            <h3 className="text-md font-medium text-gray-800 dark:text-white mb-3">
              {t('settings.resumeSettings.title')}
            </h3>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-md space-y-4">
              <div>
                <Label
                  htmlFor="paper-size"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('settings.resumeSettings.paperSize')}
                </Label>
                <Select
                  value={settings.paperSize}
                  onValueChange={(value) => updateSettings("paperSize", value)}
                >
                  <SelectTrigger className="w-full border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white">
                    <SelectValue placeholder={t('settings.resumeSettings.paperSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="letter">{t('settings.resumeSettings.paperSizes.letter')}</SelectItem>
                    <SelectItem value="a4">{t('settings.resumeSettings.paperSizes.a4')}</SelectItem>
                    <SelectItem value="legal">{t('settings.resumeSettings.paperSizes.legal')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="font-style"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('settings.resumeSettings.fontStyle')}
                </Label>
                <Select
                  value={settings.fontStyle}
                  onValueChange={(value) => updateSettings("fontStyle", value)}
                >
                  <SelectTrigger className="w-full border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white">
                    <SelectValue placeholder={t('settings.resumeSettings.fontStyle')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">{t('settings.resumeSettings.fontStyles.modern')}</SelectItem>
                    <SelectItem value="classic">{t('settings.resumeSettings.fontStyles.classic')}</SelectItem>
                    <SelectItem value="contemporary">{t('settings.resumeSettings.fontStyles.contemporary')}</SelectItem>
                    <SelectItem value="elegant">{t('settings.resumeSettings.fontStyles.elegant')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div>
            <h3 className="text-md font-medium text-gray-800 dark:text-white mb-3">
              {t('settings.dataManagement.title')}
            </h3>
            <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-md space-y-4">
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={exportData}
                  className="text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600"
                >
                  <DownloadCloud className="h-4 w-4 mr-1.5" />
                  {t('settings.dataManagement.exportData')}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleImportClick}
                  className="text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600"
                >
                  <UploadCloud className="h-4 w-4 mr-1.5" />
                  {t('settings.dataManagement.importData')}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".json"
                  className="hidden"
                />
              </div>

              <div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-red-700 dark:text-red-400 border-red-300 dark:border-red-700 bg-white dark:bg-slate-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4 mr-1.5 text-red-500 dark:text-red-400" />
                      {t('settings.dataManagement.clearData')}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t('settings.dataManagement.confirmation.title')}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t('settings.dataManagement.confirmation.description')}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t('settings.dataManagement.confirmation.cancel')}</AlertDialogCancel>
                      <AlertDialogAction onClick={clearAllData} className="bg-red-600 text-white hover:bg-red-700">
                        {t('settings.dataManagement.confirmation.confirm')}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
