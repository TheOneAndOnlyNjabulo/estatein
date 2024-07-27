import Achievements from "@/components/aboutUsPage/Achievements/Achievements";
import Experience from "@/components/aboutUsPage/experience/Experience";

import Journey from "@/components/aboutUsPage/Journey";
import Team from "@/components/aboutUsPage/Team";
import Values from "@/components/aboutUsPage/Values";
import Ending from "@/components/Homepage/Ending";
import React from "react";

export default async function AboutUsPage() {
  return (
    <div className="flex-grow bg-background text-white">
      <div className="flex flex-col items-center justify-between max-w-[1440px] gap-5 p-4 m-auto">
        <Journey />
        <Values />
        <Achievements />
        <Experience />
        <Team />
      </div>
      <Ending />
    </div>
  );
}
