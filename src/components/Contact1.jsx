import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp,FaPaperclip } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import emailjs from "@emailjs/browser";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


const Contact1 = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
const [files, setFiles] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or another service here
    setSubmitted(true);
    setFiles([]);
    setTimeout(() => setSubmitted(false), 3000); // Reset message after 3s
  };

  


  return (
    <section id="contact" className="py-20 text-gray-800 dark:text-white transition-all duration-500 grid grid-2">
      <div className="max-w-xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          #Contact Me
        </motion.h2>

        {/* Contact Form */}
<motion.form
  onSubmit={handleSubmit}
  className="space-y-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <input
    type="text"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
  <input
    type="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
 {/* Message Area with Multiple File Upload */}
<div className="relative">
  <textarea
    placeholder="Message"
    required
    rows="5"
    className="w-full px-4 py-2 pr-12 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  {/* Upload Icon */}
  <label htmlFor="file-upload">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="absolute bottom-3 right-3 text-indigo-600 dark:text-indigo-400 cursor-pointer"
    >
      <FaPaperclip className="text-xl" />
    </motion.div>
  </label>

  {/* Hidden File Input */}
  <input
    id="file-upload"
    type="file"
    multiple
    onChange={(e) => {
  const newFiles = Array.from(e.target.files);
  setFiles((prevFiles) => {
    const allFiles = [...prevFiles, ...newFiles];
    // Remove duplicates by name
    const uniqueFiles = allFiles.filter(
      (file, index, self) =>
        index === self.findIndex((f) => f.name === file.name)
    );
    return uniqueFiles;
  });
}}
    className="hidden"
  />
</div>

{/* File Preview List with Remove Option */}
{files.length > 0 && (
  <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
    {files.map((file, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded"
      >
        <p className="truncate max-w-xs">📎 {file.name}</p>
        <button
          type="button"
          onClick={() =>
            setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
          }
          className="text-red-500 hover:text-red-700 text-xs ml-4"
        >
          <RxCross2 />
        </button>
      </div>
    ))}
  </div>
)}



  <button
    type="submit"
    className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
  >
    Send
  </button>
</motion.form>
        {/* Success Message */}
        {submitted && (
          <motion.p
            className="mt-4 text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! Your message has been sent. 💌
          </motion.p>
        )}
      </div>
      <div className="">
          <motion.div>

          </motion.div>
      </div>
      {/* Floating Back to Top Button */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <FaArrowUp className="text-xl animate-bounce" />
      </motion.a>


    </section>
  );
};

export default Contact1;
