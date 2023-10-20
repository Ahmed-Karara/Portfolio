import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const cardVariants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      name="about"
      className="w-full h-screen bg-zinc-100 dark:bg-[#0a1928] dark:text-white"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col justify-center md:justify-center items-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-5xl sm:flex justify-end  pb-4 pl-4">
            <motion.p
              variants={{ offscreen: { opacity: 0 }, onscreen: { opacity: 1 } }}
              transition={{ duration: 1 }}
              className="border-b-4 font-semibold border-pink-600 w-[150px]"
            >
              About
            </motion.p>
          </div>
        </div>
        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            variants={cardVariants}
            className="text-4xl sm:text-right font-semibold"
          >
            <p>Hi, nice to meet you, please take a look around </p>
          </motion.div>
          <div className="font-light text-lg text-gray-700 dark:text-gray-300">
            <p>
              I am a Front-End developer with good experience and high
              potential, My ambition has no limits and i seek perfection in all
              aspects of work, I'm also willing to learn and develop my skills
              to gain more experience in this field.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
