import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useResume } from "@/context/ResumeContext";

export default function PersonalInfoForm() {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Personal Information
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
            Full Name
          </Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
              Phone
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
            Location
          </Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div>
          <Label htmlFor="summary" className="text-gray-700 dark:text-gray-300">
            Professional Summary
          </Label>
          <Textarea
            id="summary"
            name="summary"
            rows={3}
            value={personalInfo.summary}
            onChange={handleChange}
            className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
