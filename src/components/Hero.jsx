import { ReactTyped } from "react-typed";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const move = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

function Hero() {
  return (
    <div className="pb-4 lg=mb-35 h-full my-[25%] lg:my-[13%] flex flex-col justify-center items-start">
      <motion.h1
        variants={move(0)}
        initial="hidden"
        animate="visible"
        className=" text-2xl text-[#64ffda] pb-5 lg:ps-1"
      >
        <ReactTyped
          strings={[
            "Hello, my name is ",
            "Salut, ma numesc ",
            "Salut, je m'appelle ",
            "Hallo, ik ben ",
            "Hola soy ",
          ]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />
      </motion.h1>

      <motion.h1
        variants={move(0.5)}
        initial="hidden"
        animate="visible"
        className="text-4xl  md:text-6xl lg:text-8xl pb-3 font-bold text-slate-300"
      >
        Raul Toderean.
      </motion.h1>
      <motion.h1
        variants={move(1)}
        initial="hidden"
        animate="visible"
        className="text-4xl  md:text-6xl lg:text-7xl text-[#8892b0] pb-3 font-semibold"
      >
        I create{" "}
        <span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text
              text-transparent"
        >
          intuitive and modern
        </span>{" "}
        web experiences.
      </motion.h1>
      <motion.p
        variants={move(1.5)}
        initial="hidden"
        animate="visible"
        className="pt-5 text-2xl w-full lg:w-[50%] text-[#8892b0]"
      >
        {HERO_CONTENT}
      </motion.p>
    </div>
  );
}

export default Hero;
