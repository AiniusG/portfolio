import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";
import socialMedia from "./data/socialMedia";

const sections = ["About", "Experience", "Skills", "Projects", "Contacts"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const navRef = useRef(null);

  useEffect(() => {
    document.title = `My Portfolio - ${activeSection}`;

    // When section changes, scroll it into view
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(
        `button[data-section="${activeSection}"]`
      );
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
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
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white pt-10 px-4 sm:px-10 flex flex-col">
      <div className="relative mb-6">
        {/* Navigation container */}
        <div ref={navRef} className="overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-4 whitespace-nowrap w-max px-6 sm:px-1 sm:justify-end sm:w-full">
            {sections.map((section) => (
              <button
                key={section}
                data-section={section}
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
        </div>
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
