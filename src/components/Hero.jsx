
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/rr2.jpg";
import { delay, motion } from "framer-motion";
import React, { useState, useEffect } from "react";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const textVariants = {
  hidden: {
    x: -100,
    opacity: 0,
    backgroundPosition: "0% 50%",
  },
  visible: {
    x: 0,
    opacity: 1,
    backgroundPosition: [
      "0% 50%",
      "100% 50%",
      "0% 50%", 
    ],
    transition: {
      x: { duration: 0.5, delay: 0.5 },
      opacity: { duration: 0.5, delay: 0.5 },
      backgroundPosition: {
        duration: 7, 
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
  "UI/UX Designer",
  "Problem Solver",
];







const Hero = ({scrollToProjects,scrollToContact}) => {


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="border-b border-neutral-900  pb-4 lg:mb-30">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl text-white font-extrabold">Hi, i'm</h1>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="pb-12 text-3xl  tracking-tight lg:mt-5 lg:text-8xl font-bold
              whitespace-nowrap
                relative inline-block cursor-pointer
                after:content-[''] after:absolute after:left-0 after:bottom-10
                after:h-[4px] after:w-full after:bg-blue-600 
                 after:opacity-0 after:scale-x-0 
                after:origin-center
                after:transition-all after:duration-700
                hover:after:opacity-100 hover:after:scale-x-100
                md:after:w-2/3
                bg-gradient-to-r from-purple-800 via-purple-300 to-white md:from-white md:via-purple-700 md:to-purple-600 bg-clip-text text-transparent "
            >
              Rajkiran Ramesh
            </motion.h1>
            {/* <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-500 via-red-500 to-white bg-clip-text text-1xl md:text-3xl text-transparent bg-[length:200%_200%]"
            >
              Full stack Developer
            </motion.p> */}
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="bg-gradient-to-r from-white via-red-500 to-pink-500 
             bg-clip-text text-transparent 
             text-xl md:text-4xl font-semibold 
             animate-gradient bg-[length:200%_200%]"
            >
              {roles[index]}
            </motion.p>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg text-white"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex gap-3">
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                <button onClick={scrollToProjects} className="bg-neutral-950 rounded-2xl p-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
                  Project
                </button>
              </div>

              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                <button onClick={scrollToContact} className="bg-neutral-950 rounded-2xl p-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-shadow">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 hidden md:block">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              className="rounded-full border-purple-950 border w-4/5  shadow-2xl shadow-purple-500"
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rajkiran Ramesh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
