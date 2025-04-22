export function formatMonthYear(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      year: 'numeric' 
    }).format(date);
  } catch (error) {
    console.error('Invalid date string:', dateString);
    return dateString;
  }
}
