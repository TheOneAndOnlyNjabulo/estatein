import { getAllProperties } from "@/actions/getProperty";
import Ending from "@/components/Homepage/Ending";
import FindProperties from "@/components/propertiesPage/FindProperties";
import Properties from "@/components/propertiesPage/properties";
import React from "react";

const PropertiesPage = async () => {
  const properties = await getAllProperties();
  return (
    <div className="flex-grow bg-background text-white">
      <div className="flex flex-col items-center justify-between max-w-[1440px] gap-5 p-3 m-auto">
        <FindProperties />
        <Properties properties={properties} />
      </div>
      <Ending />
    </div>
  );
};

export default PropertiesPage;
