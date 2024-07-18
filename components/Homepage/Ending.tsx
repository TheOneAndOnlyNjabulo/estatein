"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";

const Ending = () => {
  return (
    <div className="h-auto">
      <div className="flex justify-between relative lg:h-[200px] sm:h-[280px] h-[350px] border border-white/10 items-center ">
        <div className="hidden md:block h-full w-[500px] absolute flex-1">
          <Image src="/tile2.png" alt="img" fill />
        </div>
        <div className="bg-transparent flex-1 z-10 max-w-[1440px] m-auto h-full  px-3 py-5 text-white flex flex-col gap-3">
          <h2 className="text-4xl font-bold mt-5">
            Start Your Real Estate Journey Today
          </h2>
          <div className="flex flex-col justify-between lg:flex-row gap-3">
            <p className="lg:max-w-[900px]">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
            <Button
              style="bg-primary hover:bg-bgsecondary w-[200px] lg:w-[200px] lg:h-[50px] lg:p-2"
              title="Explore Properties"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="right-0 absolute h-full w-[500px]  flex-1">
          <Image src="/tile1.png" alt="img" fill />
        </div>
      </div>
    </div>
  );
};

export default Ending;
