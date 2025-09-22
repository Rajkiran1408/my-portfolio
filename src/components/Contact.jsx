import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
import { FaMailBulk,FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-20 px-6">
     
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-4xl  font-bold text-center mb-12"
      >
        Get in Touch
      </motion.h1>

  
      <div className="flex flex-col items-center gap-6 text-lg">
  
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          href={`tel:${CONTACT.phoneNo}`}
          className="flex items-center gap-3 text-neutral-300 hover:text-purple-400 transition-colors"
        >
          <FaPhone className="w-5 h-5 text-purple-400" />
          {CONTACT.phoneNo}
        </motion.a>

 
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 text-neutral-300 hover:text-pink-400 transition-colors border-b border-neutral-700 pb-1"
        >
          <FaMailBulk className="w-5 h-5 text-pink-400" />
          {CONTACT.email}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
