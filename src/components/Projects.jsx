import { useState } from "react";
import { projectData } from "../data/projectData.js";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="flex flex-col items-center py-8 px-4 sm:py-10 sm:px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white pb-6 sm:pb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {projectData.map((project) => (
          <button
            key={project.id}
            className="px-3 py-1 sm:px-6 sm:py-2 bg-gray-700 text-white text-sm sm:text-base rounded-lg hover:bg-gray-600"
            onClick={() => setSelectedProject(project)}
          >
            {project.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg text-gray-300 w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 sm:pr-6 mb-4 sm:mb-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  {selectedProject.description}
                </p>
                <p className="font-semibold">Tech Stack:</p>
                <ul className="list-disc list-inside mb-4">
                  {selectedProject.techStack.map((tech, index) => (
                    <li key={index} className="text-sm sm:text-base">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setZoomedImage(image)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
