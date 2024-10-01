import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../images/ACM.png";
import hacktober from "../images/hacktober.svg";
import NotifyMarque from "./NotifyMarque";
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 z-[999] bg-black">
      <NotifyMarque />
      <div className="w-full items-center xl:justify-center justify-between py-[1vh] flex gap-12 shadow-green-700 font-['Space_Mono'] text-[#B2D2A8] px-[2vh]">
        <img src={logo} alt="" className="w-[5vh] md:w-[4vw] cursor-pointer" />
        <img
          src={hacktober}
          alt=""
          className="w-[9vh] md:w-[6vw] cursor-pointer"
        />
        <div className="xl:flex gap-12 hidden">
          <ul className="navLinks xl:flex items-center gap-12">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Project</li>
            </Link>
            <Link to="/schedule">
              <li>Schedule</li>
            </Link>
            <Link to="/leaderboard">
              <li>Leaderboard</li>
            </Link>
            <Link to="/help">
              <li>Help</li>
            </Link>
          </ul>
          <a href="https://forms.gle/cU1tA4FeT6f3DCDV9">
            <button className="md:text-[1.15vw] font-semibold hover:text-white text-green-600 border-green-600 border-[0.1vw] px-[1vw] py-[0.3vw] hover:bg-green-600">
              Register
            </button>
          </a>
        </div>
        <GiHamburgerMenu
          className="xl:text-[1.5vw] text-[3vh] xl:hidden block cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      <div
        className={`absolute xl:hidden top-[100%] left-0 bg-black text-[#B2D2A8] w-full flex flex-col items-center gap-4 font-['Space_Mono'] p-[1vh] text-[2vh] transform transition-transform ${
          isMenuOpen ? "block" : "hidden"
        } ${isMenuOpen ? "opacity-100" : "opacity-0"} `}
        style={{ transition: "transform 0.3s ease,opacity 0.3s ease" }}
      >
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/"
        >
          <li className="nav-links">Home</li>
        </Link>
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/about"
        >
          <li className="nav-links">About</li>
        </Link>
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/projects"
        >
          <li className="nav-links">Project</li>
        </Link>
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/schedule"
        >
          <li className="nav-links">Schedule</li>
        </Link>
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/leaderboard"
        >
          <li className="nav-links">Leaderboard</li>
        </Link>
        <Link
          onClick={() => {
            setIsMenuOpen(false);
          }}
          to="/help"
        >
          <li className="nav-links">Help</li>
        </Link>
        <a href="https://forms.gle/cU1tA4FeT6f3DCDV9">
            <button className="md:text-[1.15vw]  hover:text-white text-green-600 border-green-600 border-[0.1vw] px-[1vw] py-[0.3vw] hover:bg-green-600">
              Register
            </button>
          </a>
      </div>
    </div>
  );
};

export default Navbar2;
