import { useRef } from "react";
import { Save, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import PersonalInfoForm from "@/components/form/PersonalInfoForm";
import EducationForm from "@/components/form/EducationForm";
import ExperienceForm from "@/components/form/ExperienceForm";
import SkillsForm from "@/components/form/SkillsForm";
import ProjectsForm from "@/components/form/ProjectsForm";
import ResumePreview from "@/components/preview/ResumePreview";
import { useResume } from "@/context/ResumeContext";
import { usePrintPDF } from "@/lib/print-utils";

export default function Home() {
  const { saveChanges } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);
  const { handlePrint } = usePrintPDF();

  const handleDownloadPDF = () => {
    handlePrint(resumeRef);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="md:flex gap-6">
        {/* Form Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 form-scroll max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="grid gap-6">
            <PersonalInfoForm />
            <EducationForm />
            <ExperienceForm />
            <SkillsForm />
            <ProjectsForm />

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button 
                onClick={saveChanges}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Save className="h-4 w-4 mr-1.5" />
                Save Changes
              </Button>
              <Button
                onClick={handleDownloadPDF}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <FileDown className="h-4 w-4 mr-1.5" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="md:w-1/2 preview-scroll max-h-[calc(100vh-64px)] overflow-y-auto">
          <ResumePreview ref={resumeRef} />
        </div>
      </div>
    </div>
  );
}
