import React from "react";
import starGif from "../images/512.gif";
import { useEffect, useState } from "react";
const NotifyMarque = () => {
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
    <div className="deals w-full flex justify-center items-center gap-[0.5vw]  md:text-[0.9vw] text-[1vh] text-white py-[0.5vh] xl:py-[0.4vw] text-center">
      <img src={starGif} className="xl:w-[1.2vw] w-[2vh]" />
      <p className="capitalize md:font-semibold text-[1.8vh] md:text-[1vw]">
        PCCOE ACM Hacktoberfest is{" "}
        <span className="text-green-500 font-semibold underline">live</span>{" "}
        now!!
      </p>
      <img src={starGif} className="xl:w-[1.2vw] w-[2vh]" />
    </div>
  );
};

export default NotifyMarque;
