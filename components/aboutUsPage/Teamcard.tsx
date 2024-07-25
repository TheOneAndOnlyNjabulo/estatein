"use client";
import Image from "next/image";
import React from "react";
interface ExperinceProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamCard = ({ name, role, imageUrl }: ExperinceProps) => {
  return (
    <div className="">
      <div className="p-5 flex flex-col gap-4 border border-white/20 rounded-md ">
        <div className="relative rounded-md aspect-video h-[200px] overflow-hidden">
          <Image className="object-contain" src={imageUrl} alt={name} fill />
        </div>
        <div className=" w-full flex flex-col items-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2>{role}</h2>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
