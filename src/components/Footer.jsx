import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaDev,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="left-0 right-0  flex flex-col md:flex-row items-center justify-between gap-4 text-center py-6 mt-10 px-6 border-t border-gray-200 dark:border-gray-700">
      {/* Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/imabkareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/imabkareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://instagram.com/imabkareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://x.com/imabkareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://dev.to/imabkareem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FaDev size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Abdul Kareem. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
