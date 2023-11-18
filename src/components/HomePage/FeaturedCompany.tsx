import React from "react";

import HeaderText from "../HeaderText/HeaderText";
import { SectionDistance, TitleDistance } from "../Space";

const FeaturedCompany = () => {
  return (
    <div className=" bg-white">
      <SectionDistance />
      <HeaderText text="Featured" className="" titleClassName="text-center" />
      <TitleDistance />
      <div className=" flex md:flex-row md:items-center md:justify-center bg-background-primary py-8  px-4 2xl:h-60 2xl:px-52">
        <div
          className=" flex md:flex-row flex-col md:justify-evenly gap-8  2xl:gap-32 items-center company_image_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="2xl:h-20 ">
            <img
              className="company_image h-full w-full"
              src="/assets/images/i01_partners_1.png"
              alt="partnered company"
            />
          </div>
          <div className="2xl:h-20 ">
            <img
              className="company_image h-full w-full"
              src="/assets/images/i02_partners_3.png"
              alt="partnered company"
            />
          </div>
          <div className="2xl:h-20 ">
            <img
              className="company_image h-full w-full"
              src="/assets/images/i03_partners_4.png"
              alt="partnered company"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompany;
