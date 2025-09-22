import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Bachelor of Technology - IT",
    company: "Anna University",
    date: "2023 – 2027",
    description:
      "Studied information technology fundamentals. Built projects in MERN stack and IoT.",
  },
  {
    role: "CGPA",
    company: "A.V.C college of Engineering",
    date: "",
    description:
      "8.2+",
  },

  {
    role: "Freelance Projects",
    company: "Self-employed",
    date: "2025 – Present",
    description:
      "Designed and deployed responsive portfolio websites and real-time chat apps using React + Socket.io.",
  },
];

const itemVariants = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Timeline = () => {
  return (
    <div className="relative border-l-2  ml-6 mt-10">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={itemVariants(index * 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 ml-6"
        >
          {/* Dot */}
          <span className="absolute -left-1.5 flex h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border border-pink-500"></span>

          {/* Card */}
          <div
            className="bg-purple-900/40 shadow-md hover:shadow-lg transition p-[3px] rounded-2xl 
          bg-gradient-to-tr from-purple-800 via-pink-600 to-purple-800"
          >
            <div className="bg-neutral-900 rounded-2xl p-4 text-white">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <h4 className="text-sm text-purple-300">{exp.company}</h4>
              <time className="block mb-2 text-sm text-gray-400">
                {exp.date}
              </time>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
