"use client";

import { useState } from "react";
import Accordion from "../ui/Accordian";

export default function FaqAccordian() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How do I create an account?",
      data: `Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90’s duis typewriter banjo organic leggings Vice.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What to do after my application is successful?",
      data: `Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90’s duis typewriter banjo organic leggings Vice.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Why is my application stuck on pending?",
      data: `Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90’s duis typewriter banjo organic leggings Vice.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Can i unsubscribe from your newsletter?",
      data: `Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90’s duis typewriter banjo organic leggings Vice.`,
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
      <div className="p-2 m-8">
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
