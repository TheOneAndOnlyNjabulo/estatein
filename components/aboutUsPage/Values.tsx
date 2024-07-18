"use client";
import React from "react";
import Header from "../Header";

const Values = () => {
  return (
    <div className="w-full pb-5  flex flex-col md:flex-row">
      <div className="md:w-[40%]">
        <Header
          title="Our Values"
          subtitle="Our story is one of continuous growth and evaluation. We started as a small team with big dreams, determined to create a real estate platform that transended the ordinery"
          hidden
          buttonOnClick={() => {}}
        />
      </div>
      <div className="md:w-[60%] h-auto flex-grow w-full mt-3 md:mt-0">
        <div className="h-auto w-auto bg-bgsecondary rounded-md p-2">
          <div className="h-auto rounded-md bg-background border border-white/10 shadow-md shadow-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 p-3">
              {/* Grid Item  1 */}
              <div className="flex flex-col border border-transparent p-3 py-5 border-b-white/10 ">
                {/* The inner div */}
                <div className="md:border border-transparent  border-r-white/10">
                  {/* inner inner div */}
                  <div className="pr-4">
                    <div className="flex flex-row items-center gap-3">
                      {/* Image Here */}
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <h2 className="font-semibold text-xl">Trust</h2>
                    </div>
                    <p className="text-sm mt-2">
                      Trust is the cornerstone of every succesfull real estate
                      transaction
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid Item 2 ends */}
              {/* Grid Item  1 */}
              <div className="flex flex-col border border-transparent p-3 border-b-white/10 ">
                {/* The inner div */}
                <div className="border border-transparent">
                  {/* inner inner div */}
                  <div className="pr-4">
                    <div className="flex flex-row items-center gap-3">
                      {/* Image Here */}
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <h2 className="font-semibold text-xl">Excellence</h2>
                    </div>
                    <p className="text-sm mt-2">
                      We set the bar hight for ourselves. From the properties
                      that we list to the service we provide
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid Item 2 ends */}
              {/* Grid Item  3 */}
              <div className="flex flex-col border border-transparent p-3 border-b-white/10 md:border-b-0 ">
                {/* The inner div */}
                <div className="md:border border-transparent  md:border-r-white/10">
                  {/* inner inner div */}
                  <div className="pr-4">
                    <div className="flex flex-row items-center gap-3">
                      {/* Image Here */}
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <h2 className="font-semibold text-xl">Trust</h2>
                    </div>
                    <p className="text-sm mt-2">
                      Trust is the cornerstone of every succesfull real estate
                      transaction
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid Item 3 ends */}
              {/* Grid Item  4 */}
              <div className="flex flex-col border border-transparent p-3 border-b-white/10 md:border-b-0 ">
                {/* The inner div */}
                <div className="border border-transparent">
                  {/* inner inner div */}
                  <div className="pr-4">
                    <div className="flex flex-row items-center gap-3">
                      {/* Image Here */}
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <h2 className="font-semibold text-xl">Excellence</h2>
                    </div>
                    <p className="text-sm mt-2">
                      We set the bar hight for ourselves. From the properties
                      that we list to the service we provide
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid Item 4 ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
