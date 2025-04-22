import { PlusCircle, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useResume } from "@/context/ResumeContext";
import { useTranslation } from "react-i18next";

export default function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const { experienceList } = resumeData;
  const { t } = useTranslation();

  const handleChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateExperience(id, name, value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {t('form.experience.title')}
        </h2>
        <Button
          onClick={addExperience}
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          {t('form.experience.addButton')}
        </Button>
      </div>

      {experienceList.map((experience) => (
        <div
          key={experience.id}
          className="experience-item mb-6 pb-6 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`jobTitle-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.experience.jobTitle')}
                </Label>
                <Input
                  type="text"
                  id={`jobTitle-${experience.id}`}
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleChange(experience.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`company-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.experience.company')}
                </Label>
                <Input
                  type="text"
                  id={`company-${experience.id}`}
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(experience.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor={`location-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                {t('form.experience.location')}
              </Label>
              <Input
                type="text"
                id={`location-${experience.id}`}
                name="location"
                value={experience.location}
                onChange={(e) => handleChange(experience.id, e)}
                className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`startDate-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.experience.startDate')}
                </Label>
                <Input
                  type="month"
                  id={`startDate-${experience.id}`}
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleChange(experience.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`endDate-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.experience.endDate')}
                </Label>
                <Input
                  type="month"
                  id={`endDate-${experience.id}`}
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(experience.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor={`description-${experience.id}`} className="text-gray-700 dark:text-gray-300">
                {t('form.experience.description')}
              </Label>
              <Textarea
                id={`description-${experience.id}`}
                name="description"
                rows={3}
                value={experience.description}
                onChange={(e) => handleChange(experience.id, e)}
                className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                placeholder={t('form.experience.placeholder')}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeExperience(experience.id)}
              className="text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600"
            >
              <Trash2 className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              {t('form.experience.removeButton')}
            </Button>
          </div>
        </div>
      ))}

      {experienceList.length === 0 && (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
          {t('form.experience.emptyMessage')}
        </div>
      )}
    </div>
  );
}
