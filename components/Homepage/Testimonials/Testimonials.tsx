"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { Testemonies } from "@/constants/constants";
import React from "react";
import TestemonyCard from "./TestemonyCard";

const Testimonials = () => {
  return (
    <div id="testimonials" className="max-w-[1440px] m-auto mt-10 px-3 py-4">
      <Header
        title="What Our Clients Say"
        subtitle="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        buttonTitle="View All Testimonials"
        buttonOnClick={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto gap-2">
        {Testemonies.map((item) => (
          <TestemonyCard
            key={item.title}
            title={item.title}
            name={item.name}
            profile={item.profile}
            description={item.desc}
            location={item.location}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Testimonials;
