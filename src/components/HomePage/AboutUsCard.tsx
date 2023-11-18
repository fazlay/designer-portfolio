import React from "react";

import { TitleDistance } from "../Space";

const AboutUsCard = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="left w-[545px]">
          <img src="/assets/images/homepage/aboutus_homepage.png" alt="" />
        </div>
        <div className="right flex-1 pl-[70px]">
          <h2 className="text-[#333333] tracking-[.4px] pt-[90px] text-[36px] font-sans font-bold leading-[40px]  text-left pb-[30px]">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  " Turning Prospects into Profits with Admaze's Expertise",
              }}
            />
          </h2>
          <p className="font-sans font-normal text-[16.5px] leading-[24px] text-[#444444] ">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "Admaze is the go-to destination for comprehensive B2B marketing solutions. We offer a wide array of services, including appointment setting, targeted lead generation, and account-based marketing. Our expertise spans across various industries, ensuring that we have the right strategies for your unique needs.</br> </br> Our mission is clear: to help our client’s business succeed in the B2B landscape. We understand the importance of personalized, results-driven marketing. Our dedicated team is here to transform your prospects into lasting, loyal customers. Join us on this journey toward business growth and increased conversions. Let's shape your success story together. ",
              }}
            />
          </p>
          <TitleDistance distance="h-[40px]" />
          <a href="/about-us">
            <div className=" flex items-center justify-center h-[40px] w-[160px] bg-[#ef4033] rounded-full font-sans font-bold text-[17px] text-white border-[1px] border-transparent hover:border-[#466089] hover:bg-transparent hover:text-[#555555]">
              Read More
            </div>
          </a>

          {/* <div className="flex flex-row pt-[30px]">
            <img
              src="/assets/images/homepage/about_us_1.svg"
              alt=""
              className="w-[35px] h-[56px] pt-[5px]"
            />
            <div className="pl-[44px]">
              <p className="text-[21.5px] pb-[10px] font-normal">
                {" "}
                Delivering Proven Results
              </p>
              <p className="text-[16.5px] text-[#444444] font-montserrat-normal">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "Leverage our extensive expertise to achieve tangible </br> outcomes",
                  }}
                />
              </p>
            </div>
          </div>

          <div className="flex flex-row pt-[40px]">
            <img
              src="/assets/images/homepage/about_us_2.svg"
              alt=""
              className="w-[45px] h-[56px] pt-[5px]"
            />
            <div className="pl-[35px]">
              <p className="text-[21.5px] pb-[10px] font-normal">
                {" "}
                Customized Strategies
              </p>
              <p className="text-[16.5px] text-[#444444] font-montserrat-normal">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "Craft tailored solutions to suit your unique business needs.",
                  }}
                />
              </p>
            </div>
          </div>

          <div className="flex flex-row pt-[66px]">
            <img
              src="/assets/images/homepage/about_us_3.svg"
              alt=""
              className="w-[45px] h-[56px]"
            />
            <div className="pl-[35px]">
              <p className="text-[21.5px] pb-[10px] font-normal">
                Professional Team
              </p>
              <p className="text-[16.5px] text-[#444444] font-montserrat-normal">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "Count on our unwavering commitment and expertise to steer your path to success.",
                  }}
                />
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
