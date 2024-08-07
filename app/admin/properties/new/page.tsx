import React from "react";
import NewPropertyForm from "./NewPropertyForm";
import prisma from "@/lib/prismadb";
import PropertyForm from "./PropertyForm";

export default async function NewPropertyPage() {
  return (
    <div className="w-full bg-background min-h-[66dvh]">
      <div className="max-w-[1440px] m-auto  px-3 py-4 text-white bg-background">
        {/* <NewPropertyForm /> */}

        <PropertyForm property={null} />
      </div>
    </div>
  );
}
