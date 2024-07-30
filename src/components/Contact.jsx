import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" style={styles.blueBackground} className="py-16">
      <div className="container mx-auto px-4">
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-1/2 mx-auto">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-[#108CC6] hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Send
            </button>
          </form>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mx-auto">
            <a
              href="https://www.linkedin.com/in/akshitachauhan1414/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Akshita1414"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </a>

            <a
              href="https://www.instagram.com/akshitachauhan882/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
