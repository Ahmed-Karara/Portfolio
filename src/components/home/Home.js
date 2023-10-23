import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../../assets/Ahmed Karara CV.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      name="home"
      className="w-full h-screen bg-zinc-100 dark:bg-[#0a1928]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-[1000px] mx-auto h-full gap-2 px-8 py-6 flex flex-col justify-center text-black dark:text-white">
        <p className="lg:ml-10 text-3xl">Hi, I'm </p>
        <h1 className="lg:ml-10 text-4xl md:text-6xl">Ahmed Karara</h1>
        <TypeAnimation
          sequence={[
            "I'm a Front-End Developer",
            2000,
            "I'm a UI Developer",
            2000,
            "I'm a React JS Developer",
            2000,
          ]}
          speed={170}
          className="lg:ml-10 text-2xl md:text-4xl text-gray-700 dark:text-gray-300"
        />

        <motion.p
          variants={{ offscreen: { opacity: 0 }, onscreen: { opacity: 1 } }}
          transition={{ duration: 1.8 }}
          className="lg:ml-10 text-gray-700 dark:text-gray-400 max-w-[700px] py-1 text-xl"
        >
          specialized in developing and maintaining user interface, optimizing
          applications for maximum speed, designing and implementing responsive
          applications to fit all devices.
        </motion.p>
        <div className=" flex justify-start items-center flex-wrap gap-4 w-full">
          <div className="lg:ml-10 group w-[170px] h-[50px] border-2 border-pink-600 cursor-pointer hover:bg-pink-600 hover:text-white duration-300">
            <Link
              className="w-full h-full flex justify-around items-center"
              to="projects"
              smooth={true}
              duration={700}
            >
              <button className="font-light text-base">View Projects</button>
              <HiArrowNarrowDown className="group-hover:text-white animate-bounce duration-100 text-xl" />
            </Link>
          </div>
          <div className="lg:ml-10 group w-[160px] h-[40px] border-2 rounded-full cursor-pointer border-black  hover:border-pink-600 duration-300 dark:border-white dark:hover:border-pink-600">
            <a
              className="h-full flex justify-around items-center"
              href={CV}
              download
            >
              <button className="font-light text-base">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
