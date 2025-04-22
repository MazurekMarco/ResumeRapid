import { useResume } from "@/context/ResumeContext";
import { formatMonthYear } from "@/lib/format-date";
import { forwardRef } from "react";

const ResumePreview = forwardRef<HTMLDivElement>(
  (props, ref) => {
    const { resumeData } = useResume();
    const { personalInfo, educationList, experienceList, skills, projectsList } = resumeData;

    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(Boolean);

    return (
      <div className="bg-white dark:bg-white shadow-md rounded-lg overflow-hidden" ref={ref}>
        <div className="p-1">
          <div className="resume-paper prose max-w-none">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName}</h1>
              <div className="flex justify-center flex-wrap gap-2 text-sm text-gray-600">
                <span>{personalInfo.email}</span>
                <span className="hidden sm:inline">•</span>
                <span>{personalInfo.phone}</span>
                <span className="hidden sm:inline">•</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-sm text-gray-700">{personalInfo.summary}</p>
            </div>

            {experienceList.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2">Experience</h2>
                {experienceList.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                      <div className="font-semibold">{exp.jobTitle}</div>
                      <div className="text-sm text-gray-600">
                        <span>{formatMonthYear(exp.startDate)}</span> - <span>{formatMonthYear(exp.endDate)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                      <div className="text-gray-700">{exp.company}</div>
                      <div className="text-sm text-gray-600">{exp.location}</div>
                    </div>
                    <div className="text-sm mt-1 whitespace-pre-line">{exp.description}</div>
                  </div>
                ))}
              </div>
            )}

            {educationList.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2">Education</h2>
                {educationList.map((edu) => (
                  <div key={edu.id} className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                      <div className="font-semibold">{edu.school}</div>
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
                        <span className="text-sm text-gray-600ml-2"> GPA: {edu.gpa}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {skillsArray.length > 0 && (
              <div className="mb-5">
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skillsArray.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {projectsList.length > 0 && (
              <div>
                <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-2">Projects</h2>
                {projectsList.map((project) => (
                  <div key={project.id} className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                      <div className="font-semibold">{project.title}</div>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-blue-600 underline"
                        >
                          {project.link.replace(/^https?:\/\/(www\.)?/, '')}
                        </a>
                      )}
                    </div>
                    <div className="text-sm mt-1">{project.description}</div>
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
