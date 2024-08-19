import Hr from "./Hr";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3, IoNutrition } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Skills() {
  return (
    <div className="flex-col pb-[100px]">
      <h1 className="text-4xl text-slate-300 font-bold mb-5">Technologies </h1>{" "}
      <Hr />
      <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <TiHtml5 className="text-5xl text-[#f06529]" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <IoLogoCss3 className="text-5xl text-[#2965f1]" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <SiJquery className="text-5xl text-[#0769ad]" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <FaNodeJs className="text-5xl text-[#3c873a]" />
        </motion.div>
        <motion.div
          variants={iconVariant(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <FaReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <SiPostgresql className="text-5xl text-[#0064a5]" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <FaGitAlt className="text-5xl text-[#f34f29]" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <FaGithub className="text-5xl " />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#8892b0] p-3"
        >
          <FaLinux className="text-5xl " />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
