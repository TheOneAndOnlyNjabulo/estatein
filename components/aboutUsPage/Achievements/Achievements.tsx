"use client";
import Header from "@/components/Header";
import React from "react";

const Achievements = () => {
  return (
    <div className="mt-10">
      <Header
        title="Our Achievements"
        subtitle="Our story is one of continous growth and evolutionn. We started as a small team with big dreams, determined to create a real estate platform that would transcend the ordinary"
        hidden
        buttonOnClick={() => {}}
      />
      {/* Grid cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-2">
        {/* Grid item 1 starts */}
        <div className="bg-bgsecondary  p-2 rounded-lg">
          <div className="rounded-lg h-[180px] bg-background py-5 p-5 border border-white/10 shadow-md shadow-white/5 flex flex-col gap-5">
            <h2 className="font-semibold text-lg">3+ Years of Excellence</h2>
            <p className="text-sm">
              With over years in the industry. We've amassed a wealth of
              knowledge and experience
            </p>
          </div>
        </div>
        {/* Grid Item 1 ends */}
        {/* Grid item 1 starts */}
        <div className="bg-bgsecondary  p-2 rounded-lg">
          <div className="rounded-lg h-[180px] bg-background py-5 p-5 border border-white/10 shadow-md shadow-white/5 flex flex-col gap-5">
            <h2 className="font-semibold text-lg">Happy Clients</h2>
            <p className="text-sm">
              Our greatest achievements is the satisfaction of our clients.
              Their success stories fuel our passion for what we do
            </p>
          </div>
        </div>
        {/* Grid Item 1 ends */}
        {/* Grid item 1 starts */}
        <div className="bg-bgsecondary  p-2 rounded-lg">
          <div className="rounded-lg h-[180px] bg-background py-5 p-5 border border-white/10 shadow-md shadow-white/5 flex flex-col gap-5">
            <h2 className="font-semibold text-lg">Industry recognition</h2>
            <p className="text-sm">
              We've earned the respect if our peers nd industry leaders, with
              accoladdes nad awards that reflect our commitment to excellence
            </p>
          </div>
        </div>
        {/* Grid Item 1 ends */}
      </div>
    </div>
  );
};

export default Achievements;
