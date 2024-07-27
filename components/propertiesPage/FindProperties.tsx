"use client";
import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useRouter } from "next/navigation";
import PropertyCard from "../PropertyCard";
import PropertyCarousel from "@/components/PropertyCorusel";

const FindProperties = () => {
  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [buildYear, setBuildYear] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [properties, setProperties] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    handleSearch();
  }, []);

  const updateURLParams = (params: Record<string, string>) => {
    const url = new URL(window.location.href);
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        url.searchParams.set(key, params[key]);
      } else {
        url.searchParams.delete(key);
      }
    });
    window.history.replaceState({}, "", url.toString());
  };

  const handleSearch = async () => {
    try {
      updateURLParams({
        location,
        propertyType,
        priceRange,
        size,
        buildYear,
        search,
      });
      const response = await axios.get("/api/property", {
        params: {
          location,
          propertyType,
          priceRange,
          size,
          buildYear,
          search,
        },
      });
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleReset = () => {
    setLocation("");
    setPropertyType("");
    setPriceRange("");
    setSize("");
    setBuildYear("");
    setSearch("");
    updateURLParams({
      location: "",
      propertyType: "",
      priceRange: "",
      size: "",
      buildYear: "",
      search: "",
    });
    handleSearch();
  };

  return (
    <div className="max-w-[1440px] m-auto p-3 flex flex-col overflow-hidden">
      <Header
        title="Find Your Dream Property"
        subtitle="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
        hidden
        buttonOnClick={handleSearch}
      />
      <div className="flex flex-col mt-5">
        {/* Search */}
        <div className="bg-bgsecondary h-[70px] w-full rounded-md p-2">
          <div className="w-full rounded-md bg-background shadow-sm shadow-white/10 h-full border-white/20 p-2 flex justify-between items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm border-none ring-transparent focus:outline-none"
              placeholder="Search for A property"
            />
            <button
              onClick={handleSearch}
              className="flex h-full text-sm gap-3 bg-primary px-2 hover:bg-bgsecondary py-1 rounded-md items-center"
            >
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
              <select
                className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
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
              <select
                className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
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
              <select
                className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
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
              <select
                className=" p-3 ring-transparent focus:ring-transparent bg-background flex-grow focus:outline-none"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
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
          {/* Reset Button */}
          <div className="w-full flex items-center justify-center">
            <button
              onClick={handleReset}
              className=" bg-red-500 max-w-[200px] h-[40px] text-white px-2 py-1 rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* Search Results */}
        <div className="mt-5">
          {properties.length > 0 ? (
            <div className="  overflow-x-hidden transition flex flex-col">
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="p-2 bg-bgsecondary rounded-md"
                  >
                    <div>
                      <PropertyCard
                        title={property.name}
                        bathroom={property.bathrooms}
                        bedroom={property.bedrooms}
                        description={property.description}
                        id={property.id}
                        image={property.image}
                        price={property.listingPrice}
                        type={property.type}
                        key={property.id}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="w-auto overflow-x-hidden">
                <div className="w-full bg-yellow-400 flex-grow">
                  <PropertyCard properties={properties} />
                </div>
              </div> */}
            </div>
          ) : (
            <p>No properties found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
