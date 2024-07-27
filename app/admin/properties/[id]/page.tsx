import React from "react";
import prismadb from "@/lib/prismadb";
import { Property } from "@prisma/client";
import { getPropertyById } from "@/actions/getPropertyById";
import PropertyForm from "../new/PropertyForm";
import { getInfoById } from "@/actions/getInfo";

interface PropertyProps {
  params: {
    id: string;
  };
}

export default async function SingleProperty({ params }: PropertyProps) {
  const property = await getPropertyById(params.id);

  if (property) {
    const fees = await getInfoById(property?.id);
    return (
      <div className=" text-white bg-bgsecondary">
        <div>
          <PropertyForm property={property} addtionFees={fees} />
        </div>
      </div>
    );
  }

  if (!property)
    return (
      <div className="w-full ">OOPS! Looks like there are no properties</div>
    );

  return (
    <div className=" text-white">
      <div className="bg-blue-400">
        <PropertyForm property={property} />
      </div>
    </div>
  );
}
