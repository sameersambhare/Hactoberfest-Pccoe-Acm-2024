import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const linksMenu = [
    { Icon: FaInstagram, url: "https://www.instagram.com/pccoeacm/" },
    { Icon: FaFacebook, url: "https://www.facebook.com/pccoe.acm" },
    { Icon: CiMail, url: "mailto:pccoeacm@gmail.com" }, // Use mailto for email links
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/company/pccoe-acm-student-chapter",
    },
  ];

  return (
    <div className="w-full bg-black text-white md:py-[1vw] md:px-[4vw] p-[1vh] items-center md:gap-[1vw] gap-[1vh] flex-col justify-center flex">
      <h2 className="md:text-[1.5vw] text-[3.2vh] font-bold">Follow us</h2>
      <div className="flex space-x-4">
        {linksMenu.map(({ Icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <Icon className="md:text-[2.5vw] text-green-700 text-[3vh]" />{" "}
            {/* Optional class for icon size */}
          </a>
        ))}
      </div>
      <div className=" justify-center items-center flex flex-col text-center">
        <p className="md:text-[1.2vw] text-[2vh]">
          © Copyright 2024 PCCOE-ACM HacktoberFest
        </p>
        <p>Designed with ❤️ by Webmasters ACM Student Chapter Pccoe, Pune</p>
      </div>
    </div>
  );
};

export default Footer;
