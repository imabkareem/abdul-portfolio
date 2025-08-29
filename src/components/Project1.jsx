
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "eCholestroCare",
    desc: "A health app that automatically provides prescriptions and suggestions based on cholesterol levels using doctor-defined rules, and generates a prescription.",
  },
  {
    title: "AvonThreads",
    desc: "AvonThreads is a full-stack e-commerce app for browsing, filtering, and purchasing fashion items, with user auth, cart, and admin dashboard for inventory and order management.",
  },
  {
    title:"E-Pass",
    desc:"A full-stack QR-based university entry/exit system that automates campus access, tracks real-time movement, and enhances security with digital QR passes."
  },
];

const Project1 = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="p-1 text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          #Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className=" grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              className="p-6  border dark:border-gray-700 rounded-xl shadow-md dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-purple-700 transition-all duration-300 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
              <p className=" text-gray-600 dark:text-gray-300 mb-4">{proj.desc}</p>
             
                <Link
                to="/projects"
                className= " text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  View Project →
              </Link>
              
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition duration-300"
          >
            See All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Project1;
