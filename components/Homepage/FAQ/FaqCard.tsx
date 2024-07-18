import Button from "@/components/Button";
import React from "react";
interface FAQProps {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: FAQProps) => {
  return (
    <div className=" border border-white/20 text-white rounded-lg p-3 flex flex-col justify-between gap-4">
      {" "}
      <div className="mt-5 ">
        <h2 className="font-bold text-lg">{question}</h2>
        <p className="text-sm mt-2">{answer}</p>
      </div>
      <Button
        title="Read More"
        style="text-sm max-w-[100px] xl:max-w-[150px] hover:bg-primary bg-bgsecondary"
        onClick={() => {}}
      />
    </div>
  );
};

export default FaqCard;
