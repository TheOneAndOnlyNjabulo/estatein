"use client";
import React from "react";
import Header from "../Header";
import {
  Calendar,
  Clock,
  DollarSign,
  Home,
  LocateIcon,
  Scale,
  Search,
} from "lucide-react";

const FindProperties = () => {
  return (
    <div>
      <Header
        title="Find Your Dream Property"
        subtitle="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
        hidden
        buttonOnClick={() => {}}
      />
      <div className="flex flex-col mt-5">
        {/* Search */}
        <div className="bg-bgsecondary h-[70px] w-full rounded-md p-2">
          <div className="w-full rounded-md bg-background shadow-sm shadow-white/10 h-full border-white/20 p-2 flex justify-between items-center">
            <input
              className="bg-transparent text-sm border-none ring-transparent focus:outline-none"
              placeholder="Search for A property"
            />
            <button className="flex h-full text-sm gap-3 bg-primary px-2 hover:bg-bgsecondary py-1 rounded-md items-center">
              <Search className="size-4" /> Find Property
            </button>
          </div>
        </div>

        {/* Search Filter */}
        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Location Starts */}
          <div className="p-2 bg-bgsecondary rounded-md h-[60px] w-full">
            <div className="bg-background w-full h-full rounded-md flex items-center justify-between p-1">
              <LocateIcon className="size-5" />
              <select className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none">
                <option value="">Select Location</option>
                <hr className="stroke-white" />
                <option value="cape-town">Cape Town</option>
                <option value="johannesburg">Johannesburg</option>
                <option value="durban">Durban</option>
              </select>
            </div>
          </div>
          {/* Location Ends */}
          {/* Property Type Starts */}
          <div className="p-2 bg-bgsecondary rounded-md h-[60px] w-full">
            <div className="bg-background w-full h-full rounded-md flex items-center justify-between p-1">
              <Home className="size-5" />
              <select className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none">
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial Property</option>
              </select>
            </div>
          </div>
          {/* Property Type Ends */}
          {/* Price Range Starts */}
          <div className="p-2 bg-bgsecondary rounded-md h-[60px] w-full">
            <div className="bg-background w-full h-full rounded-md flex items-center justify-between p-1">
              <DollarSign className="size-5" />
              <select className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none">
                <option value="">Select Price Range</option>
                <option value="0-500000">R0 - R500,000</option>
                <option value="500000-1000000">R500,000 - R1,000,000</option>
                <option value="1000000-2000000">R1,000,000 - R2,000,000</option>
                <option value="2000000-5000000">R2,000,000 - R5,000,000</option>
                <option value="5000000+">R5,000,000+</option>
              </select>
            </div>
          </div>
          {/* Price Range Ends */}
          {/* Property Size Starts */}
          <div className="p-2 bg-bgsecondary rounded-md h-[60px] w-full">
            <div className="bg-background w-full h-full rounded-md flex items-center justify-between p-1">
              <Scale className="size-5" />
              <select className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none">
                <option value="">Select Property Size</option>
                <option value="0-50">0 - 50 sqm</option>
                <option value="50-100">50 - 100 sqm</option>
                <option value="100-200">100 - 200 sqm</option>
                <option value="200-500">200 - 500 sqm</option>
                <option value="500+">500+ sqm</option>
              </select>
            </div>
          </div>
          {/* Property Size Ends */}
          {/* BUild Year Starts */}
          <div className="p-2 bg-bgsecondary rounded-md h-[60px] w-full">
            <div className="bg-background w-full h-full rounded-md flex items-center justify-between p-1">
              <Calendar className="size-5" />
              <select className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none">
                <option value="">Select Build Year</option>
                <option value="before-1990">Before 1990</option>
                <option value="1990-2000">1990-2000</option>
                <option value="2000-2010">2000-2010</option>
                <option value="2010-2020">2010-2020</option>
                <option value="after-2020">After 2020</option>
              </select>
            </div>
          </div>
          {/* BUild Year Ends */}
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
