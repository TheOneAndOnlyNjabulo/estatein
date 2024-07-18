"use client";
import { HeroCardsData } from "@/constants/constants";
import React from "react";

const HeroCards = () => {
  return (
    <div className="flex gap-2">
      {HeroCardsData.map((card) => (
        <div
          key={card.title}
          className={`flex items-start justify-center flex-col p-3 lg:px-4 xl:px-7 lg:py-4 xl:py-6 border border-white/10 rounded-lg bg-bgsecondary`}
        >
          <div className="text-2xl xl:text-5xl lg:text-3xl font-bold">
            {card.title}
          </div>
          <p className="text-xs lg:text-sm xl:text-lg ">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;
