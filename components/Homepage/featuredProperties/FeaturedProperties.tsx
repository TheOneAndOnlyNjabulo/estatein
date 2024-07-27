"use client";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PropertyCard from "@/components/PropertyCard";
import PropertyCarousel from "@/components/PropertyCorusel";
// import { properties } from "@/constants/constants";
import { Property } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { title } from "process";
import React from "react";

interface HeroProps {
  properties: Property[] | null;
}

const FeaturedProperties = ({ properties }: HeroProps) => {
  const router = useRouter();
  return (
    <div>
      <div id="features" className="max-w-[1440px] m-auto mt-10 px-3 py-4">
        <Header
          title="Featured Properties"
          subtitle={`Explore our handpacked selection of feature properties. each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein.Click "View Details" for more information`}
          buttonTitle="View All Properties"
          buttonOnClick={() => router.push("/properties")}
        />
        <div>
          {/* Cards */}
          <div className="">
            <PropertyCarousel properties={properties} />
          </div>
          {/* <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:cols-3 lg:grid-cols-4 gap-3 h-auto">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                title={property.title}
                image={property.image}
                description={property.description}
                price={property.price}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
