"use client";
import React from "react";
import Header from "./Header";
import InquiryForm from "./Forms/InquiryForm";
import Ending from "./Homepage/Ending";
interface InquiryProps {
  name: string;
  location: string;
}

const Inquiry = ({ name, location }: InquiryProps) => {
  return (
    <div className="w-full flex flex-col">
      {" "}
      <div className="bg-background p-4 border border-white/15 rounded-md mt-5 flex flex-col  w-full">
        <div className="">
          <Header
            title={`Inquiry about ${name}`}
            subtitle="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
            hidden
            buttonOnClick={() => {}}
          />
        </div>

        <div className="">
          <InquiryForm name={name} location={location} />
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
