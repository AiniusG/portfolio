import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillData } from "../data/skillData.js";

export default function Skills() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center p-8">
      <motion.h2
        className="text-4xl font-bold text-white pb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-4 gap-4 w-full">
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white flex items-center justify-center h-24 w-24 cursor-pointer rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <img src={skill.logo} alt={skill.name} className="h-16" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-108 mt-6"
          >
            <h2 className="text-xl font-bold">{skillData[selected].name}</h2>
            <p className="mt-2">{skillData[selected].description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
