"use client";
import { HeroCardsData, MidHeroCards } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import Button from "../../Button";
import Link from "next/link";
import HeroCards from "./HeroCards";
import { useRouter } from "next/navigation";
import { Property } from "@prisma/client";
import { motion } from "framer-motion";

const container = (delay: any) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const router = useRouter();
  return (
    <section
      id="hero"
      className="bg-bgsecondary  flex flex-col px-3 md:px-0 gap-3 "
    >
      {/* Hero */}
      <div className="flex flex-wrap h-auto bg-bgsecondary   ">
        {/* First section starts */}
        {/* First containter starts */}
        <div className="md:flex-1 flex p-3 bg-background rounded-lg text-white  justify-center flex-grow ">
          <div className="flex flex-col justify-center gap-5  max-w-[600px] ">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-[35px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-bold"
            >
              <h1>Discover Your Dream</h1>
              <h1>Propert with Estatein</h1>
            </motion.div>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-sm lg:text-lg xl:text-xl"
            >
              Your journey to finding the perfect property begins here. Explore
              our listing to find the home that matches your dreams
            </motion.p>

            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex lg:mt-5  gap-4 "
            >
              <Button
                title="Learn More"
                style="bg-bg-background"
                onClick={() => {}}
              />
              <Button
                title="Browse Properties"
                style="bg-primary"
                onClick={() => router.push("/properties")}
              />
            </motion.div>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
            >
              <HeroCards />
            </motion.div>
          </div>
        </div>
        {/* First containter Ends */}
        {/* first section ends */}

        {/* second section starts */}
        <div className="md:flex-1 rounded-lg md:rounded-none flex-grow">
          <motion.div
            variants={container(2)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="aspect-square relative flex-grow rounded-lg md:rounded-none"
          >
            <Image
              src="/Hero.png"
              sizes=""
              className="object-cover"
              fill
              alt="Container"
            />
          </motion.div>
        </div>
        {/* second section endss */}
      </div>
      {/* Cards */}
      <div className="bg-bgsecondary p-3">
        <div className=" bg-background grid grid-cols-2 md:grid-cols-4 px-2 gap-2 py-2">
          {MidHeroCards.map((item) => (
            <div
              className="flex flex-col bg-bgsecondary hover:scale-95 transition  p-2 rounded-lg"
              key={item.subtitle}
            >
              <div className=" relative w-full flex justify-end">
                <Link href={item.href} className="">
                  <Image
                    className=""
                    src="/icons/goto.png"
                    alt="lo"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
              <div className="flex-grow flex items-center justify-center flex-col gap-3">
                <div className=" relative h-[55px] w-[55px]">
                  <Image src={item.icon} alt="logo" objectFit="contain" fill />
                </div>
                <p className="text-white text-xs lg:text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
