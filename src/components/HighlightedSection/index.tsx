import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { StyledButton } from "@/button/Button";

interface HighlightedSectionProps {
  index?: number;
  readMore?: boolean;
  image?: boolean;
  aboutUs?: boolean;
  button?: boolean;
  description?: string;
  hightedImgUrl?: string;
  sidePadding?: boolean;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const HighlightedSection: React.FC<HighlightedSectionProps> = ({
  index = 1,
  readMore = false,
  image = false,
  aboutUs = false,
  button = false,
  description = "lorem20 sdfsdfsdfsdfsdfsdfdsfdfsdf",
  hightedImgUrl = "/assets/images/stock_01.jpg",
  sidePadding = false,
}) => {
  return (
    <section>
      <div
        className={`inner-container min-h-96 ${
          sidePadding ? `2xl:p-12` : null
        }   block md:flex text-black bg-background-card`}
      >
        <div
          className={`left-section flex flex-col justify-between md:w-1/2 md:pr-4 2xl:px-16 py-[40px] md:order-${
            index % 2 === 0 ? 2 : 1
          }`}
        >
          <div className="pt-12   md:pt-0 ">
            {aboutUs && (
              <div className=" 2xl:text-[24px] pb-1 font-normal text-[#6E6E6E] ">
                About Us
              </div>
            )}

            <h2 className="text-3xl  pb-2 2xl:text-3xl 2xl:leading-tight font-bold  text-left">
              The Admaze Here To Solve Your Business Problems
            </h2>
            {/* <span dangerouslySetInnerHTML={{ __html: item.subTitle }} /> */}
            <p className="text-left 2xl:text-lg font-montserrat-normal antialiased py-2">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
            {readMore ? (
              <div className="my-4 md:pb-6 hover:text-primary cursor-pointer">
                <a href="/about-us">
                  <p className="underline underline-offset-8 font-semibold">
                    {" "}
                    Read More ....
                  </p>
                </a>
              </div>
            ) : (
              ""
            )}
            {button ? (
              <a href="/contact">
                <StyledButton btnClass="mt-16 mb-16">Get In Touch</StyledButton>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`right-section relative md:w-1/2 flex  md:order-${
            index % 2 === 0 ? 1 : 2
          }`}
        >
          {image ? (
            <Image
              // src="/assets/images/stock_01.jpg"
              src={hightedImgUrl}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=h9vETeRiulY"
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
