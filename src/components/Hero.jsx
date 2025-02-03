import React from "react";
import { styles } from "../styles";
import image from '../assets/images/img1.jpeg';

const Hero = () => {
  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '150px',
    right: '50px',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    border: '5px solid #108CC6',
    overflow: 'hidden',
  };

  const profileImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <section className={`relative w-full h-screen mx-auto`} style={styles.blueBackground}>
      <div className={`absolute inset-0 top-[220px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#108CC6]">Akshita Chauhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web developer, passionate <br className="sm:block hidden" />
            about coding and continually eager to <br className="sm:block hidden" />
            learn new technologies
          </p>

          <div className="position-relative mt-10 align-center ">
            <a
              href="https://drive.google.com/file/d/1QuaYsbM4CSPXR8qoTACZG9EjJ7BtbbHQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#108CC6] hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-blue-900 rounded">
                Download resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <div style={circleContainerStyle}>
        <img src={image} alt="My Setup" style={profileImageStyle} />
      </div>
    </section>
  );
};

export default Hero;
