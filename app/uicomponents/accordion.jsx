"use client";
import React, { useState } from "react";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function BasicAccordion() {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Accordion 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },

    {
      title: "Accordion 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Accordion 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Accordion 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <div className="max-w-md mx-auto bg-gray-200 p-5 rounded">
      {accordionData.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className="shadow shadow-gray-400 mb-4  p-4">
            {/* Accordion title */}
            <div
              onClick={(e) => setActiveIndex(isOpen ? null : index)}
              className="flex justify-between items-center cursor-pointer font-bold text-2xl "
            >
              <h2 className="">{item.title}</h2>
              {/* icon */}
              <div className="">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
            </div>
            {/* Accordion content */}

            {isOpen && <p className="text-gray-600 mt-5">{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
