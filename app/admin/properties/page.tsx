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

const page = async ({ property }: { property: Property }) => {
  const properties = await getProperties();

  return (
    <div className="max-w-[1440px] p-5 bg-background text-white">
      <PropertiesForms properties={properties} />
    </div>
  );
};

export default page;