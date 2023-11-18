import { useRouter } from "next/router";
import React from "react";

const PortfolioDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div className="container max-w-[956px] mx-auto pt-10 overflow-hidden flex flex-row">
        <div className="w-[609px] h-[407px]">
          <p>Image Container</p>
          <img
            src="https://static.wixstatic.com/media/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.png/v1/fill/w_312,h_208,q_90/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <p className="text-[20px] font-normal"> Nondito </p>

          <div>
            <p className="text-[16px] font-bold">Client Name</p>
            <p className="text-[16px] font-normal">Nondito</p>
          </div>

          <div className="pl-[30px]">
            <a href="" className=" w-[132px] h-[43px] border-1 border-black">
              {" "}
              See Other Projects
            </a>
          </div>
        </div>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default PortfolioDetailsPage;
