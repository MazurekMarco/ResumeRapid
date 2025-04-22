import { useResume } from "@/context/ResumeContext";
import { formatMonthYear } from "@/lib/format-date";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const ResumePreview = forwardRef<HTMLDivElement>(
  (props, ref) => {
    const { resumeData, settings } = useResume();
    const { personalInfo, educationList, experienceList, skills, projectsList } = resumeData;
    const { t } = useTranslation();

    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    // Generate font class based on selected font style
    const getFontClass = () => {
      switch (settings.fontStyle) {
        case 'classic':
          return 'font-serif';
        case 'contemporary':
          return 'font-sans';
        case 'elegant':
          return 'font-serif';
        case 'modern':
        default:
          return 'font-sans';
      }
    };

    // Get the paper size class
    const getPaperClass = () => {
      switch (settings.paperSize) {
        case 'letter':
          return 'w-[215.9mm] h-[279.4mm]';
        case 'legal':
          return 'w-[215.9mm] h-[355.6mm]';
        case 'a4':
        default:
          return 'w-[210mm] h-[297mm]';
      }
    };

    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden" ref={ref}>
        <div className="p-1">
          <div className={`resume-paper prose max-w-none bg-white text-black ${getFontClass()}`}
               id="resume-content">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-1 text-black">{personalInfo.fullName}</h1>
              <div className="flex justify-center flex-wrap gap-2 text-sm text-gray-600">
                <span>{personalInfo.email}</span>
                <span className="hidden sm:inline md:inline">•</span>
                <span>{personalInfo.phone}</span>
                <span className="hidden sm:inline md:inline">•</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-5">
              <p className="text-sm text-gray-700">{personalInfo.summary}</p>
            </div>

            {/* Experience Section */}
            {experienceList.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2 text-black">{t('resume.experience')}</h2>
                {experienceList.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <div className="font-semibold text-black">{exp.jobTitle}</div>
                      <div className="text-sm text-gray-600">
                        <span>{formatMonthYear(exp.startDate)}</span> - <span>{formatMonthYear(exp.endDate)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <div className="text-gray-700">{exp.company}</div>
                      <div className="text-sm text-gray-600">{exp.location}</div>
                    </div>
                    <div className="text-sm mt-1 whitespace-pre-line text-gray-700">{exp.description}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Section */}
            {educationList.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2 text-black">{t('resume.education')}</h2>
                {educationList.map((edu) => (
                  <div key={edu.id} className="mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <div className="font-semibold text-black">{edu.school}</div>
                      <div className="text-sm text-gray-600">
                        <span>{formatMonthYear(edu.startDate)}</span> - <span>{formatMonthYear(edu.endDate)}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-700">{edu.degree}</span>
                      {edu.fieldOfStudy && (
                        <>, <span className="text-gray-700">{edu.fieldOfStudy}</span></>
                      )}
                      {edu.gpa && (
                        <span className="text-sm text-gray-600 ml-2"> GPA: {edu.gpa}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Section */}
            {skillsArray.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2 text-black">{t('resume.skills')}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skillsArray.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {projectsList.length > 0 && (
              <div>
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2 text-black">{t('resume.projects')}</h2>
                {projectsList.map((project) => (
                  <div key={project.id} className="mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-1">
                      <div className="font-semibold text-black">{project.title}</div>
                      {project.link && (
                        <span className="text-sm text-blue-600">
                          {project.link.replace(/^https?:\/\/(www\.)?/, '')}
                        </span>
                      )}
                    </div>
                    <div className="text-sm mt-1 text-gray-700">{project.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
