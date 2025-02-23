import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import telesoftas from "/Telesoftas.png";
import hourglass from "/Hourglass.png";
import vu from "/Vilnius_university_logo.png";

const workExperience = [
  {
    id: 1,
    title: "Software Engineering Student",
    company: "Vilnius University",
    date: "2023 - Present",
    description:
      "I am currently a 2nd year bachelor's student at Vilnius University studying software engineering.",
    logo: vu,
  },
  {
    id: 2,
    title: "Full Stack Internship",
    company: "Telesoftas",
    date: "Aug 2024 - Nov 2024",
    description: [
      "Developed an internal company tool for remote TV content management (images, videos, PDFs) using these tools:",
      "Set up infrastructure using Ansible, Nginx Proxy Manager, GitLab CI/CD pipelines, and Docker.",
      "Worked with Java Spring Boot (backend) and React with TypeScript (frontend).",
      "Collaborated with two developers, conducting code reviews and approvals using GitLab.",
    ],
    logo: telesoftas,
  },
  {
    id: 3,
    title: "My Future",
    company: "My Future",
    date: "Present",
    description:
      "Currently looking for any new opportunities to expand my knowledge, whether that be internships or junior positions.",
    logo: hourglass,
  },
];

export default function Work() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedJob = workExperience.find((job) => job.id === selectedId);

  return (
    <motion.div
      className="flex flex-col items-center py-10 px-6 min-h-[80vh]"
      layout
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      {/* Timeline Container */}
      <motion.div
        className="min-w-3xl flex items-center justify-center space-x-8 overflow-x-auto py-8 border-b-4 border-gray-500 gap-4"
        layout
      >
        {workExperience.map((job) => (
          <motion.div
            key={job.id}
            className="flex flex-col items-center cursor-pointer max-w-64"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Logo */}
            <motion.img
              src={job.logo}
              alt={job.company}
              className="w-16 h-16 object-contain rounded-full"
              animate={{ scale: selectedId === job.id ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setSelectedId(job.id === selectedId ? null : job.id)
              }
            />

            {/* Job Title with Hover Effect */}
            <motion.div
              className={`mt-4 w-52 px-4 py-2 text-center rounded-lg transition-colors duration-300 ${
                selectedId === job.id
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setSelectedId(job.id === selectedId ? null : job.id)
              }
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm">{job.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Description Section (Fixed Height & Smooth Transition) */}
      <div className="relative mt-6 min-w-3xl max-w-3xl h-44">
        <AnimatePresence mode="wait">
          {selectedJob && (
            <motion.div
              key={selectedJob.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full p-6 text-gray-300 bg-gray-700 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
              <p className="text-gray-400">
                {selectedJob.company}: {selectedJob.date}
              </p>

              {Array.isArray(selectedJob.description) ? (
                <>
                  <p className="mt-4 font-semibold">
                    {selectedJob.description[0]}
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    {selectedJob.description.slice(1).map((line, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        {line}
                      </motion.li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-4">{selectedJob.description}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
