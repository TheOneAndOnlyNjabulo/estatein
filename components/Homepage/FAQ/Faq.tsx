"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { FAQ } from "@/constants/constants";
import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div id="faq" className="max-w-[1440px] m-auto mt-10 px-3 py-4">
      <Header
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way. "
        buttonTitle="View All FAQ' s"
        buttonOnClick={() => {}}
      />
      <div className="grid mt-3 grid-cols-1 md:grid-cols-3 h-auto gap-2">
        {FAQ.map((item) => (
          <FaqCard
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Faq;
