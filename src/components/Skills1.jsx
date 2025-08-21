import React from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiGit, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { Link } from "react-router-dom";

const skillData = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <SiGit /> },
  { name: "REST API", icon: <SiPostman /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
];

const Skills1 = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-5xl font-extrabold  text-purple-500  mb-2"> #SKILLS</p>
        <p className="text-lg text-gray-400 mb-10 uppercase tracking-wide">MY TOP Skills</p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {skillData.slice(0, 6).map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-8">
          <Link
            to="/skills"
            className="inline-block px-6 py-2 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white transition duration-300"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills1;
