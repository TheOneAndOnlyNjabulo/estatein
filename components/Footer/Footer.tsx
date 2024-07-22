import { footerLinks } from "@/constants/constants";
import {
  Facebook,
  FacebookIcon,
  Linkedin,
  LucideFacebook,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-[1440px] m-auto">
        {/* Big Footer */}
        <div className="bg-background text-white flex flex-col md:flex-row">
          {/* Logo And CopyRight */}
          <div className="flex  w-auto h-auto flex-col justify-start items-start gap-6 p-5">
            <div className="h-[90px] relative cursor-pointer p-2 w-[180px]">
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="LOGO"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="bg-background flex items-center justify-between border border-white/10 w-[300px] h-[50px] rounded-lg p-2 ">
              <div className="flex gap-2">
                <div className="relative h-6 w-6">
                  <Image src="/icons/message.png" alt="image" fill />
                </div>
                <input
                  className="bg-transparent focus:outline-none border-transparent"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="relative h-6 cursor-pointer w-6">
                <Image src="/icons/fly.png" alt="image" fill />
              </div>
            </div>
          </div>
          {/* Logo And CopyRight Ends */}

          {/* Links MApped */}
          <div className="flex-1 p-4  w-full flex md:justify-start flex-wrap max-md:mt-10 gap-20">
            {footerLinks.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-6 text-base min-w-[170px]"
                >
                  <h3 className="font-bold">{data.title}</h3>

                  {data.links.map((item: any) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-gray-500"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
          {/* Links MApped End */}
        </div>
      </div>
      {/* Small part at the end */}
      <div className="bg-bgsecondary ">
        <div className="max-w-[1440px] m-auto mt-10 px-3 py-4 text-white flex flex-row gap-3 justify-between items-center">
          <div className="flex gap-5 text-xs">
            <p>@2024 Estain.All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
          <p className="text-xs">
            website by njabulomadlala729@gmail.com contact: 078 022 2706
          </p>
          <div className="text-white hidden lg:flex">
            <div className="p-2 rounded-full bg-background">
              <LucideFacebook />
            </div>
            <div className="p-2 rounded-full bg-background">
              <Linkedin />
            </div>
            <div className="p-2 rounded-full bg-background">
              <Twitter />
            </div>
            <div className="p-2 rounded-full bg-background">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
