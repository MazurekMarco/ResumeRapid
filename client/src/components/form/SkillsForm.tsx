import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useResume } from "@/context/ResumeContext";
import { useTranslation } from "react-i18next";

export default function SkillsForm() {
  const { resumeData, updateSkills } = useResume();
  const { skills } = resumeData;
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSkills(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t('form.skills.title')}
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300">
            {t('form.skills.label')}
          </Label>
          <Textarea
            id="skills"
            name="skills"
            rows={3}
            value={skills}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
            placeholder={t('form.skills.placeholder')}
          />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t('form.skills.helper')}
        </div>
      </div>
    </div>
  );
}
