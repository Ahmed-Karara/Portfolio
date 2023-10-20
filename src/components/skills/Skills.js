import React from "react";
import { skills } from "./SkillsData";
import { motion } from "framer-motion";

const Skills = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      name="skills"
      className="w-full md:h-screen py-24 bg-zinc-100 dark:bg-[#0a1928] dark:text-white"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="text-5xl w-full flex sm:justify-center mb-10 pl-4 sm:pl-0">
          <motion.p
            variants={cardVariants}
            className="border-b-4 font-semibold border-pink-600 w-[125px]"
          >
            Skills
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full px-4">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.15 }}
                className="bg-zinc-100 dark:bg-[#0a1928] flex flex-col items-center py-4 gap-6  shadow-md shadow-[#040c16] hover:shadow-pink-600 duration-300"
              >
                <img className="w-20 h-20" src={skill.image} alt={skill.name} />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
