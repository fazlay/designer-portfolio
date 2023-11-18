import React from "react";

import { ourServicesArray } from "@/constants/data.constants";

interface ServicesCardContainerProps {
  title?: string;
  subTitle?: string;
}

const ServicesCardContainer: React.FC<ServicesCardContainerProps> = ({
  title = "Our Services",
  subTitle = "Discover a world of possibilities with our services. We tailor solutions to drive your success, </br>ensuring growth, engagement, and market domination. Explore our services now",
}) => {
  return (
    <div className="h-[605px] mb-[100px] flex flex-col items-center bg-[url('/assets/images/homepage/services_homepage.png')]">
      <h2 className="text-white text-[35px] pt-[45px] font-sans font-bold ">
        {title}
      </h2>
      <p className="text-white font-sans font-normal text-[15.5px] pt-[18px] text-center">
        <span
          dangerouslySetInnerHTML={{
            __html: subTitle,
          }}
        />
      </p>
      <div className="border-t-[1px] border-white w-[140px] mt-[28px] mb-[45px]"></div>

      <div className="flex flex-row gap-x-[30px]">
        {ourServicesArray.map((item) => (
          <>
            <div className="h-[500px] shadow-lg w-[375px] group bg-white hover:bg-[#ef4033] text-white flex flex-col items-center justify-between px-[40px] pt-[70px] pb-[65px] rounded-lg">
              <div className="flex flex-col items-center">
                <svg className="w-[73px] h-[73px] text-center group-hover:fill-white fill-black ">
                  {item?.iconUrl}
                </svg>

                <p className="font-sans font-semibold text-[21.5px] pt-[18px] pb-[12px] group-hover:text-white text-[#000] ">
                  {item?.title}
                </p>
                <p className=" font-sans leading-[24px]  font-normal text-[16.5px] text-center group-hover:text-white text-[#000]">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  />
                </p>
              </div>

              <a href="/services">
                <div className=" flex items-center justify-center h-[47px] w-[205px] rounded-full bg-[#ef4033] group-hover:bg-white group-hover:text-[#000] font-sans font-semibold text-[18px]">
                  Explore Services
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ServicesCardContainer;
