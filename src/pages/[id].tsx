// import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import BaseLayout from "@/layout/BaseLayout";

const PortfolioDetailsPage = () => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <div className="container font-dinNext max-w-[956px] mx-auto pt-10  flex flex-row">
        <div className="w-[609px]  flex-2">
          <img
            src="https://static.wixstatic.com/media/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.png/v1/fill/w_312,h_208,q_90/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.webp"
            alt=""
            className="w-full"
          />
          <img
            src="https://static.wixstatic.com/media/31b5a8_c5813bc3195f4c498de182f879835c25~mv2.png/v1/fill/w_609,h_407,q_90/31b5a8_c5813bc3195f4c498de182f879835c25~mv2.png"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/31b5a8_0d9009e8796447ff814ce6bf6c31510f~mv2.jpg/v1/fill/w_609,h_342,q_90/31b5a8_0d9009e8796447ff814ce6bf6c31510f~mv2.jpg"
            alt=""
          />
        </div>
        <div className="pl-[30px] pt-[10px] flex-1">
          <p className="text-[20px] font-bold tracking-[4px] pb-[26px]">
            {" "}
            Nondito{" "}
          </p>

          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Client Name</p>
            <p className="text-[16px] font-normal">Nondito</p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Client Description</p>
            <p className="text-[16px] font-normal">
              Nondito was an up-and-coming e-commerce project which was later
              scrapped. The project was a collective effort between multiple
              brands who were hoping to come together and offer their products
              through an additional medium.
            </p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Client Industry</p>
            <p className="text-[16px] font-normal">E-Commerce</p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Location</p>
            <p className="text-[16px] font-normal">Dhaka, Bangladesh</p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Project Date</p>
            <p className="text-[16px] font-normal">July 2020</p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Project Deliverables</p>
            <p className="text-[16px] font-normal">
              Logo, Identity and Brand Guidelines
            </p>
          </div>
          <div className="pb-[26px]">
            <p className="text-[16px] font-bold">Art Director & Project Lead</p>
            <p className="text-[16px] font-normal">Syed Ashraf Ali</p>
          </div>

          <div className="flex flex-row ">
            <a href="">
              <div className=" flex  transition-all duration-300  items-center justify-center px-[10px] w-[152px]  h-[43px] border-[1px] border-[#F79420] hover:text-white hover:bg-[#F79420] hover:border-[#000]">
                {" "}
                See Other Projects
              </div>
            </a>
            <a href="">
              <div className="ml-[20px] transition-all duration-300 flex items-center justify-center px-[10px] w-[142px]  h-[43px] border-[1px] border-[#F79420] hover:text-white hover:bg-[#F79420] hover:border-[#000]">
                {" "}
                Reach Out
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioDetailsPage.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default PortfolioDetailsPage;
