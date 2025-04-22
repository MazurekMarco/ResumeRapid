import { createContext, useContext, useEffect, useState } from "react";
import { 
  ResumeData, 
  defaultResumeData, 
  Education, 
  Experience, 
  Project,
  SettingsData,
  defaultSettings
} from "@/types/resume";
import { useToast } from "@/hooks/use-toast";

type ResumeContextType = {
  resumeData: ResumeData;
  settings: SettingsData;
  updatePersonalInfo: (field: string, value: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, field: string, value: string) => void;
  removeExperience: (id: string) => void;
  updateSkills: (skills: string) => void;
  addProject: () => void;
  updateProject: (id: string, field: string, value: string) => void;
  removeProject: (id: string) => void;
  saveChanges: () => void;
  updateSettings: (field: keyof SettingsData, value: string) => void;
  clearAllData: () => void;
  exportData: () => void;
  importData: (jsonData: string) => void;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);
  const { toast } = useToast();

  // Load data from localStorage on initial mount
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    const savedSettings = localStorage.getItem("resumeSettings");
    
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (error) {
        console.error("Failed to parse saved resume data:", error);
      }
    }
    
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error("Failed to parse saved settings:", error);
      }
    }
  }, []);

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };

    setResumeData((prev) => ({
      ...prev,
      educationList: [...prev.educationList, newEducation],
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      educationList: prev.educationList.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      educationList: prev.educationList.filter((edu) => edu.id !== id),
    }));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setResumeData((prev) => ({
      ...prev,
      experienceList: [...prev.experienceList, newExperience],
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experienceList: prev.experienceList.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experienceList: prev.experienceList.filter((exp) => exp.id !== id),
    }));
  };

  const updateSkills = (skills: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: "",
      link: "",
      description: "",
    };

    setResumeData((prev) => ({
      ...prev,
      projectsList: [...prev.projectsList, newProject],
    }));
  };

  const updateProject = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      projectsList: prev.projectsList.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projectsList: prev.projectsList.filter((project) => project.id !== id),
    }));
  };

  const saveChanges = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    localStorage.setItem("resumeSettings", JSON.stringify(settings));
    
    toast({
      title: "Success",
      description: "Resume data saved successfully!",
      variant: "default",
    });
  };

  const updateSettings = (field: keyof SettingsData, value: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearAllData = () => {
    setResumeData(defaultResumeData);
    localStorage.removeItem("resumeData");
    
    toast({
      title: "Data cleared",
      description: "All resume data has been reset to default",
      variant: "destructive",
    });
  };

  const exportData = () => {
    const dataToExport = {
      resumeData,
      settings
    };
    
    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume-data.json";
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Export successful",
      description: "Your resume data has been exported",
      variant: "default",
    });
  };

  const importData = (jsonData: string) => {
    try {
      const parsedData = JSON.parse(jsonData);
      
      if (parsedData.resumeData) {
        setResumeData(parsedData.resumeData);
      }
      
      if (parsedData.settings) {
        setSettings(parsedData.settings);
      }
      
      localStorage.setItem("resumeData", JSON.stringify(parsedData.resumeData));
      localStorage.setItem("resumeSettings", JSON.stringify(parsedData.settings));
      
      toast({
        title: "Import successful",
        description: "Your resume data has been imported",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Import failed",
        description: "Invalid JSON format. Please provide a valid export file.",
        variant: "destructive",
      });
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        settings,
        updatePersonalInfo,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        updateSkills,
        addProject,
        updateProject,
        removeProject,
        saveChanges,
        updateSettings,
        clearAllData,
        exportData,
        importData
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
