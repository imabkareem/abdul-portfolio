import { FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiJsonwebtokens, SiPostman, SiMysql, SiGithub,SiCplusplus, SiHtml5, SiCss3, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";

const skills = [
  { name:"MySQL", icon: <SiMysql className="text-blue-500" />  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name:"Java", icon: <FaJava className="text-red-500" /> },
  {name : "Github", icon:<SiGithub className="text-orange-500"/>},
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "REST API", icon: <SiPostman className="text-orange-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "DSA", icon: <SiLeetcode className="text-yellow-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center text-4xl dark:text-white text-black animate-pulse font-bold ">Skills</h1>

        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 My Top Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center gap-2 bg-white dark:bg-gray-800 py-2 px-2 h-20 w-32  rounded-lg shadow-md hover:shadow-xl dark:shadow-white  transition-transform transform hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="text-3xl ">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
