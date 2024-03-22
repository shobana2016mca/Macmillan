"use client";

import { useState } from "react";
import Accordion from "../ui/Accordian";

export default function FaqAccordian() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How does your recruitment process work?",
      data: ` - Initially, we gather requirements from clients via virtual meetings.
      - Following that, we provide a quote for our services.
      - If everything aligns, we proceed with the recruitment process within a mutually agreed timeline.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What industries or job categories do you serve?",
      data: ` - We cater to all industries and a wide array of job categories, leveraging our available resources and expertise.
      `,
      isOpen: false,
    },
    {
      key: 3,
      title: "Do you charge for your service?",
      data: `- Yes, we offer our services at an affordable charge.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "How can a company or individual get started with your services?",
      data: ` - To get started with our services, simply reach out to us with your requirements, and we'll guide you through the process.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord: any) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <div className="p-2 md:m-8">
        {accordions.map((accordion: any, idx: number) => {
          return (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
              className={
                idx !== accordions.length - 1 ? "border-b border-gray-400" : ""
              }
            />
          );
        })}
      </div>
    </div>
  );

  return <div>FaqAccordian</div>;
}
