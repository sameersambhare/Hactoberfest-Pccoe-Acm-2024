import React, { useState, useEffect } from "react";
import logo from "../images/ACM.png";
import hacktober from "../images/hacktober.svg";
import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  // Set the active link based on the current URL
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItemStyle = {
    position: "relative",
    cursor: "pointer",
  };

  const getAfterStyle = (isActive) => ({
    content: '""',
    position: "absolute",
    width: isActive ? "100%" : "0",
    height: "2px",
    backgroundColor: "#00ff85",
    left: 0,
    bottom: "-5px",
    transition: "width 0.3s ease-in-out",
  });

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadLine = "October,1,2024";

  const getTime = () => {
    const time = Date.parse(deadLine) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full fixed top-0 left-0 z-[999] bg-[black] shadow-lg shadow-green-700">
      {/* --------------------------Time remaining --------------------------------------*/}
      <div className="deals w-full  md:text-[0.9vw] text-[1vh] text-white py-[0.4vw] text-center">
        <p className="capitalize">
          PCCOE ACM Hacktoberfest Coming Soon | {days < 10 ? "0" + days : days}{" "}
          days, {hours < 10 ? "0" + hours : hours} hours,{" "}
          {minutes < 10 ? "0" + minutes : minutes} minutes,{" "}
          {seconds < 10 ? "0" + seconds : seconds} seconds Remaining
        </p>
      </div>
      {/*------------------------------------- Navbar---------------------------------------------*/}
      <div className="w-full font-['Space_Mono'] text-[#B2D2A8] flex items-center md:py-[0.5vw] md:px-[4vw]  justify-between md:justify-center md:gap-[2vw]  md:rounded-bl-[1.6vw] md:rounded-br-[1.6vw] px-[20px] py-[10px] relative">
        <img src={logo} alt="" className="w-[6vh] md:w-[4vw]" />
        <img src={hacktober} alt="" className="w-[9vh] md:w-[6vw]" />
        {/*----------------- Navlinks------------------- */}
        <nav>
          <GiHamburgerMenu
            className={`md:hidden block text-[3vh]`}
            onClick={() => {
              setMenuOpen(true);
            }}
          />
          <ul
            className={`navLinks md:flex md:text-[1.15vw] hidden items-center justify-center md:gap-[3vw] `}
            style={{
              display: menuOpen && "block",
              width: menuOpen && "100%",
              position: menuOpen && "absolute",
              top: menuOpen && "100%",
              left: menuOpen && "0",
              backgroundColor: menuOpen && "black",
            }}
          >
            {navMenu.map((item, index) => {
              const isActive = activeLink === item.url;
              return (
                <Link
                  to={item.url}
                  key={index}
                  onMouseEnter={() => setActiveLink(item.url)}
                >
                  <li className="cursor-pointer" style={navItemStyle}>
                    {item.id}
                    <span style={getAfterStyle(isActive)}></span>
                  </li>
                </Link>
              );
            })}
            <a href="https://forms.gle/cU1tA4FeT6f3DCDV9">
              <button className="md:text-[1.15vw] font-semibold hover:text-white text-green-600 border-green-600 border-[0.1vw] px-[1vw] py-[0.3vw] hover:bg-green-600">
                Register
              </button>
            </a>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
