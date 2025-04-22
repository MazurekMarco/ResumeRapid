import { jsPDF } from "jspdf";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";

// Helper function to generate a PDF from a DOM element
export async function generatePDF(element: HTMLElement, fileName: string = "resume.pdf") {
  const { toast } = useToast();
  
  try {
    toast({
      title: "Processing",
      description: "Generating PDF...",
    });
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });
    
    const imgData = canvas.toDataURL("image/png");
    
    // Get the dimensions for A4 size paper in portrait orientation
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(fileName);
    
    toast({
      title: "Success",
      description: "PDF downloaded successfully",
      variant: "default",
    });
    
  } catch (error) {
    console.error("Error generating PDF:", error);
    
    toast({
      title: "Error",
      description: "Failed to generate PDF. Please try again.",
      variant: "destructive",
    });
  }
}

// Export as react-to-print compatible component
export function usePrintPDF() {
  const { toast } = useToast();

  const handlePrint = (resumeRef: React.RefObject<HTMLDivElement>) => {
    if (!resumeRef.current) {
      toast({
        title: "Error",
        description: "Resume content not available for printing",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Processing",
      description: "Preparing PDF download...",
    });

    setTimeout(() => {
      generatePDF(resumeRef.current!, "resume.pdf");
    }, 500);
  };

  return { handlePrint };
}
