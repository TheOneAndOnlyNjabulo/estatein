"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface HeaderProps {
  title: string;
  subtitle: string;
  buttonTitle?: string;
  buttonOnClick: () => void;
  hidden?: boolean;
}

const Header = ({
  title,
  subtitle,
  buttonTitle,
  buttonOnClick,
  hidden,
}: HeaderProps) => {
  return (
    <div>
      {/* Icon */}
      <div className="relative w-[60px] h-[30px] ">
        <Image src="/icons/stars.png" alt="stars" fill />
      </div>
      {/* TItle s*/}
      <h1 className="text-6xl font-bold text-white mt-4">{title}</h1>
      {/* Subtitle and button */}
      <div className="flex justify-between mt-2">
        <p className="text-white  text-2 max-w-[700px] xl:max-w-[900px] xl:text-xl">
          {subtitle}
        </p>
        <Button
          hidden={hidden}
          title={buttonTitle}
          style={`hidden hover:bg-bgsecondary ${hidden ? "" : "lg:block"}`}
          onClick={buttonOnClick}
        />
      </div>
    </div>
  );
};

export default Header;
