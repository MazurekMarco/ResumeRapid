import { useState, useEffect } from 'react';
import { useResume } from '@/context/ResumeContext';
import { useToast } from '@/hooks/use-toast';
import { ResumeData, defaultResumeData } from '@/types/resume';

/**
 * Custom hook for managing resume data and related operations
 * This provides a simpler interface for components that don't need
 * the full context functionality
 */
export function useResumeData() {
  const {
    resumeData,
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
  } = useResume();
  
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Track if there are unsaved changes
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as ResumeData;
        // Deep comparison to determine if there are changes
        setHasChanges(JSON.stringify(parsedData) !== JSON.stringify(resumeData));
      } catch (error) {
        console.error("Error comparing resume data:", error);
        setHasChanges(true);
      }
    } else {
      // If no saved data exists, check if the current data differs from default
      setHasChanges(JSON.stringify(defaultResumeData) !== JSON.stringify(resumeData));
    }
    
    setIsLoading(false);
  }, [resumeData]);

  // Save data with confirmation toast
  const handleSave = () => {
    saveChanges();
    setHasChanges(false);
  };

  // Auto-save functionality with debounce
  const autoSave = () => {
    if (hasChanges) {
      saveChanges();
      setHasChanges(false);
      
      toast({
        title: "Auto-saved",
        description: "Your resume has been automatically saved",
        variant: "default",
      });
    }
  };

  return {
    resumeData,
    isLoading,
    hasChanges,
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
    saveChanges: handleSave,
    autoSave,
  };
}

export default useResumeData;
