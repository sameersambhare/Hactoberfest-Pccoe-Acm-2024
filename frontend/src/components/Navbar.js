import React from "react";
import logo from "../images/ACM.png";
import hacktober from "../images/hacktober.svg";
import { Link } from "react-router-dom";
import {navMenu} from '../constants'
const Navbar = () => {
  return (
    <div className="w-full text-white bg-[#000000b5] flex items-center md:py-[1vw] md:px-[4vw] overflow-hidden justify-between md:justify-center md:gap-[2vw] fixed top-0 left-0 z-[999] md:rounded-bl-[1.6vw] md:rounded-br-[1.6vw] px-[20px] py-[10px]">
      <img src={logo} alt="" className="w-[15vw] md:w-[4.2vw]" />
      <img src={hacktober} alt="" className="w-[22vw] md:w-[7vw]" />
      <nav>
        <ul className="md:flex md:text-[1.15vw] items-center justify-center md:gap-[3vw] block hidden">
          {navMenu.map((item, index) => {
            return (
              <Link to={item.url} key={index}>
                <li className="cursor-pointer">{item.id}</li>
              </Link>
            );
          })}
          <Link to="/register"><button className="md:text-[1.15vw] font-semibold hover:text-white text-green-600 border-green-600 border-[0.1vw] px-[1vw] py-[0.3vw] hover:bg-green-600">Register</button></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
