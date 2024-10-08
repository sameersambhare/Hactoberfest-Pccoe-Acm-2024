import React from "react";
import "./about.css"; // Importing a custom CSS file for Tailwind CSS or regular CSS
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About PCCOE ACM Hacktoberfest 2024 | Open Source Event</title>
        <meta
          name="description"
          content="Learn about Hacktoberfest 2024, an open-source celebration hosted by PCCOE ACM. Participate in workshops, coding challenges, and more!"
        />
        <meta
          name="keywords"
          content="Hacktoberfest 2024, open-source, PCCOE, ACM, GitHub, workshops, coding challenges, Git, game development, web development"
        />
        <meta name="author" content="PCCOE ACM" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PCCOE ACM Hacktoberfest 2024 | Open Source Celebration"
        />
        <meta
          property="og:description"
          content="Join the PCCOE ACM Hacktoberfest 2024 to learn and contribute to open-source software with exciting events, workshops, and competitions."
        />
        <meta
          property="og:url"
          content="https://events.mlh.io/events/11753-hacktoberfest-2024-in-pccoe"
        />
        <meta
          property="og:image"
          content="path_to_image_for_social_media.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="PCCOE ACM Hacktoberfest 2024 | Open Source Celebration"
        />
        <meta
          property="twitter:description"
          content="Get involved with Hacktoberfest 2024 at PCCOE ACM. Learn about open-source software, attend coding workshops, and contribute to real-world projects."
        />
        <meta
          property="twitter:image"
          content="path_to_image_for_social_media.png"
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://events.mlh.io/events/11753-hacktoberfest-2024-in-pccoe"
        />
      </Helmet>
      <section className="bg-zinc-950 text-green-400 py-16 px-6 md:py-20 lg:py-28">
        <div className="container">
          {/* About Hacktoberfest Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-400 mb-4">
              About Hacktoberfest 2023
            </h1>
            <p className="text-lg text-gray-300">
              Hacktoberfest is open to everyone in our global community. It's a
              month-long celebration of open-source software hosted by
              DigitalOcean. Hacktoberfest 2024 brings together open-source
              enthusiasts, beginners, and the global developer community and
              encourages them to contribute to open-source projects.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            {/* Mission and Events */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our mission is to inspire more people to get involved in
                  open-source and work together to improve the software we rely
                  on, which powers our world today.
                </p>

                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  Hacktoberfest at PCCOE
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We are conducting Hacktoberfest at our college, PCCOE. Join us
                  in this exciting event and participate in various workshops
                  and challenges:
                </p>

                {/* Cards for Events */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      💻 Git and GitHub Workshop
                    </h3>
                    <p className="text-gray-300">
                      Learn the basics of Git and GitHub to kickstart your
                      open-source journey.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      🖌 Figma Workshop and Contest
                    </h3>
                    <p className="text-gray-300">
                      Master the Figma design tool and showcase your creativity
                      in our contest.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      🎮 Game Development Workshop
                    </h3>
                    <p className="text-gray-300">
                      Dive into the world of game development and build your
                      first game.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      📄 Resume-Building & LinkedIn Sessions
                    </h3>
                    <p className="text-gray-300">
                      Get professional tips on building a standout resume and
                      LinkedIn profile.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      🛠 Web Design & Development Challenge
                    </h3>
                    <p className="text-gray-300">
                      Test your web design and development skills in this
                      hands-on challenge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center">
                <img
                  src="2.avif"
                  alt="Hacktoberfest"
                  className="drop-shadow-three"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="https://events.mlh.io/events/11753-hacktoberfest-2024-in-pccoe"
              className="bg-green-500 text-black py-2 px-6 rounded-md hover:bg-green-700"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center mt-16">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center">
              <img
                src="amc-pccoe-logo.png"
                alt="ACM Image"
                className="drop-shadow-three"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h3 className="mb-4 text-2xl font-bold text-green-400 sm:text-2xl lg:text-xl xl:text-2xl">
                PCCOE ACM - Association for Computing Machinery
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                The ACM chapter at PCCOE is a vibrant community of computing
                enthusiasts. We strive to connect students with the latest
                technologies, encourage innovation, and provide numerous
                learning opportunities.
              </p>

              <h3 className="mb-4 text-xl font-bold text-green-400">
                For the Students, By the Students
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color text-gray-300">
                We aim to build a strong community where students can
                collaborate, learn, and grow together, with access to
                cutting-edge workshops, competitions, and networking
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="bg-green-500 text-black py-2 px-6 rounded-md hover:bg-green-700"
          >
            Join ACM Now
          </a>
        </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default About;
