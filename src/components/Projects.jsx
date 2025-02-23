import { useState } from "react";
import { projectData } from "../data/projectData.js";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="flex flex-col items-center py-10 px-6 min-h-[80vh]">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>

      <div className="flex gap-4 mb-6">
        {projectData.map((project) => (
          <button
            key={project.id}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            onClick={() => setSelectedProject(project)}
          >
            {project.title}
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300 max-h-140 flex items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h3>
            <p className="mb-4">{selectedProject.description}</p>
            <p className="font-semibold">Tech Stack:</p>
            <ul className="list-disc list-inside mb-4">
              {selectedProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-4">
            {selectedProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProject.title} screenshot ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                onClick={() => setZoomedImage(image)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
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
