import React from "react";

import { SectionDistance } from "../Space";

interface ServicePageCardProps {
  descriptionFirst?: string;
  descriptionSecond?: string;
  imgUrl?: string;
  title?: string;
  titleSecond?: string;
  imgUrlSecond?: string;
}
const defaultDescription: string =
  "We understand that not all leads are created equal. We invest the time and expertise to manually select leads from the most influential sources, primarily on LinkedIn. This hands-on approach allows us to focus on your exact target audience, ensuring that your leads are of the highest quality.";
const defaultDescriptionSecond: string =
  "Our data-driven approach ensures the leads we provide are not just any leads but your future customers. These aren't random contacts; they are the decision-makers who matter most to your business. With these high-quality leads in your arsenal, you're well-equipped to expand your reach, boost your sales, and achieve remarkable gro";
const ServicePageCard: React.FC<ServicePageCardProps> = ({
  descriptionFirst = defaultDescription,
  descriptionSecond = defaultDescriptionSecond,
  imgUrl = "/assets/images/stock_01.jpg",
  title = "Data-Driven Lead Collection for </br> Quality and Effectiveness",
  titleSecond = "Empowering Growth through </br>Targeted Leads",
  imgUrlSecond,
}) => {
  return (
    <section>
      <div className={`inner-container flex flex-row font-sans  w-full `}>
        <div
          className={`left-section flex flex-col justify-between md:w-1/2   pt-[18px] w-full flex-2`}
        >
          <div className=" flex flex-col  justify-center h-full ">
            <>
              <h2 className=" pt-[2px] text-[33px]  font-bold leading-[44px]    text-left">
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </h2>
              {/* <span dangerouslySetInnerHTML={{ __html: item.subTitle }} /> */}
              <p className="text-left tracking-[.1px] text-[15.5px] pt-[18px] leading-[22px] font-normal antialiased pb-8 ">
                <span dangerouslySetInnerHTML={{ __html: descriptionFirst }} />
              </p>
            </>
          </div>
        </div>
        <div
          className={`right-section relative  flex flex-row justify-end w-full flex-1`}
        >
          <div className="left w-[550px]">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
      {/* SECOUND PART ------------ */}
      <SectionDistance distance="h-[95px]" />
      <div className={`inner-container flex flex-row font-sans  w-full `}>
        <div
          className={`right-section relative  flex flex-row justify-start w-full flex-1`}
        >
          <div className="left w-[550px]">
            <img src={imgUrlSecond} alt="" />
          </div>
        </div>

        <div
          className={`left-section flex flex-col justify-between md:w-1/2   pt-[18px] w-full flex-2`}
        >
          <div className=" flex flex-col  justify-center h-full ">
            <>
              <h2 className=" pt-[2px] text-[33px] font-bold leading-[44px] -tracking-[1px] text-left">
                <span dangerouslySetInnerHTML={{ __html: titleSecond }} />
              </h2>

              <p className="text-left tracking-[.1px] text-[15.5px] pt-[18px] leading-[22px] font-normal antialiased pb-8 ">
                <span dangerouslySetInnerHTML={{ __html: descriptionSecond }} />
              </p>
            </>
          </div>
        </div>
      </div>
      <SectionDistance distance="h-[83px]" />
      <div className="w-full text-center">
        <a href="/contact">
          <button className="bg-[#ef4033] font-sans hover:bg-transparent hover:text-[#000] border-transparent hover:border-black border-[1px] px-[50px] py-[10px] rounded-full text-white font-bold text-[18px]">
            Send Your Queries
          </button>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCard;
