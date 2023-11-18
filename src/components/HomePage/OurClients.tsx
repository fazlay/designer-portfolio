import React from "react";

import HeaderText from "../HeaderText/HeaderText";
import { TitleDistance } from "../Space";

const OurClients = () => {
  return (
    <div className="border-2 2xl:px-16  border-gray-900 border-dashed 2xl:h-96">
      <TitleDistance />
      <HeaderText
        text="Our Clients"
        className="pb-8 !pt-0"
        titleClassName="text-center"
      />
      <div className=" py-8 flex justify-evenly px-4  company_image_container">
        <div className="2xl:h-16 ">
          <img
            className="company_image h-full w-full"
            src="/assets/images/i01_partners_1.png"
            alt="partnered company"
          />
        </div>
        <div className="2xl:h-16 ">
          <img
            className="company_image h-full w-full"
            src="/assets/images/i02_partners_3.png"
            alt="partnered company"
          />
        </div>
        <div className="2xl:h-16 ">
          <img
            className="company_image h-full w-full"
            src="/assets/images/i03_partners_4.png"
            alt="partnered company"
          />
        </div>
        <div className="2xl:h-16 ">
          <img
            className="company_image h-full w-full"
            src="/assets/images/i03_partners_4.png"
            alt="partnered company"
          />
        </div>
        <div className="2xl:h-16 ">
          <img
            className="company_image h-full w-full"
            src="/assets/images/i03_partners_4.png"
            alt="partnered company"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
