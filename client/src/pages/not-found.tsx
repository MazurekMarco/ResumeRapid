import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <Card className="w-full max-w-md mx-4 dark:bg-slate-800 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-7 w-7 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 - {t('notFound.title')}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {t('notFound.message')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
