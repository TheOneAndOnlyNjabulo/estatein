"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { properties, Testemonies } from "@/constants/constants";
import React from "react";
import TestemonyCard from "./TestemonyCard";
import TestemonialSlider from "./TestimonialSlider";
import PropertyCarousel from "@/components/PropertyCorusel";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials" className="max-w-[1440px] m-auto mt-10 px-3 py-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Header
            title="What Our Clients Say"
            subtitle="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            buttonTitle="View All Testimonials"
            buttonOnClick={() => {}}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className=" "
        >
          <TestemonialSlider testemonies={Testemonies} />
          {/* <PropertyCarousel properties={properties} /> */}
        </motion.div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 h-auto gap-2">
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
    </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
