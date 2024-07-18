import React from "react";
interface ButtonProps {
  title: string;
  style?: string;
  smallHidden?: string;
  onClick: () => void;
}

const Button = ({ title, style }: ButtonProps) => {
  return (
    <button
      className={`lg:px-4 p-2 md:p-3 lg:py-3 border border-white/20 rounded-lg text-white ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
