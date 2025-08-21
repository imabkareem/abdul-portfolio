import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "eCholestroCare: Automated Rule-Based Prescription Web Application",
    desc: "eCholestroCare is a health-focused web application that provides automatic prescriptions and lifestyle suggestions based on user cholesterol levels. Using doctor-defined rules, it analyzes reports, generates tailored advice.",
    tech: "MEN,EJS,Tailwind,JWT,Nodemailer",
    link: "https://github.com/imabkareem/echolestrol",
    live: "https://cholesterol-app.vercel.app",
   
  },
  {
    title: "AvonThreads: E-commerce Web Application",
    desc: "AvonThreads is a modern full-stack e-commerce platform for fashion and footwear shopping. It offers features like user authentication, product search and filtering, cart management, and a secure checkout. Admins can manage inventory, track orders, and update product listings via a dedicated dashboard.",
    tech: "MERN,JWT,Redux",
    link: "https://github.com/yourusername/tailor-booking",
    live: "https://tailor-booking.vercel.app",
   
  },
  {
    title: "Portfolio Website",
    desc: "A dynamic portfolio built with React, Framer Motion, and EmailJS for contact.",
    tech: "React, Framer Motion, EmailJS",
    link: "https://github.com/yourusername/portfolio",
    live: "https://abdulkareem.vercel.app",
   
  },
  {
    title: "E-Pass:Smart QR-Based University Entry/Exit Management System",
    desc: "E-Pass is a smart, full-stack web application that streamlines university entry and exit through QR-based passes. Students and staff generate unique QR codes for secure campus access, while the system maintains real-time logs of individuals inside or outside, ensuring transparency, automation, and enhanced campus security",
    tech: "React,Node,Express,MySQl,JWT",
    link: "https://github.com/yourusername/blog-platform",
    live: "https://blog-platform.vercel.app",
   
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🌟 My Projects
        </motion.h2>

        {/* Masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(200px,_1fr)]">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              className={`bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${index % 2 === 1 ? "mt-12 mb-0" : "mt-0 mb-12"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-indigo-500 mb-2">{proj.tech}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{proj.desc}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition inline-flex items-center gap-1"
                >
                  <FaGithub />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition inline-flex items-center gap-1"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
