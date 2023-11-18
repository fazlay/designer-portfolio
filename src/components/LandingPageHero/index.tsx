import React from "react";

interface HeroSectionProps {
  heroTitle?: string;
  heroSubTitle?: string;
  heroDescription?: string;
  homepage?: boolean;
  heroUrl?: string;
}

const LandingPageHeroSection: React.FC<HeroSectionProps> = ({
  heroTitle,
  heroSubTitle,
  heroDescription,
  heroUrl = "/assets/hero_images/leadgen_landing_hero.png",
}) => {
  return (
    <div className="relative h-[735px] ">
      <div className=" z-10 absolute bg-black  top-0 left-0 h-full w-full opacity-[.8]"></div>
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
      <div className="h-[735px] absolute z-10 w-full">
        <div className="container_margin text-white font-sans h-full w-full flex flex-row items-center justify-between">
          <div className="left h-full flex flex-row items-center pt-[25px]">
            <div className="pl-[2px]">
              {heroSubTitle && (
                <h2 className=" text-left text-[26px] font-semibold tracking-[1px] ">
                  {heroSubTitle}
                </h2>
              )}
              {heroTitle && (
                <h1 className="2xl:text-[52px] -tracking-[.8px]  pt-[5px] leading-[65px]  font-black text-left">
                  <span dangerouslySetInnerHTML={{ __html: heroTitle }} />
                </h1>
              )}

              <div className="border-white border-b-[4px] w-[225px] my-[15px]">
                {" "}
              </div>

              {heroDescription && (
                <p className=" text-left  text-[32px] -tracking-[.5px] -ml-1 font-bold ">
                  <span dangerouslySetInnerHTML={{ __html: heroDescription }} />
                </p>
              )}
              <a href="/contact">
                <button className="h-[47px] w-[175px] mt-[25px] rounded-full border-transparent border-[1px] bg-white hover:bg-transparent hover:text-white hover:border-white text-[#000] font-sans font-bold text-[18px]">
                  Get Start
                </button>
              </a>
            </div>
          </div>
          <div className="right flex flex-row items-center h-full">
            <div className="h-[445px] w-[447px] mt-[42px] mb-[6px] rounded-xl border-[1px] tracking-tight border-[#aaa] bg-black bg-opacity-50 pl-[32px] pr-[26px] -mr-[3px]">
              <a href="/contact">
                <p className="font-semibold text-[35px] pt-[20px] pb-[15px]   text-center tracking-[.5px]">
                  Get In Touch
                </p>
              </a>
              <form
                className="w-full "
                // onSubmit={submitForm}
              >
                <input
                  className="appearance-none block w-full border-[1px] border-black text-gray-700 px-4 h-[44px] text-[#000] rounded-lg leading-tight focus:shadow-lg
                  placeholder:text-[#C1C1C1] placeholder:font-light placeholder:text-[15px]
                  "
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  // onChange={updateData}
                />

                <input
                  className="appearance-none block w-full border-[1px] border-black text-gray-700 my-[24px] px-4 h-[44px] text-[#000]  rounded-lg leading-tight focus:shadow-lg
                  placeholder:text-[#C1C1C1] placeholder:font-light placeholder:text-[15px]
                  "
                  type="email"
                  placeholder="Email"
                  name="business_email"
                  // onChange={updateData}
                />

                <textarea
                  className="appearance-none block w-full border-[1px] border-black text-gray-700 px-4 h-[110px] mb-[25px] rounded-lg leading-tight focus:shadow-lg placeholder:text-[#C1C1C1] placeholder:font-light placeholder:text-[15px] placeholder:pt-[18px]"
                  placeholder="Type your message"
                  name="message"
                  rows={4}
                  // onChange={updateData}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="submit flex justify-center items-center rounded-lg hover:border-white bg-white w-full h-[40px] text-[#000] hover:bg-transparent hover:text-white border-[1px]
               border-transparent cursor-pointer font-semibold text-[16px] first-letter:
               
               "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeroSection;
