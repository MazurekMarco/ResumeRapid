import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslation } from "react-i18next";

export default function Templates() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          {t('templates.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t('templates.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Template 1 - Classic */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2">
                      <div className="border-b border-gray-200 dark:border-gray-600 pb-2 text-center">
                        <div className="text-lg font-bold">Resume</div>
                        <div className="text-sm">Professional</div>
                      </div>
                      <div className="mt-2">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.classic.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.classic.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Check className="h-4 w-4 mr-1.5" />
                {t('templates.selectedButton')}
              </Button>
            </div>
          </div>

          {/* Template 2 - Modern */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2 flex h-full">
                      <div className="w-1/3 border-r border-gray-200 dark:border-gray-600"></div>
                      <div className="w-2/3 pl-2">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.modern.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.modern.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {t('templates.selectButton')}
              </Button>
            </div>
          </div>

          {/* Template 3 - Minimalist */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2">
                      <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>
                      <div className="flex space-x-1 mb-2">
                        <div className="w-1/4 h-2 bg-gray-200 dark:bg-gray-600"></div>
                        <div className="w-1/4 h-2 bg-gray-200 dark:bg-gray-600"></div>
                        <div className="w-1/4 h-2 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.minimalist.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.minimalist.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {t('templates.selectButton')}
              </Button>
            </div>
          </div>

          {/* Template 4 - Professional */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2">
                      <div className="border-b-2 border-gray-400 dark:border-gray-500 pb-2">
                        <div className="text-lg font-bold">Professional</div>
                      </div>
                      <div className="mt-2">
                        <div className="border-l-4 border-gray-400 dark:border-gray-500 pl-2 my-2">
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                          <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-600"></div>
                        </div>
                        <div className="border-l-4 border-gray-400 dark:border-gray-500 pl-2 my-2">
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                          <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.professional.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.professional.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {t('templates.selectButton')}
              </Button>
            </div>
          </div>

          {/* Template 5 - Creative */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30">
                    <div className="p-2">
                      <div className="rounded-full h-8 w-8 bg-purple-300 dark:bg-purple-700 mx-auto mb-2"></div>
                      <div className="text-center mb-2">
                        <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-600 mx-auto mb-1"></div>
                        <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-600 mx-auto"></div>
                      </div>
                      <div className="mt-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mb-1"></div>
                        <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.creative.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.creative.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {t('templates.selectButton')}
              </Button>
            </div>
          </div>

          {/* Template 6 - Executive */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2">
                      <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-2">
                        <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex space-x-1">
                          <div className="w-6 h-2 bg-gray-200 dark:bg-gray-600"></div>
                          <div className="w-6 h-2 bg-gray-200 dark:bg-gray-600"></div>
                          <div className="w-6 h-2 bg-gray-200 dark:bg-gray-600"></div>
                        </div>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="h-3 w-full bg-gray-50 dark:bg-gray-800 p-2 rounded">
                          <div className="w-full h-1 bg-gray-200 dark:bg-gray-600"></div>
                        </div>
                        <div className="h-3 w-full bg-gray-50 dark:bg-gray-800 p-2 rounded">
                          <div className="w-full h-1 bg-gray-200 dark:bg-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {t('templates.executive.title')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t('templates.executive.description')}
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {t('templates.selectButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
