"use client";
import React from "react";
import Header from "../Header";
import HeroCards from "../Homepage/Hero/HeroCards";
import Image from "next/image";

const Journey = () => {
  return (
    <div className="flex w-full flex-col md:flex-row mt-10 pb-10">
      <div className="flex-1 flex flex-col gap-4 p-5">
        <Header
          title="Our Journey"
          subtitle="Our story is one of continuos growth and evaluation. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years. We've expanded our reach, forged valuable partnerships, and gained the trust of countless clients"
          hidden
          buttonOnClick={() => {}}
        />
        <HeroCards />
      </div>
      <div className="flex-1">
        <div className="relative bg-[url(/abstract.png)] e w-full md:h-full flex-grow bg-bgsecondary h-[200px]  rounded-lg border border-white/10">
          <div className="relative aspect-auto h-full max-h-[400px]">
            <Image src="/hand.png" fill alt="hand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
