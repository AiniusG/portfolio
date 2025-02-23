import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "../data/workData.js";

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
            {/* Logo */}
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

            {/* Job Title */}
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

      {/* Description Section */}
      <div className="relative mt-6 min-w-3xl max-w-3xl h-44">
        <AnimatePresence mode="wait">
          {selectedJob && (
            <motion.div
              key={selectedJob.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
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
