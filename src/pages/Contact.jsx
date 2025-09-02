
import { motion } from "framer-motion";
import { MdEmail, MdPerson } from "react-icons/md";
import { FaPaperPlane,FaPaperclip } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


const Contact = () => {

  const [message1, setMessage] = useState("");
   const [name, setName] = useState("");
  const [email,setEmail] =useState("");
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);    
  setSubmitted(false); 

  try {
    // 1. Upload files to Cloudinary
    const uploadPromises = files.map(async (file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);

      return await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: data,
      }).then((res) => res.json());
    });

    const uploadResults = await Promise.all(uploadPromises);
    const fileUrls = uploadResults.map((res) => res.secure_url);
    console.log(fileUrls);

    const formattedLinks = fileUrls.join(", ");

    const message = `
      Message: ${message1} 
      Links: ${formattedLinks}
    `;

    const templateParams = {
      name,
      email,
      message,
      time: new Date().toLocaleString(),
    };

    // 2. Send via EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);   
    setSending(false);    

    // Reset back after 3s
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    // 3. Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setFiles([]);

  } catch (error) {
    console.error("Failed to send message:", error);
    alert("Something went wrong. Try again later.");
    setSending(false); // allow retry
  }
};

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100 to-transparent dark:from-indigo-800 dark:to-transparent opacity-20 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
<motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto"
>
  {/* Name */}
  <div className="relative">
    <MdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl" />
    <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder="Your Name"
      required
      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
    />
  </div>

  {/* Email */}
  <div className="relative">
    <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl" />
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your Email"
      required
      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
    />
  </div>

  {/* Message and Attachment */}
  <div className="relative">
    <textarea
      placeholder="Write your message..."
      required
      rows="5"
      value={message1}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 resize-none"
    />

    {/* Upload Icon */}
    <label htmlFor="file-upload">
      <motion.div
        whileHover={{ scale: 1.15 }}
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

  {/* Display Attached Files */}
  {files.length > 0 && (
    <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg"
        >
          <p className="truncate max-w-xs">📎 {file.name}</p>
          <button
            type="button"
            onClick={() =>
              setFiles((prevFiles) =>
                prevFiles.filter((_, i) => i !== index)
              )
            }
            className="text-red-500 hover:text-red-700 text-xs ml-4"
          >
            <RxCross2 />
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Submit Button */}
  <motion.button
        type="submit"
        disabled={sending}
        whileHover={{ scale: sending ? 1 : 1.05 }}
        whileTap={{ scale: sending ? 1 : 0.95 }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300
          ${sending || submitted 
            ? "bg-gray-400 cursor-not-allowed text-white" 
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
      >
        <FaPaperPlane />
        {sending 
          ? "Sending..." 
          : submitted 
            ? "Sent!" 
            : "Send Message"}
      </motion.button>
</motion.form>

      </div>
    </section>
  );
};

export default Contact;
