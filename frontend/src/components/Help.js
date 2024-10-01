import React, { useState } from "react";
import "./FAQComponent.css";
import MatrixEffect from "./ui/MatrixEffect";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null); // Set to null for no FAQ open by default

  const faqs = [
    {
      title: " What is Hacktoberfest ?",
      content:
        "Hacktoberfest is an annual, month-long event hosted by DigitalOcean that encourages participation in open-source software development. Participants are encouraged to contribute to public GitHub repositories by submitting pull requests (PRs). The goal is to help both seasoned and new developers get involved in open source.",
    },
    {
      title: "When does Hacktoberfest take place?",
      content:
        "Hacktoberfest takes place throughout the month of October, starting on October 1st and ending on October 31st. Registration typically begins in late September.",
    },
    {
      title: " How can I participate in Hacktoberfest?",
      content:
        "Register on the official Hacktoberfest website." +
        "Make four valid pull requests (PRs) to participating open-source projects on GitHub or GitLab during the month of October",
    },
    {
      title: "What are the rules for Hacktoberfest participation?",
      content: `1. Pull requests can be made to any public repository on GitHub or GitLab that is marked as Hacktoberfest-eligible
              2. The PRs should be meaningful, and spammy or low-quality PRs will be marked as invalid.
              3. Repositories can opt out of Hacktoberfest by adding a hacktoberfest topic to the repository’s metadata or marking invalid PRs as spam.`,
    },
    {
      title: " Do I need to be an experienced developer to participate?",
      content:
        "No, Hacktoberfest is open to everyone, regardless of their experience level. It's a great opportunity for beginners to learn and contribute to open-source projects. Many projects have issues marked with “good first issue” that are suitable for newcomers.",
    },
    {
      title: "Is Hacktoberfest only for developers or coders?",
      content: `While Hacktoberfest is primarily focused on coding, contributions aren’t limited to just code. Participants can also contribute by improving documentation, creating tutorials, updating designs, or fixing bugs. Non-code contributions are encouraged as long as they follow the repository's contribution guidelines.`,
    },
    {
      title: "Is Hacktoberfest only for developers or coders?",
      content: `While Hacktoberfest is primarily focused on coding, contributions aren’t limited to just code. Participants can also contribute by improving documentation, creating tutorials, updating designs, or fixing bugs. Non-code contributions are encouraged as long as they follow the repository's contribution guidelines.`,
    },
    {
      title: "How can I find repositories that are Hacktoberfest-eligible?",
      content: `To find eligible repositories, search for projects with the hacktoberfest topic on GitHub or GitLab. Many repositories will also mark beginner-friendly issues with labels like "good first issue" or "help wanted."`,
    },
    {
      title: "Are all pull requests counted toward Hacktoberfest?",
      content: `No, not all pull requests are automatically counted. Only meaningful contributions to Hacktoberfest-eligible repositories will count. PRs labeled as invalid, spam, or that don’t adhere to the project’s contribution guidelines will not be counted toward the required four PRs.






`,
    },
  ];

  const toggleFAQ = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); // Close the currently open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="xl:my-3 pt-[4vh]">
      {/* <MatrixEffect /> */}
      <div className="container mx-auto">
        <h1 className="sm:text-5xl md:text-3xl  text-2xl  font-mono text- font-bold text-green-500 text-center mb-8">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="container transition ease-in-out duration-500 border max-w-[60%] rounded-lg border-green-400 mt-6 h-fit p-8 mx-auto text-zinc-700 flex-col divide-y-2 divide-solid divide-red-600 divide-opacity-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`item p-4 flex flex-col ${
              openIndex === index ? "open" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="title font-mono text-xl font-bold flex text-green-500 justify-between items-center">
              <span className="text-xl md:text-2xl">{faq.title}</span>
              <span
                className={` fas fa-chevron-down ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              ></span>
            </div>

            <p
              className={`text-white text-xl bg-green-500 bg-opacity-20 p-3 rounded-md font-mono transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
              style={{
                maxHeight:
                  openIndex === index ? `${faq.content.length + 100}px` : "0px",
                transition: "max-height 0.5s ease-in-out",
              }}
            >
              {faq.content}
            </p>
            <div className="bg-green-500 h-[0.3px]">
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
