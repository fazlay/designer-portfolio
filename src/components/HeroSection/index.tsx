import React from "react";

import { cn } from "@/utils/classNameMerge";

interface HeroSectionProps {
  heroTitle?: String;
  heroSubTitle?: String;
  heroDescription?: String;
  homepage?: boolean;
  heroUrl?: String;
  buttonText?: String;
  heroTitleClass?: String;
  subtitleClass?: String;
  buttonUrl?: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroTitle,
  heroSubTitle,
  heroDescription,
  subtitleClass,
  homepage = false,
  heroUrl = "/assets/hero_images/modern_home_hero.png",
  buttonText = "EXPLORE OUR SERVICES",
  heroTitleClass,
  buttonUrl = "/services",
}) => {
  return (
    <div className="relative h-[735px] ">
      <div className="h-full absolute text-white z-[100] w-full flex flex-col items-center justify-center">
        {/* <div className=" h-[735px] flex flex-col items-center justify-center"> */}
        {heroSubTitle && (
          <h2
            className={cn(
              " text-center  font-sans leading-none  ml-[10px] 2xl:text-[28px] font-semibold ",
              subtitleClass
            )}
          >
            {heroSubTitle}
          </h2>
        )}
        {heroTitle && (
          <h1
            className={cn(
              " 2xl:text-[105px] ml-[15px]  leading-none pt-[15px] -mt-3 pb-[30px] font-sans  font-bold text-center",
              heroTitleClass
            )}
          >
            <span dangerouslySetInnerHTML={{ __html: heroTitle }} />
          </h1>
        )}

        {heroDescription && (
          <p className=" text-center px-4   text-[16px] w-1/2 font-sans font-normal">
            <span dangerouslySetInnerHTML={{ __html: heroDescription }} />
          </p>
        )}
        {homepage ? (
          <a href={buttonUrl}>
            <div
              className={`px-[104px] ml-[20px] 
                mt-[40px]
               py-[15px] border-[1px] font-bold 
            bg-[#ef4033] text-[18px] font-sans border-white rounded-full hover:bg-transparent hover:text-white`}
            >
              {buttonText}
            </div>
          </a>
        ) : (
          ""
        )}
      </div>
      <div className=" z-10 absolute bg-black  top-0 left-0 h-full w-full opacity-[.6]"></div>
      <div
        style={{
          position: "absolute",
          color: "#fff",
          border: "none",
          backgroundImage: `url('${heroUrl}')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          zIndex: 1,
          height: "100%",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
