"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/constants/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { title } from "process";
import React from "react";
import Form from "./Form";

const Properties = () => {
  return (
    <div>
      <div id="features" className="max-w-[1440px] m-auto mt-10 px-3 py-4">
        <Header
          title="Discover a World of Possibilities"
          subtitle={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
          buttonTitle="View All Properties"
          buttonOnClick={() => {}}
        />
        <div>
          {/* Cards */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:cols-3 lg:grid-cols-4 gap-3 h-auto">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                title={property.title}
                image={property.image}
                description={property.description}
                price={property.price}
              />
            ))}
          </div>
          <div></div>
          <Pagination />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Properties;
