"use client";
import Header from "@/components/Header";
import React from "react";
import ExperinceCard from "./ExperinceCard";
import { exprience } from "@/constants/constants";

const Experience = () => {
  return (
    <div className="flex  w-full flex-col mt-10 pb-10">
      <Header
        title="Navigating the Estatein Experience"
        subtitle="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how  it all works."
        hidden
        buttonOnClick={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3">
        {exprience.map((item) => (
          <ExperinceCard
            key={item.title}
            step={item.step}
            title={item.title}
            description={item.describtion}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
