import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between py-4  text-[#8892b0] font-semibold ">
      <div className="m-8 flex  gap-4 text-2xl items-center">
        <FaFacebook className="text-white hover:text-[#64ffda]" />
        <FaGithub className="text-white hover:text-[#64ffda]" />
        <FaInstagram className="text-white hover:text-[#64ffda]" />
        <FaLinkedin className="text-white hover:text-[#64ffda]" />
      </div>
      <div className="flex gap-4 text-lg m-8">
        <ul className="flex gap-4 text-base px-5">
          <li className="p-3 hover:text-[#64ffda] tracking-wide duration-300">
            <a href="">About</a>
          </li>
          <li className="p-3 hover:text-[#64ffda] tracking-wide duration-300">
            <a href="">Experience</a>
          </li>
          <li className="p-3 hover:text-[#64ffda] tracking-wide duration-300">
            <a href="">Work</a>
          </li>
          <li className="p-3 hover:text-[#64ffda] tracking-wide duration-300">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
