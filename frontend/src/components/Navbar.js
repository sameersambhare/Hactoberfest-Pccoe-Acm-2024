import React from "react";
import logo from "../images/ACM.png";
import hacktober from "../images/hacktober.svg";
import { Link } from "react-router-dom";
import { navMenu } from "../constants";
import { useState, useEffect } from "react";
const Navbar = () => {
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
    <section className="w-full  backdrop-blur-lg  fixed top-0 left-0 z-[999] bg-[#000000b5]">
      <div className="deals w-full  md:text-[0.9vw] text-[1vh] text-white py-[0.4vw] text-center">
        <p className="capitalize">
          PCCOE ACM Hacktoberfest Coming Soon | {" "}
          {days < 10 ? "0" + days : days} days,{" "}
          {hours < 10 ? "0" + hours : hours} hours,{" "}
          {minutes < 10 ? "0" + minutes : minutes} minutes,{" "}
          {seconds < 10 ? "0" + seconds : seconds} seconds Remaining
        </p>
      </div>
      <div className="w-full text-white flex items-center md:py-[0.5vw] md:px-[4vw] overflow-hidden justify-between md:justify-center md:gap-[2vw]  md:rounded-bl-[1.6vw] md:rounded-br-[1.6vw] px-[20px] py-[10px]">
        <img src={logo} alt="" className="w-[6vh] md:w-[4vw]" />
        <img src={hacktober} alt="" className="w-[9vh] md:w-[6vw]" />
        <nav>
          <ul className="md:flex md:text-[1.15vw] items-center justify-center md:gap-[3vw] block hidden">
            {navMenu.map((item, index) => {
              return (
                <Link to={item.url} key={index}>
                  <li className="cursor-pointer">{item.id}</li>
                </Link>
              );
            })}
            <Link to="/register">
              <button className="md:text-[1.15vw] font-semibold hover:text-white text-green-600 border-green-600 border-[0.1vw] px-[1vw] py-[0.3vw] hover:bg-green-600">
                Register
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
