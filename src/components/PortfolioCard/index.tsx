import React from "react";

const PortfolioCard = () => {
  return (
    <div className=" z-0 relative group h-[333px] w-[300px] border-[10px]  border-[#F6F8FA]  bg-[#F6F8FA]">
      <div className=" z-10 absolute w-full top-0 left-0 group-hover:visible invisible bg-black pt-[36px] pl-[26px] h-full opacity-80">
        <p className="text-[24px] text-white font-semibold">Project Title</p>
        <p className="text-[18px]  text-white font-light">Category</p>
      </div>
      <img
        src="/assets/images/caseStudy/portfolio.png"
        alt=""
        className="h-full w-full object-cover px-[18px] py-[25px]"
      />
      {/* <div className="z-10 h-[203px] w-[203px]   bg-[url(/assets/images/caseStudy/portfolio.png)] mx-auto "></div> */}
    </div>
  );
};

export default PortfolioCard;
