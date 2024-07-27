import React from "react";
import prismadb from "@/lib/prismadb";
import { Property } from "@prisma/client";
import Button from "@/components/Button";
import PropertiesForms from "./PropertiesForms";

async function getProperties() {
  const properties = await prismadb.property.findMany({
    where: {
      active: true,
    },
  });

  return properties;
}

export default async function Properties() {
  const properties = await getProperties();

  return (
    <div className="bg-background">
      <div className="max-w-[1440px] h-auto p-5 bg-background text-white m-auto flex-grow">
        <PropertiesForms properties={properties} />
      </div>
    </div>
  );
}
