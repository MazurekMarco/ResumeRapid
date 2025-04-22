import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useResume } from "@/context/ResumeContext";

export default function SkillsForm() {
  const { resumeData, updateSkills } = useResume();
  const { skills } = resumeData;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSkills(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Skills
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300">
            Skills (comma separated)
          </Label>
          <Textarea
            id="skills"
            name="skills"
            rows={3}
            value={skills}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
            placeholder="JavaScript, React, CSS, HTML, Node.js, etc."
          />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          List your skills separated by commas. They will appear as tags in your resume.
        </div>
      </div>
    </div>
  );
}
