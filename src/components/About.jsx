// import React from 'react'
// import aboutImg from '../assets/about.jpg'
// import {ABOUT_TEXT} from "../constants"
// import {motion} from "framer-motion"

// const About = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl">
//         About
//         <span className="text-neutral-500"> Me</span>
//       </h1>
//       <div className="flex flex-wrap">
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2 lg:p-8"
//         >
//           <div className="flex items-center justify-center">
//             <p className='text-xl'>
//               Hi, I'm <span className='font-semibold'>Rajkiran Ramesh</span> — a Full Stack
//               Developer passionate about creating modern, responsive, and
//               scalable web applications.
//             </p>
//           </div>
//         </motion.div>
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2"
//         >
//           <div className="flex justify-center lg:justify-start">
//             <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default About



import React from "react";
import Timeline from "./TimeLine"; // reuse the timeline component
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const About = () => {
  return (
    <section className="py-16 px-6 bg-neutral-950  text-white" id="about">
      {/* Heading */}
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* Intro */}
      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg max-w-3xl mx-auto text-center mb-12 text-gray-300"
      >
        I’m <span className="text-purple-400">Rajkiran Ramesh</span>, a
        passionate Full Stack Developer who enjoys crafting scalable
        applications and turning ideas into reality with clean and efficient
        code.
      </motion.p>

      {/* Timeline */}
      <motion.div
        variants={fadeUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-12"
      >
        <Timeline />
      </motion.div>

    </section>
  );
};

export default About;
