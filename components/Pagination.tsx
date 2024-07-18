import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <div>
      <hr className="opacity-50 mt-4" />
      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        {/* pages */}
        <div className="text-white flex gap-2">
          {/* page */}
          <p>01</p>

          <p>of</p>

          {/* of */}
          <p>40</p>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          {/* previous */}
          <button
            onClick={() => {}}
            className="text-white p-2 h-10 w-10 rounded-full bg-bgsecondary"
          >
            <ArrowLeft />
          </button>

          {/* next */}
          <button
            onClick={() => {}}
            className="text-white p-2 h-10 w-10 rounded-full bg-bgsecondary"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
