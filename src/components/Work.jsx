import { useState } from "react";
import telesoftas from "/Telesoftas.png";

const workExperience = [
  {
    id: 1,
    title: "Full Stack Internship",
    company: "Telesoftas",
    date: "Aug 2024 - Nov 2024",
    description: [
      "Took ownership of the development lifecycle, from coding and debugging to deployment and maintenance.",
      " Developed an internal company tool for remote TV data management.",
      " Set up infrastructure using Ansible, Nginx Proxy Manager, GitLab CI/CD pipelines, and Docker.",
      " Worked with Java Spring Boot (backend) and React with TypeScript (frontend).",
      " Collaborated with two developers, conducting code reviews and approvals (Git).",
      " Technologies: Java, Spring Boot, Node.js, React, APIs, Docker",
    ],
    logo: telesoftas, // Ensure you import this logo at the top
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2022 - Present",
    description:
      "Developed custom web solutions for small businesses, focusing on responsive design, accessibility, and performance optimization.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Web_Development_Logo.png", // Replace with actual logo
  },
  {
    id: 3,
    title: "Teaching Assistant",
    company: "University XYZ",
    date: "2021 - 2022",
    description:
      "Assisted in teaching programming courses, helping students debug their projects and understand key software engineering concepts.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/University_Logo.png", // Replace with actual university logo
  },
];

export default function Work() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-col items-center py-10 px-6">
      <h2 className="text-4xl font-bold text-white mb-8">Work Experience</h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl flex items-center justify-center space-x-8 overflow-x-auto py-8 border-b-4 border-gray-500 gap-4">
        {workExperience.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-center cursor-pointer max-w-64"
          >
            {/* Company Logo as Timeline Dot */}
            <img
              src={job.logo}
              alt={job.company}
              className={`w-14 h-14 rounded-full shadow-md transition-all duration-300 hover:scale-110 ${
                selectedId === job.id ? "scale-110" : ""
              }`}
              onClick={() =>
                setSelectedId(job.id === selectedId ? null : job.id)
              }
            />

            {/* Job Title */}
            <div
              className={`mt-2 px-4 py-2 text-center rounded-lg transition-all duration-300 ${
                selectedId === job.id
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() =>
                setSelectedId(job.id === selectedId ? null : job.id)
              }
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm">{job.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      {selectedId && (
        <div className="mt-6 p-6 text-gray-300 bg-gray-700 rounded-lg max-w-3xl animate-fadeIn">
          <h3 className="text-xl font-semibold">
            {workExperience.find((job) => job.id === selectedId).title}
          </h3>
          <p className="text-gray-400">
            {workExperience.find((job) => job.id === selectedId).company} -{" "}
            {workExperience.find((job) => job.id === selectedId).date}
          </p>
          <p className="mt-4">
            {workExperience.find((job) => job.id === selectedId).description}
          </p>
        </div>
      )}
    </div>
  );
}
