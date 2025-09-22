import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b text-white mt-10 p-6 bg-neutral-950">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-4xl  font-bold text-center mb-12"
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/40  rounded-2xl p-6 shadow-lg hover:shadow-purple-700/40 transition-shadow"
          >
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="cursor-pointer inline-block p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-neutral-950 px-4 py-2 text-sm font-medium text-white
               hover:bg-neutral-900 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
               transition-all duration-300"
              >
              Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
