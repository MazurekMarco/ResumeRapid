import { PlusCircle, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResume } from "@/context/ResumeContext";

export default function EducationForm() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const { educationList } = resumeData;

  const handleChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    updateEducation(id, name, value);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Education
        </h2>
        <Button 
          onClick={addEducation}
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      {educationList.map((education) => (
        <div 
          key={education.id} 
          className="education-item mb-6 pb-6 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor={`school-${education.id}`} className="text-gray-700 dark:text-gray-300">
                School/University
              </Label>
              <Input
                type="text"
                id={`school-${education.id}`}
                name="school"
                value={education.school}
                onChange={(e) => handleChange(education.id, e)}
                className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`degree-${education.id}`} className="text-gray-700 dark:text-gray-300">
                  Degree
                </Label>
                <Input
                  type="text"
                  id={`degree-${education.id}`}
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(education.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`fieldOfStudy-${education.id}`} className="text-gray-700 dark:text-gray-300">
                  Field of Study
                </Label>
                <Input
                  type="text"
                  id={`fieldOfStudy-${education.id}`}
                  name="fieldOfStudy"
                  value={education.fieldOfStudy}
                  onChange={(e) => handleChange(education.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor={`startDate-${education.id}`} className="text-gray-700 dark:text-gray-300">
                  Start Date
                </Label>
                <Input
                  type="month"
                  id={`startDate-${education.id}`}
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleChange(education.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`endDate-${education.id}`} className="text-gray-700 dark:text-gray-300">
                  End Date
                </Label>
                <Input
                  type="month"
                  id={`endDate-${education.id}`}
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleChange(education.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor={`gpa-${education.id}`} className="text-gray-700 dark:text-gray-300">
                  GPA (Optional)
                </Label>
                <Input
                  type="text"
                  id={`gpa-${education.id}`}
                  name="gpa"
                  value={education.gpa}
                  onChange={(e) => handleChange(education.id, e)}
                  className="mt-1 w-full border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeEducation(education.id)}
              className="text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600"
            >
              <Trash2 className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              Remove
            </Button>
          </div>
        </div>
      ))}

      {educationList.length === 0 && (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
          No education entries. Click "Add" to add your education.
        </div>
      )}
    </div>
  );
}
