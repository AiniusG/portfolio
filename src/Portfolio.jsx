import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";

const sections = ["About", "Experience", "Skills", "Projects", "Contacts"];
const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/AiniusG",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/640px-Github_logo_svg.svg.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ainius-gecas-4944692bb",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ainius.gecas",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    document.title = `My Portfolio - ${activeSection}`;
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Experience":
        return <Work />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contacts":
        return <Contacts />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white pt-10 px-10 flex flex-col">
      <div className="flex justify-end gap-4 mb-6">
        {sections.map((section) => (
          <button
            key={section}
            className={`px-4 py-2 text-lg rounded-lg transition duration-300 ${
              activeSection === section
                ? "bg-gray-500 text-white"
                : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="flex-grow flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-end gap-4 mb-6">
        {socialMedia.map(({ name, url, img }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2"
          >
            <img src={img} alt={name} className="h-8 w-8" />
          </a>
        ))}
      </div>
    </div>
  );
}
