import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About1 = () => {
  return (
    <section id="about" className="py-20 text-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          #About Me
        </motion.h2>

        {/* About Paragraph */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I'm a passionate MERN Stack Developer with a strong grasp of MongoDB, Express, React, and Node.js. I love crafting scalable web applications and user-friendly interfaces. I'm currently pursuing MCA and building full-stack projects.
        </motion.p>

        {/* More Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/about"
            className="inline-block px-6 py-2 border border-purple-500 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-500 hover:text-white dark:hover:text-white dark:hover:bg-purple-500 transition duration-300"
          >
            More About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About1;
