import { AdditionalFees } from "@prisma/client";
import React from "react";

interface AddInfoProps {
  info?: AdditionalFees[] | null;
}

const AdditionalnfoTable = ({ info }: AddInfoProps) => {
  return (
    <div>
      <div className=" relative mt-5">
        {!info || info.length === 0 ? (
          <p>No additional fees availale please add new</p>
        ) : (
          <div className="grid gird-cols-1 gap-3 md:grid-cols-2">
            {info.map((info) => (
              <div
                key={info.id}
                className="flex gap-2 flex-col p-3 border border-white/10 shadow-md shadow-primary/15 bg-background rounded-md hover:bg-bgsecondary hover:scale-95 transition"
              >
                <div className="text-2xl font-bold">{info.name}</div>
                <div className="p-2 bg-bgsecondary rounded-lg">
                  {info.message}
                </div>

                <div className="text-primary">R {info.amount}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalnfoTable;
