"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  bedroom: number;
  bathroom: number;
  type: string;
}

const PropertyCard = ({
  id,
  title,
  description,
  price,
  image,
  bedroom,
  bathroom,
  type,
}: PropertyCardProps) => {
  const router = useRouter();
  return (
    <div className=" border border-white/20  w-auto rounded-lg p-4">
      {/* Image */}
      <div className="relative  w-full h-[300px]">
        <Image
          onClick={() => router.push(`/properties/${id}`)}
          className="rounded-lg object-cover hover:scale-105 trasition cursor-pointer"
          src={image}
          alt={"image"}
          fill
        />
      </div>
      <div className="text-white mt-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
      <div>
        {/* Icons and Amenities start */}
        <div className="flex gap-2 text-xs  items-center justify-start mt-2">
          {/* Amenity 1 */}
          <div className="p-2 flex gap-2 text-white bg-bgsecondary rounded-lg items-center">
            {/* Image */}
            <div className="relative w-[10px] h-[10px] ">
              <Image objectFit="cover" fill src="/icons/bed.png" alt="alt" />
            </div>
            <p className="text-xs">{bedroom}-Bedroom</p>
          </div>
          {/* Amenity 2 */}
          <div className="p-2 flex gap-2 text-white bg-bgsecondary rounded-lg  items-center">
            {/* Image */}
            <div className="relative w-[10px] h-[10px]">
              <Image objectFit="cover" fill src="/icons/bath.png" alt="alt" />
            </div>
            <p className="text-xs">{bathroom}-Bathroom</p>
          </div>
          {/* Amenity 3 */}
          <div className="p-2  items-center flex gap-1 text-white bg-bgsecondary rounded-lg">
            {/* Image */}
            <div className="relative w-[10px] h-[10px]">
              <Image objectFit="cover" fill src="/icons/villa.png" alt="alt" />
            </div>
            <p>{type}</p>
          </div>
          {/* Amenity 2 */}
        </div>
        {/* Icons and Amenities end */}

        {/* price and view poroperties start */}
        <div className="flex justify-between mt-2">
          {/* price */}
          <div className="flex flex-col text-white">
            <p className="text-white/50">Price</p>
            <p className="font-semibold">R {price}.00</p>
          </div>

          {/* view more */}
          <div>
            <Button
              title="View Property Details"
              style="bg-primary hover:bg-bgsecondary"
              onClick={() => router.push(`/properties/${id}`)}
            />
          </div>
        </div>
        {/* price and view poroperties end */}
      </div>
    </div>
  );
};

export default PropertyCard;
