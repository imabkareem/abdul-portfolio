import { useState } from "react";
import emailjs from "emailjs-com";

const Contact1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message1, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload files to Cloudinary
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
            { method: "POST", body: formData }
          );

          const data = await res.json();
          return data.secure_url;
        })
      );

      const formattedLinks = uploadedUrls.map((url) => `${url}`).join(", ");

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

      // Send email with EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      // Reset form after submit
      setName("");
      setEmail("");
      setMessage("");
      setFiles([]);
      e.target.reset();

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            placeholder="Message"
            required
            rows="5"
            value={message1}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>

          {submitted && (
            <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact1;
