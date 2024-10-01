import React from "react";
import { eventsList } from "../constants"; // Import your events list
import Timeline from "../components/ui/time"; // Default import for Timeline
import { Helmet } from "react-helmet-async";
const Schedule = () => {
  // Convert the eventsList into the format expected by the Timeline component
  const timelineData = eventsList.map((item) => ({
    title: item.eventName,
    content: (
      <div>
        <span className="timeline-date">{item.eventTime}</span>
        <p className="text-white">{item.eventDescription}</p>
      </div>
    ),
  }));

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Event Schedule - Upcoming Events</title>
        <meta
          name="description"
          content="Check out the upcoming events and stay updated with the event schedule. Find the latest details about event timings and descriptions."
        />
        <meta name="keywords" content="events, schedule, upcoming events, timeline, event timings" />

        {/* Open Graph (for social media sharing) */}
        <meta property="og:title" content="Event Schedule - Upcoming Events" />
        <meta
          property="og:description"
          content="Discover upcoming events and stay updated with the event schedule. Get the latest details about event timings and descriptions."
        />
        <meta property="og:url" content="https://pccoe-acm-hacktoberfest-2024.vercel.app/" />
        <meta property="og:type" content="https://pccoe-acm-hacktoberfest-2024.vercel.app/" />
        <meta property="og:image" content="https://yourwebsite.com/path-to-your-image.jpg" />

        {/* Twitter Card for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Event Schedule - Upcoming Events" />
        <meta
          name="twitter:description"
          content="Stay informed about the upcoming events and their schedule. Find all event details here."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-your-image.jpg" />

        {/* Mobile friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pccoe-acm-hacktoberfest-2024.vercel.app/" />
      </Helmet>
      <section className="w-full flex flex-col items-center md:pb-20">
        {/* <div className="w-full bg-zinc-900 shadow-xl shadow-green-700">
        <div className="bg-green-600 py-3">
          <h2 className="group-date">October 2024</h2>
        </div> */}
        <Timeline data={eventsList} /> {/* Pass timeline data as prop */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Schedule;
