"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/constants/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { title } from "process";
import React from "react";

const FeaturedProperties = () => {
  return (
    <div>
      <div className="max-w-[1440px] m-auto mt-10 px-3 py-4">
        <Header
          title="Featured Properties"
          subtitle={`Explore our handpacked selection of feature properties. each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein.Click "View Details" for more information`}
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
    </div>
  );
};

export default FeaturedProperties;
