import React from "react";
import { RiReactjsLine } from "react-icons/ri";

import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
// import { FaPython } from 'react-icons/fa';
import { SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className=" text-white bg-neutral-950 pb-24 pt-2 mt-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl  font-bold text-center mb-12"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          <div className="bg-neutral-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          <div className="bg-neutral-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
            <FaNodeJs className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          <div className="bg-neutral-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
            <SiMongodb className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          <div className="bg-neutral-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
            <SiExpress className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          <div className="bg-neutral-950 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
            <SiPython className="text-7xl text-cyan-400" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
