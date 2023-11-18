import React from "react";

interface CaseStudyCardProps {
  service?: any;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ service }) => {
  return (
    <div className=" p-[12px] shadow-[0_0_25px_5px_rgba(0,0,0,0.1)] font-sans hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.25)] rounded-lg w-[calc(33%-18px)]">
      {" "}
      <div className=" group w-full relative flex flex-col items-center h-[400px]">
        <img
          src={"/assets/images/caseStudy/bg_case_study.png"}
          alt=""
          className="w-full h-full absolute top-0 left-0 object-cover rounded-lg "
        />
        <div className="h-full w-full absolute rounded-lg  top-0 bg-gradient-to-t from-2% via-transparent from-black opacity-[.50] group-hover:opacity-70 group-hover:bg-black from-1%  "></div>

        <div className="relative p-3 flex flex-col items-center h-full justify-center  group-hover:visible invisible">
          <p className="font-semibold pt-10 pb-7  text-2xl text-white text-center ">
            {service?.title}
          </p>
          <p className="font-normal text-lg text-center text-white w-3/4">
            <span dangerouslySetInnerHTML={{ __html: service?.subTitle }} />
          </p>
          <button className=" bg-white px-6 py-1.5  rounded-full mt-4">
            {" "}
            Learn More
          </button>
        </div>
        <div className="absolute group-hover:invisible top-3/4">
          <p className="font-semibold pt-10 pb-7  text-2xl text-white text-center ">
            {service?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
