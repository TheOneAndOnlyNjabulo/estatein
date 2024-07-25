"use client";
import Header from "@/components/Header";
import React from "react";
import TeamCard from "./Teamcard";
import { Teamm } from "@/constants/constants";

const Team = () => {
  return (
    <div className="flex  w-full flex-col mt-10 pb-10">
      <Header
        title="Meet the Estatein Team"
        subtitle="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        hidden
        buttonOnClick={() => {}}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-3">
        {Teamm.map((item) => (
          <TeamCard
            key={item.name}
            name={item.name}
            role={item.role}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
