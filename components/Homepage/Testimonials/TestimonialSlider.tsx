"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestemonyCard from "./TestemonyCard";

const TestemonialSlider = ({ testemonies }: { testemonies: any }) => {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<any>(null);

  return (
    <div className="mt-2 overflow-hidden w">
      <Swiper
        spaceBetween={10} // Adjust space between slides
        slidesPerView={1} // Adjust number of slides visible at once
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }} // Add pagination dots
        // Assign ref to the Swiper instance
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {testemonies.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <TestemonyCard
              title={item.title}
              name={item.name}
              profile={item.profile}
              description={item.desc}
              location={item.location}
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

export default TestemonialSlider;
