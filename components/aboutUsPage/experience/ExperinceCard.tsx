"use client";
import React from "react";
interface ExperinceProps {
  step: string;
  title: string;
  description: string;
}

const ExperinceCard = ({ step, title, description }: ExperinceProps) => {
  return (
    <div className="">
      <div className="border border-transparent border-l-primary/50 p-3 to-gray-800">
        {step}
      </div>
      <div className="p-5 flex flex-col gap-4 border border-white/20 rounded-b-lg rounded-tr-lg h-[200px]">
        <h1 className="font-semibold ">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExperinceCard;
