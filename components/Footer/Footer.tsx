import {
  Facebook,
  FacebookIcon,
  Linkedin,
  LucideFacebook,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-background">
      {/* Big Footer */}
      <div className="bg-background text-white"></div>
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
    </div>
  );
};

export default Footer;
