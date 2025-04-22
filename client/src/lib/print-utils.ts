import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "@/hooks/use-toast";
import { useResume } from "@/context/ResumeContext";
import { useTranslation } from "react-i18next";

// Get PDF format dimensions based on paper size
const getPaperDimensions = (paperSize: 'letter' | 'a4' | 'legal') => {
  switch (paperSize) {
    case 'letter':
      return { width: 215.9, height: 279.4 }; // in mm
    case 'legal':
      return { width: 215.9, height: 355.6 }; // in mm
    case 'a4':
    default:
      return { width: 210, height: 297 }; // in mm
  }
};

// Helper function to generate a PDF from a DOM element
export async function generatePDF(
  element: HTMLElement, 
  fileName: string = "resume.pdf",
  paperSize: 'letter' | 'a4' | 'legal' = 'a4'
) {
  try {
    // Show processing toast
    const toastId = toast({
      title: "Processing",
      description: "Generating PDF...",
    });
    
    // Prepare the element for rendering
    const originalDisplay = element.style.display;
    element.style.display = 'block';
    
    // Create a clone of the element with proper styling for PDF
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.backgroundColor = 'white';
    clone.style.width = '100%';
    clone.style.height = 'auto';
    clone.style.position = 'absolute';
    clone.style.top = '-9999px';
    clone.style.left = '-9999px';
    document.body.appendChild(clone);
    
    // Render using html2canvas with proper settings
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
    });
    
    document.body.removeChild(clone);
    element.style.display = originalDisplay;
    
    // Convert to image data
    const imgData = canvas.toDataURL("image/png");
    
    // Get paper dimensions
    const paper = getPaperDimensions(paperSize);
    
    // Create PDF with correct format
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [paper.width, paper.height],
    });
    
    // Calculate dimensions to fit the content properly
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    
    // Save the PDF with the specified filename
    pdf.save(fileName);
    
    // Show success toast
    toast({
      title: "Success",
      description: "PDF downloaded successfully",
      variant: "default",
    });
    
  } catch (error) {
    console.error("Error generating PDF:", error);
    
    // Show error toast
    toast({
      title: "Error",
      description: "Failed to generate PDF. Please try again.",
      variant: "destructive",
    });
  }
}

// We don't need the usePrintPDF hook anymore since we're using dynamic imports
// This is kept for backward compatibility but is deprecated
export function usePrintPDF() {
  // Return an empty handlePrint function for backward compatibility
  return {
    handlePrint: () => {
      console.warn('usePrintPDF is deprecated. Use dynamic import of generatePDF instead.');
    }
  };
}
