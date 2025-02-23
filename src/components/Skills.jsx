import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import javaLogo from "/java_logo.png";
import springBootLogo from "/spring_boot_logo.png";
import reactLogo from "/react_logo.png";
import tsLogo from "/typescript_logo.png";
import cSharpLogo from "/c_sharp_logo.png";
import netLogo from "/net_logo.png";
import gitLogo from "/git_logo.png";
import dockerLogo from "/docker_logo.png";

const skills = [
  {
    name: "Java",
    description:
      "Experienced in Java for backend development, focusing on OOP, multithreading, and database integration.",
    logo: javaLogo,
  },
  {
    name: "Spring Boot",
    description:
      "Built RESTful APIs with database integration using Spring Boot, leveraging dependency injection and Spring Security.",
    logo: springBootLogo,
  },
  {
    name: "React",
    description:
      "Developed dynamic UIs with React, using component-based architecture, hooks, and Tailwind CSS for styling.",
    logo: reactLogo,
  },
  {
    name: "TypeScript",
    description:
      "Used TypeScript for scalable applications, ensuring type safety and seamless integration with React.",
    logo: tsLogo,
  },
  {
    name: "C#",
    description:
      "Worked with C# for application development, utilizing OOP and async programming within the .NET ecosystem.",
    logo: cSharpLogo,
  },
  {
    name: ".NET",
    description:
      "Developed web applications and APIs using ASP.NET Core, focusing on backend services and scalability.",
    logo: netLogo,
  },
  {
    name: "Git",
    description:
      "Proficient in Git for version control, managing branches, merges, rebases, and collaborative workflows.",
    logo: gitLogo,
  },
  {
    name: "Docker",
    description:
      "Used Docker for containerization, writing Dockerfiles to ensure consistent and portable deployments.",
    logo: dockerLogo,
  },
];

export default function Skills() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div className="flex flex-col items-center p-8" layout>
      <motion.h2
        className="text-4xl font-bold text-white pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <motion.div className="grid grid-cols-4 gap-4 w-full" layout>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white flex items-center justify-center h-24 w-24 cursor-pointer rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelected(selected === index ? null : index)}
            layout
          >
            <img src={skill.logo} alt={skill.name} className="h-16" />
          </motion.div>
        ))}
      </motion.div>

      {/* Animate height instead of removing the element */}
      <motion.div
        className="mt-8 w-full flex justify-center overflow-hidden"
        animate={{
          height: selected !== null ? "auto" : 0,
          opacity: selected !== null ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        layout
      >
        {selected !== null && (
          <motion.div
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-108"
          >
            <h2 className="text-xl font-bold">{skills[selected].name}</h2>
            <p className="mt-2">{skills[selected].description}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
