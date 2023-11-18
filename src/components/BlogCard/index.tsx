import {
  faArrowRight,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BlogCardProps {
  blogdata?: any;
  homePageSlider?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ homePageSlider = false }) => {
  return (
    <div
      className={`border-2 group  ${
        homePageSlider ? "w-full" : " w-[calc(33%-10px)]"
      }  h-[550px] hover:shadow-lg hover:scale-10 transform flex flex-col `}
    >
      <a href="#">
        <img
          className="h-[293px]"
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Hollywood Sign on The Hill"
        />
      </a>

      <div className="py-0 px-8 text-left flex flex-col justify-between text-black ">
        <div className="flex flex-row pt-[38px] pb-6">
          <div className=" flex flex-row items-center ">
            <FontAwesomeIcon icon={faCalendarDays} color="#E72B00" />
            <p className="text-[16.5px] font-sans font-normal text-black pl-2">
              Sept 10, 2023
            </p>
          </div>

          <div className=" flex flex-row pl-[40px] items-center ">
            <FontAwesomeIcon icon={faUser} color="#E72B00" />

            <p className="text-[16.5px] font-sans font-normal text-black pl-2">
              This longer.
            </p>
          </div>
        </div>
        <div>
          <h5 className="mb-5 text-[25px] font-sans font-bold leading-[32px]  h-[82px] ">
            Onsectetur adipiscing elit. Sed mollis quam vitae
          </h5>
        </div>

        <div className="group-hover:cursor-pointer flex flex-row justify-between text-black border-t-[.75px] py-[14px] border-[#E7E7E7] items-center">
          <span className="text-xl font-sans font-normal">Read More</span>
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:animate-bounce"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
