import { motion } from "framer-motion";
export default function Contacts() {
  const contacts = [
    { label: "Phone", value: "+370 618 38654" },
    { label: "Email", value: "ainiusgecas2004@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/ainius-gecas-4944692bb" },
    { label: "GitHub", value: "github.com/AiniusG" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="flex flex-col items-center py-10 px-6 min-h-[80vh]">
      <motion.h2
        className="text-4xl font-bold text-white pb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contancts
      </motion.h2>
      <div className="bg-gray-800 p-6 rounded-lg text-white max-w-md w-full">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex justify-between items-center pt-4 pb-1 border-b border-gray-500 cursor-pointer hover:text-gray-300 gap-4"
            onClick={() => copyToClipboard(contact.value)}
          >
            <span className="font-semibold">{contact.label}:</span>
            <span>{contact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
