import React from "react";

import "aos/dist/aos.css";

interface ReviewSliderProps {
  index?: number;
  image?: boolean;
  title?: string;
  description?: string;
  name?: string;
  designation?: string;
}

const ReviewSlider: React.FC<ReviewSliderProps> = (
  {
    // index = 1,
    // image = false,
    // title = " The Admaze Here To Solve",
    // description = " Lorem ipsum dolor sit amet,the consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit a cing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, </br> </br></br>vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit acing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit a ",
    // name = "Jhon Doe",
    // designation = "CEO, ABC Media",
  }
) => {
  return (
    <div className="w-[82%] mt-[70px] mb-[86px] h-[340px] mx-[80px] border-[1px] border-[#DDDDDD] rounded-xl bg-white flex flex-col  font-montserrat-normal antialiased  justify-center items-center shadow-lg">
      <div className="-mt-[98px] pb-[25px]">
        <div className="h-[135px] w-[135px]  border-[#262626] border-[.5px] rounded-full">
          <img
            src="/assets/images/homepage/reviewwe_image.png"
            alt="quote"
            className="rounded-full h-full  p-[7px] "
          />
        </div>
      </div>
      <div className="">
        <span className="font-bold font-sans text-[18px]"> Paul Simon</span>{" "}
        <span className="pl-2 font-sans  font-bold text-[18px] text-[#AFAFAF]">
          - ADMAZE MEDIA LLC
        </span>
      </div>
      <span className="text-[16px] font-sans font-light text-center pt-[10px] px-8">
        {/* <FontAwesomeIcon
          icon={faQuoteLeft}
          className="pr-1.5 text-2xl mb-2  "
        /> */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nemo
        voluptate cumque Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Obcaecati nemo voluptate cumque Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Obcaecati nemo voluptate cumque
        {/* <FontAwesomeIcon icon={faQuoteRight} className="pl-1.5 text-2xl mb-2" /> */}
      </span>
      <div className="w-[152px] h-[90px] flex pt-[10px] flex-col items-center">
        <img
          src="/assets/images/homepage/trust_logo.svg"
          alt="trust logo"
          object-fit="fill"
        />
      </div>
    </div>
  );
};

export default ReviewSlider;
