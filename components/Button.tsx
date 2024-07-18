import React from "react";
interface ButtonProps {
  title?: string;
  style?: string;
  hidden?: boolean;
  onClick: () => void;
}

const Button = ({ title, style, onClick, hidden }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`lg:px-4 p-2 md:p-3 lg:py-3 border border-white/20 rounded-lg text-white ${
        hidden && "hidden"
      } ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
