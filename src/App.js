import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experince from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="h-[100vh]">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <div className="container mx-auto w-full lg:w-[70%] px-5">
          <Hero />
        </div>
      </div>

      <div className="container mx-auto px-5 w-full lg:w-[55%]">
        <About />
      </div>

      <div className="container mx-auto px-5 lg:w-[70%] w-full">
        <Experince />
      </div>

      <div className="container mx-auto w-full px-5 lg:w-[70%]">
        <Skills />
      </div>
    </div>
  );
}

export default App;
