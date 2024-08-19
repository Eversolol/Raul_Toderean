import React from "react";
import Hr from "./Hr";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="flex flex-row flex-wrap py-[100px]">
      {/* <h1 className="text-4xl text-slate-300 font-bold mb-5">About Me</h1>{" "}
      <Hr /> */}

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-col w-full lg:w-2/3 "
      >
        <h1 className="text-4xl text-slate-300 font-bold mb-5">About Me</h1>{" "}
        <Hr />
        <p className="py-5 text-xl w-full text-[#8892b0]">
          I’m a 24-year-old who started out as a Python developer back in
          school. I’m now working at the{" "}
          <a href="https://www.mil.be/fr/" className="text-[#64ffda]">
            Belgian Defense
          </a>
          , but these days I’m diving into{" "}
          <span
            className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text
              text-transparent font-semibold"
          >
            Full Stack JavaScript
          </span>{" "}
          development. My goal? To create modern, intuitive web experiences that
          users love.
        </p>
        <p className="pb-5 text-xl w-full text-[#8892b0]">
          I turn coffee into code and pixels into perfection. When I’m not busy
          taming wild CSS or hunting down JavaScript bugs, you’ll probably find
          me at the gym 💪 or attempting to cook something (emphasis on
          attempting 🔥).
        </p>
        <p className="pb-5 text-xl w-full text-[#8892b0]">
          I’m all about making the web a more beautiful and functional place—one
          line of code at a time. Let’s build something awesome together (and
          maybe share a few memes along the way)!
        </p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center w-full lg:w-1/3 p-5 "
      >
        <img
          className="rounded"
          src="https://i.ibb.co/C6FX3LH/Myself-1.jpg"
          alt="Raul Toderea,"
        />
      </motion.div>
    </div>
  );
}

export default About;
