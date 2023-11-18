import React from "react";

interface BannerHeroProps {
  heroTitle: string;
  heroDescription: string;
  heroUrl: string;
}

const BannerHero: React.FC<BannerHeroProps> = ({
  heroTitle,
  heroDescription,
  heroUrl = "/assets/hero_images/modern_home_hero.png",
}) => {
  return (
    <div className="relative -z-10  h-[351px] ">
      <div className=" z-10 absolute bg-black  top-0 left-0 h-full w-full opacity-[.6]"></div>
      <div
        className=" h-[351px] font-sans flex flex-col items-center justify-center "
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
      <div className=" h-[351px] absolute text-white z-10 w-full  font-sans flex flex-col items-center justify-center ">
        {heroTitle && (
          <h1 className=" text-[60px] font-semibold text-center">
            {heroTitle}
          </h1>
        )}

        {heroDescription && (
          <p className=" text-center px-4 pt-[15px] text-[18px] w-1/2 font-normal">
            <span dangerouslySetInnerHTML={{ __html: heroDescription }} />
          </p>
        )}
      </div>
    </div>
  );
};

export default BannerHero;
