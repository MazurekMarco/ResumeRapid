import { PlusCircle, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useResume } from "@/context/ResumeContext";
import { useTranslation } from "react-i18next";

export default function ProjectsForm() {
  const { resumeData, addProject, updateProject, removeProject } = useResume();
  const { projectsList } = resumeData;
  const { t } = useTranslation();

  const handleChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateProject(id, name, value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {t('form.projects.title')}
        </h2>
        <Button
          onClick={addProject}
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          {t('form.projects.addButton')}
        </Button>
      </div>

      {projectsList.map((project) => (
        <div
          key={project.id}
          className="project-item mb-6 pb-6 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`title-${project.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.projects.projectTitle')}
                </Label>
                <Input
                  type="text"
                  id={`title-${project.id}`}
                  name="title"
                  value={project.title}
                  onChange={(e) => handleChange(project.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`link-${project.id}`} className="text-gray-700 dark:text-gray-300">
                  {t('form.projects.projectLink')}
                </Label>
                <Input
                  type="url"
                  id={`link-${project.id}`}
                  name="link"
                  value={project.link}
                  onChange={(e) => handleChange(project.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                  placeholder="https://github.com/yourusername/project"
                />
              </div>
            </div>

            <div>
              <Label htmlFor={`description-${project.id}`} className="text-gray-700 dark:text-gray-300">
                {t('form.projects.description')}
              </Label>
              <Textarea
                id={`description-${project.id}`}
                name="description"
                rows={2}
                value={project.description}
                onChange={(e) => handleChange(project.id, e)}
                className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                placeholder={t('form.projects.placeholder')}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeProject(project.id)}
              className="text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600"
            >
              <Trash2 className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              {t('form.projects.removeButton')}
            </Button>
          </div>
        </div>
      ))}

      {projectsList.length === 0 && (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
          {t('form.projects.emptyMessage')}
        </div>
      )}
    </div>
  );
}
