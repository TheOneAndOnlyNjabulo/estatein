"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
interface PropertyCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const PropertyCard = ({
  title,
  description,
  price,
  image,
}: PropertyCardProps) => {
  return (
    <div className=" border border-white/20  w-auto rounded-lg p-4">
      {/* Image */}
      <div className="relative  w-full h-[300px]">
        <Image
          objectFit="cover"
          className="rounded-lg"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="text-white mt-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-sm">{description}... ReadMore</p>
      </div>
      <div>
        {/* Icons and Amenities start */}
        <div className="flex gap-2 text-xs  items-center justify-start mt-2">
          {/* Amenity 1 */}
          <div className="p-2 flex gap-2 text-white bg-bgsecondary rounded-lg">
            {/* Image */}
            <div className="relative w-[15px] h-[15px]">
              <Image objectFit="cover" fill src="/icons/bed.png" alt="alt" />
            </div>
            <p>4-Bedroom</p>
          </div>
          {/* Amenity 2 */}
          <div className="p-2 flex gap-2 text-white bg-bgsecondary rounded-lg">
            {/* Image */}
            <div className="relative w-[20px] h-[20px]">
              <Image objectFit="cover" fill src="/icons/bath.png" alt="alt" />
            </div>
            <p>2-Bedroom</p>
          </div>
          {/* Amenity 3 */}
          <div className="p-2 flex gap-1 text-white bg-bgsecondary rounded-lg">
            {/* Image */}
            <div className="relative w-[20px] h-[20px]">
              <Image objectFit="cover" fill src="/icons/villa.png" alt="alt" />
            </div>
            <p>villa</p>
          </div>
          {/* Amenity 2 */}
        </div>
        {/* Icons and Amenities end */}

        {/* price and view poroperties start */}
        <div className="flex justify-between mt-2">
          {/* price */}
          <div className="flex flex-col text-white">
            <p className="text-white/50">Price</p>
            <p className="font-semibold">${price}.00</p>
          </div>

          {/* view more */}
          <div>
            <Button
              title="View Property Details"
              style="bg-primary hover:bg-bgsecondary"
              onClick={() => {}}
            />
          </div>
        </div>
        {/* price and view poroperties end */}
      </div>
    </div>
  );
};

export default PropertyCard;
