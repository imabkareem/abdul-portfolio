
import { motion } from "framer-motion";


import TypeWriter from "../components/TypeWriter";

import homeImage from "../assets/home-image.png";

import Project1 from "../components/Project1";
import Contact1 from "../components/Contact1";
import About1 from   "../components/About1";


import Skills1 from "../components/Skills1";


const Home = () => {
  return (
     <section id="home" className="min-h-screen  ">
   
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div
          
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi There!{" "} <motion.span
    className="inline-block origin-bottom-left"
    animate={{ rotate: [0, 20, -15, 15, -10, 0], y: [0, -2, 2, -1, 0], x: [0, -2, 0, 2, 0] }}
    transition={{ duration: 1.5, repeat: 1, ease: "easeInOut" }}
  >
    👋
  </motion.span>
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            I'M ABDUL KAREEM
          </h1>
          <div className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            <TypeWriter />
          </div>
          {/*Button goes here */}
            <div className="relative mt-10 w-44 h-11 ">
  {/* Click me note - Top-Right of Button */}
  <div>
    <motion.span
      className="dark:text-white text-green-600 text-xl font-bold absolute -top-8 -right-20"
      style={{ fontFamily: "'Caveat', cursive"  }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      Click me!
    </motion.span>
    <svg
      className="w-16 h-16 dark:text-white text-green-500 absolute -top-4 -right-10"
      fill="none"
      stroke="currentColor"
      strokeWidth={.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 4C16 5 7.5 11 6 14.5M6 14.5L9.5 13M6 14.5L7 11"
      />
    </svg>
  </div>

  {/* Main Button */}
  <button className="bg-teal-400 text-black px-5 py-1 rounded-full text-lg font-semibold hover:bg-teal-500 transition">
    Let's connect!
  </button>

  {/* Contact Me link */}
  <div className="mt-2 text-center">
    <a
      href="#contact"
      className="text-blue-400 underline hover:text-blue-300 block"
    >
      Contact Me
    </a>
  </div>
</div>


        </div>

        <div
          
          className="flex justify-center"
        >
          <img src={homeImage} alt="home" className="w-[80%] max-w-[400px]" />
        </div>
      </div>
     
      <Skills1/>
      <Project1/>
      <About1/>
      <Contact1/>
    </section>
  );
};

export default Home;
