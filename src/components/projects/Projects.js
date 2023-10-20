import React from "react";
import { projects } from "./ProjectsData";
import { CgArrowTopRight, CgArrowTopLeft } from "react-icons/cg";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      name="projects"
      className="w-full md:h-auto py-24 bg-zinc-100 dark:bg-[#0a1928] dark:text-white"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full py-1">
        <div className="text-5xl w-full flex sm:justify-center pb-4 pl-4">
          <p className=" border-b-4 font-semibold border-pink-600 w-[195px]">
            Projects
          </p>
        </div>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-2 gap-y-8 gap-x-16 w-full px-6 py-6">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="group relative overflow-hidden flex flex-col justify-end rounded-md w-full h-72 bg-no-repeat bg-cover bg-top hover:bg-bottom duration-1000 delay-200 ease-in-out"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute top-[-70px]  group-hover:top-0 flex flex-col items-center justify-center duration-500 w-full h-11 bg-black opacity-90">
                  <p className="text-xl text-white">{project.name}</p>
                </div>

                <div className="absolute bottom-[-65px]  group-hover:bottom-0 flex items-center justify-around text-sm duration-500 w-full h-16 bg-black bg-opacity-70 text-white">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className=" flex  items-center justify-around h-full "
                  >
                    <span className="py-0.5 px-3 group/arrow flex items-center gap-2 border-2 border-pink-600 hover:bg-pink-600 duration-300">
                      Demo
                      <CgArrowTopLeft
                        size={20}
                        className="group-hover/arrow:rotate-[90deg] duration-300"
                      />
                    </span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-around h-full "
                  >
                    <span className="py-0.5 px-3 group/arrow flex items-center gap-2 border-2 border-pink-600 hover:bg-pink-600 duration-300">
                      Code
                      <CgArrowTopRight
                        size={20}
                        className="group-hover/arrow:rotate-[-90deg] duration-300"
                      />
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
