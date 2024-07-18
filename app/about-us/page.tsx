import Achievements from "@/components/aboutUsPage/Achievements/Achievements";
import Journey from "@/components/aboutUsPage/Journey";
import Values from "@/components/aboutUsPage/Values";
import Ending from "@/components/Homepage/Ending";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex-grow bg-background text-white">
      <div className="flex flex-col items-center justify-between max-w-[1440px] gap-5 m-auto">
        <Journey />
        <Values />
        <Achievements />
      </div>
      <Ending />
    </div>
  );
};

export default AboutUsPage;
