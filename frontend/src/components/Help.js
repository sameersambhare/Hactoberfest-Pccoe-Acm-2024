import React, { useState } from "react";
import "./FAQComponent.css";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null); // Set to null for no FAQ open by default

  const faqs = [
    {
      title: "Introduction",
      content:
        "Welcome to the introductory section. Here, we will provide an overview of the main topics and objectives of this document. You will get familiar with the purpose and scope of what’s to come.",
    },
    {
      title: "Background",
      content:
        "In this section, we cover the background information relevant to the subject. This includes historical context, key developments, and foundational concepts that will help you understand the main content.",
    },
    {
      title: "Detailed Analysis",
      content:
        "This part delves into a detailed analysis of the topic. It includes data, insights, and in-depth discussion that provides a comprehensive understanding of the subject matter.",
    },
    {
      title: "Conclusion",
      content:
        "The conclusion wraps up the main points discussed and offers final thoughts. This section provides a summary of findings and potential recommendations or next steps based on the analysis.",
    },
  ];

  const toggleFAQ = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); // Close the currently open FAQ
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <>
      <div className="container mx-auto mt-6">
        <h1 className="text-5xl font-mono text- font-bold text-green-500 text-center mb-8">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="container transition ease-in-out duration-500 border max-w-[60%] rounded-lg border-green-400 mt-10 h-fit p-8 mx-auto text-zinc-700 flex-col divide-y-2 divide-solid divide-red-600 divide-opacity-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`item p-4 flex flex-col ${
              openIndex === index ? "open" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="title font-mono text-xl font-bold flex text-green-500 justify-between items-center">
              <span className="text-[30px]">{faq.title}</span>
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
    </>
  );
};

export default FAQComponent;
