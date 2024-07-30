import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";

const ServiceCard = ({ index, description, title, link }) => (
  <Tilt className='w-full'>
    <div
      className='bg-gray-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-lg border border-gray-700'
      style={{
        border: '2px solid',
        borderImageSlice: 1,
        borderWidth: '2px',
        borderImageSource: 'linear-gradient(to right, #34D399, #3B82F6, #9333EA)'
      }}
    >
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
      <p className="text-white text-[14px] text-center mt-2">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-400 hover:text-blue-600 underline"
        >
          View Project
        </a>
      )}
    </div>
  </Tilt>
);

const About = () => {
  return (
    <section
      id="about"
      className="p-10 text-white"
      style={{ ...styles.blueBackground, paddingBottom: '50px' }}
    >
      <h2 className={styles.sectionHeadText}>About me</h2>
      <p className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
        Hello! I'm a passionate web developer and a coding enthusiast. I enjoy
        creating interactive and dynamic web applications that provide seamless
        user experiences. With a solid foundation in HTML, CSS, and JavaScript,
        I love diving into modern frameworks and libraries like React.js to
        bring innovative ideas to life. I am also currently learning Data structures
        and Algorithms and some basic concepts of Python.
      </p>

      <h2 className={styles.sectionHeadText}>Projects</h2>
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            description={service.description}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
