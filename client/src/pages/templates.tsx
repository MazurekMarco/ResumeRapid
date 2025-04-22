import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Templates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Resume Templates
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Choose from our collection of professional resume templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Template 1 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-100 dark:bg-gray-700">
              <AspectRatio ratio={3/4}>
                <div className="p-4 h-full">
                  <div className="h-full border border-gray-200 dark:border-gray-600 rounded">
                    <div className="p-2">
                      <div className="border-b border-gray-200 dark:border-gray-600 pb-2 text-center">
                        <div className="text-lg font-bold">Template Name</div>
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
                Classic
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Clean and traditional layout
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Check className="h-4 w-4 mr-1.5" />
                Selected
              </Button>
            </div>
          </div>

          {/* Template 2 */}
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
                Modern
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Contemporary two-column design
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Select
              </Button>
            </div>
          </div>

          {/* Template 3 */}
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
                Minimalist
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Simple and elegant approach
              </p>
              <Button 
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Select
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
