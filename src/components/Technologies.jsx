import React from "react";
import { styles } from "../styles";
import { technologiesData } from "../constants";

const SkillCircle = ({ name, percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#108CC6"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-stroke-dashoffset duration-500"
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-1xl font-bold text-white">{percentage}%</span>
        <div className="text-1xl text-white">{name}</div>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section id="skills" className="w-full py-10" style={styles.blueBackground}>
      <div className="container mx-auto px-4">
      <h2 className={styles.sectionHeadText}>Skills</h2>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologiesData.map((technology) => (
            <SkillCircle
              key={technology.name}
              name={technology.name}
              percentage={technology.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
