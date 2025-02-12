import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";

const sections = ["About", "Experience", "Skills", "Projects", "Contacts"];
const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/AiniusG", // Replace with actual link
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/300px-GitHub_Invertocat_Logo.svg.png?20230417032619", // Replace with actual image
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ainius-gecas-4944692bb",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ainius.gecas", // Replace with actual link
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png", // Replace with actual image
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    document.title = `My Portfolio - ${activeSection}`;
  }, [activeSection]);

  return (
    <div className="min-h-screen min-w-screen bg-gray-900 text-white pt-10 px-10 flex flex-col">
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
      <div key={activeSection} className="flex-grow flex">
        {activeSection === "About" && <About />}
        {activeSection === "Experience" && <Work />}
        {activeSection === "Skills" && <Skills />}
        {activeSection === "Projects" && <Projects />}
        {activeSection === "Contacts" && <Contacts />}
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
