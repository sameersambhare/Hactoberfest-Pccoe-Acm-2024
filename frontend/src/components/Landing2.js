import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Landing2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".two",
          start: "20% center",
          end: "100% center",
          scrub: 1,
        },
      })
      .to(".textArea-Hover h1", {
        width: "100%",
        duration: 1,
      })
      .to(".textArea-Hover h2", {
        width: "100%",
        duration: 1,
        delay: -0.7,
      })
      .to(".textArea-Hover h3", {
        width: "100%",
        duration: 1,
        delay: -0.7,
      })
      .to(".textArea-Hover h4", {
        width: "100%",
        duration: 1,
        delay: -0.7,
      });
  }, []);
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-green-700">
      <div className="two w-full h-screen flex items-center relative overflow-x-hidden">
        <div className="textArea absolute capitalize opacity-35 left-[3%] w-full">
          <h1 className="text-[2.8vw]  tracking-tighter">
          Hacktoberfest is open to everyone in our global community.
          </h1>
          <h2 className="text-[2.8vw]  tracking-tighter">
            {" "}
            Hacktoberfest is a month-long celebration of open source software hosted by
          </h2>
          <h3 className="text-[2.8vw]  tracking-tighter">
            {" "}
            DigitalOcean Hacktoberfest - 2023 brings together open-source enthusiasts,
          </h3>
          <h4 className="text-[2.8vw]  tracking-tighter">
            {" "}
            beginners, and the global developer community and encourages them to
          </h4>
          <h4 className="text-[2.8vw]  tracking-tighter">
            {" "}
            contribute to open-source projects. Our mission is to inspire more people to get
          </h4>
          <h4 className="text-[2.8vw]  tracking-tighter">
            {" "}
            involved in open source and work together to improve the software we rely on,
          </h4>
          <h4 className="text-[2.8vw]  tracking-tighter">
            {" "}
            and powers our world today.
          </h4>
        </div>
        <div className="textArea-Hover absolute capitalize opacity-100 left-[3%]">
          <h1 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
          Hacktoberfest is open to everyone in our global community.
          </h1>
          <h2 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
            {" "}
            Hacktoberfest is a month-long celebration of open source software hosted by
          </h2>
          <h3 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
          DigitalOcean Hacktoberfest - 2023 brings together open-source enthusiasts,
          </h3>
          <h4 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
            {" "}
            beginners, and the global developer community and encourages them to
          </h4>
          <h4 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
            {" "}
            contribute to open-source projects. Our mission is to inspire more people to get
          </h4>
          <h4 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
            {" "}
            involved in open source and work together to improve the software we rely on,
          </h4>
          <h4 className="text-[2.8vw] w-[0%] text-nowrap overflow-hidden tracking-tighter">
            {" "}
            and powers our world today.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
