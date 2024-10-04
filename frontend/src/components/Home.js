import React from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Landing2 from "./Landing2";
import StarsBackground from "../components/ui/star";
import ShootingStars from "../components/ui/shootStar";
import VideoSection from "./video";
import Certificate from "./Certificate";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hacktober Fest PCCOE 2024 - Empowering Open-Source</title>
        <meta
          name="description"
          content="Join Hacktober Fest PCCOE 2024 and be part of the movement to empower open-source projects. Collaborate, innovate, and code with AI, Cloud, and Next-Gen Developer Tools."
        />
        <meta
          name="keywords"
          content="Hacktober Fest 2024, Open-Source, PCCOE, AI, Cloud, Developer Tools, Collaboration, Innovation"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="PCCOE ACM Student Chapter" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Hacktober Fest PCCOE 2024 - Empowering Open-Source"
        />
        <meta
          property="og:description"
          content="Join Hacktober Fest PCCOE 2024 and be part of the movement to empower open-source projects with AI, Cloud, and Next-Gen Developer Tools."
        />
        <meta property="og:image" content="/path/to/social-media-image.jpg" />
        <meta
          property="og:url"
          content="https://pccoe-acm-hacktoberfest-2024.vercel.app/"
        />
        <meta
          property="og:type"
          content="https://pccoe-acm-hacktoberfest-2024.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hacktober Fest PCCOE 2024 - Empowering Open-Source"
        />
        <meta
          name="twitter:description"
          content="Collaborate, innovate, and code at Hacktober Fest PCCOE 2024."
        />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
      </Helmet>
      <div className="w-full min-h-screen relative">
        <Landing />
        <VideoSection />
        {/* <Certificate /> */}
        <StarsBackground />
        <ShootingStars />
        <Footer />
      </div>
    </>
  );
};

export default Home;
