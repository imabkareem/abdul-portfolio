import profileImage from "../assets/profile-picture.jpg"
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 text-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profileImage} // Replace with your photo
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m a dedicated <strong>MERN Stack Developer</strong> building responsive, scalable full-stack apps.
        </motion.p>

        {/* Skills Teaser */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">🛠 Want to know my full tech stack?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I’ve worked with MongoDB, Express, React, Node.js, Tailwind, and more. Get the full list of tools, languages, and frameworks I use.
          </p>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-4 py-2 border dark:hover:text-gray-900 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 transition"
          >
            Explore Skills <FaArrowRight />
          </Link>
        </motion.div>

        {/* Project Teaser */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">💼 Want to see my projects?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I’ve built apps like a eCholestroCare,AvonThreads and more — powered by full-stack tech and clean UI.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 border dark:hover:text-gray-900 border-purple-500 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 transition"
          >
            View Projects <FaArrowRight />
          </Link>
        </motion.div>

        {/* Contact Teaser */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">📬 Want to connect?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            As a passionate fresher, I'm open to exciting opportunities, internships, or even a quick tech chat. Feel free to connect!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-600 hover:text-white dark:hover:text-gray-900 dark:hover:bg-pink-400 transition"
          >
            Contact Me <FaArrowRight />
          </Link>
        </motion.div>
                  {/* Education Section */}
<motion.div
  className="mb-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
  <div className="text-gray-600 dark:text-gray-400 space-y-3">
    <div>
      <p className="font-medium text-lg">MCA – Central University of Haryana</p>
      <p className="text-sm">CGPA: 8.08</p>
    </div>
    <div>
      <p className="font-medium text-lg">B.Sc (Hons) Applied Mathematics – Jamia Millia Islamia, New Delhi</p>
      <p className="text-sm">CGPA: 8.83</p>
    </div>
  </div>
</motion.div>
        {/* Download CV */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/1VrG9fmB71jbBILqh-16dGD_kcSCwQZXM/view?usp=sharing" // Update with your real resume file path
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full  hover:bg-indigo-700 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
