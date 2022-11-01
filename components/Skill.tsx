import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -80 : 80,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="relative rounded-full border border-gray-500 object-cover w-[72px] h-[72px] md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        alt=""
        src={skill.source}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[72px] h-[72px] md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl text-black opacity-100">{skill.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
