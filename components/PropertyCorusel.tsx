"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropertyCard from "./PropertyCard";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PropertyCarousel = ({ properties }: { properties: any }) => {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<any>(null);

  return (
    <div className="mt-2">
      <Swiper
        spaceBetween={10} // Adjust space between slides
        slidesPerView={1} // Adjust number of slides visible at once
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          768: {
            slidesPerView: 2, // 3 slides on medium screens
          },
          1024: {
            slidesPerView: 2, // 4 slides on large screens
          },
          1100: {
            slidesPerView: 3, // 4 slides on large screens
          },
          1400: {
            slidesPerView: 4, // 4 slides on large screens
          },
        }}
        pagination={{ clickable: true }} // Add pagination dots
        // Assign ref to the Swiper instance
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {properties.map((property: any, index: number) => (
          <SwiperSlide key={index}>
            <PropertyCard
              title={property.title}
              image={property.image}
              description={property.description}
              price={property.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className="opacity-50 mt-4" />

      {/* Controls */}
      <div className="w-full flex justify-end mt-2">
        <div className="flex gap-2">
          {/* previous */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-white p-2 h-10 w-10 rounded-full bg-bgsecondary"
          >
            <ArrowLeft />
          </button>

          {/* next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-white p-2 h-10 w-10 rounded-full bg-bgsecondary"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
