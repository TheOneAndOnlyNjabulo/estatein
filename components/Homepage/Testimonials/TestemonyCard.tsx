"use client";
import Image from "next/image";
import React from "react";
interface TestemonyProps {
  title: string;
  name: string;
  description: string;
  profile: string;
  location: string;
}

const TestemonyCard = ({
  title,
  description,
  name,
  profile,
  location,
}: TestemonyProps) => {
  return (
    <div className="mt-5 border border-white/20 text-white rounded-lg p-3 flex flex-col justify-between gap-2">
      <div className="flex gap-2">
        <div className="relative h-8 w-8 rounded-full border border-white/20">
          <Image
            fill
            objectFit="cover"
            className="rounded-full"
            src="/icons/star.png"
            alt={name}
          />
        </div>

        <div className="relative h-8 w-8 rounded-full border border-white/20">
          <Image
            fill
            objectFit="cover"
            className="rounded-full"
            src="/icons/star.png"
            alt={name}
          />
        </div>
        <div className="relative h-8 w-8 rounded-full border border-white/20">
          <Image
            fill
            objectFit="cover"
            className="rounded-full"
            src="/icons/star.png"
            alt={name}
          />
        </div>
        <div className="relative h-8 w-8 rounded-full border border-white/20">
          <Image
            fill
            objectFit="cover"
            className="rounded-full"
            src="/icons/star.png"
            alt={name}
          />
        </div>
        <div className="relative h-8 w-8 rounded-full border border-white/20">
          <Image
            fill
            objectFit="cover"
            className="rounded-full"
            src="/icons/star.png"
            alt={name}
          />
        </div>
      </div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-row gap-3">
        {/* Profile Image */}
        <div>
          <div className="relative h-10 w-10 rounded-full border border-white/20">
            <Image
              fill
              objectFit="cover"
              className="rounded-full"
              src={profile}
              alt={name}
            />
          </div>
        </div>
        {/* Person Details */}
        <div className="flex flex-col">
          <h3>{name}</h3>
          <p className="text-white/50 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestemonyCard;
