import React, { useState } from "react";
import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="border-b text-white mt-10 p-6 bg-neutral-950">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-4xl font-bold text-center mb-12"
      >
        My Certificates
      </motion.h1>

      <div className="relative border-l border-neutral-700 ml-6">
        {CERTIFICATES.map((certificate, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10 ml-6"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full ring-4 ring-neutral-950"></span>

            {/* Certificate Card */}
            <div className="bg-neutral-900/70 p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition-shadow">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Clickable Image */}
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-24 h-24 object-center rounded-lg border border-neutral-700 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(certificate.image)}
                />
                <div>
                  <h2 className="text-lg font-semibold">{certificate.title}</h2>
                  <p className="text-neutral-400 text-sm">
                    Issued by{" "}
                    <span className="text-white">{certificate.issuer}</span>
                  </p>
                  <p className="text-neutral-500 text-xs">{certificate.date}</p>
                </div>
              </div>

              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                {certificate.description}
              </p>

              <div className="mt-4">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.7)] transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
