import React from "react";
import { eventsList } from "../constants"; // Import your events list
import Timeline from "../components/ui/time"; // Default import for Timeline

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
    <section className="w-full flex flex-col items-center md:pb-20">
      {/* <div className="w-full bg-zinc-900 shadow-xl shadow-green-700">
        <div className="bg-green-600 py-3">
          <h2 className="group-date">October 2024</h2>
        </div> */}
        <Timeline data={eventsList} /> {/* Pass timeline data as prop */}
      {/* </div> */}
    </section>
  );
};

export default Schedule;
