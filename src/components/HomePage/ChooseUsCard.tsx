import Image from "next/image";
import React from "react";

const ChooseUsCard = ({ iconUrl }: any) => {
  return (
    <div>
      <div className="flex relative justify-center items-center w-full">
        <div className="h-16 2xl:h-24">
          <Image
            src={iconUrl}
            alt="why choose us"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="border-b-2 border-slate-600 w-full 2xl:mt-20 mt-16"></div>
      <h4 className="text-left text-md 2xl:text-3xl  font-bold py-4">
        Accuracy
      </h4>
      <p className="font-thin  md:text-xl 2xl:text-base ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iure
        earum omnis deserunt fugit cum rem nostrum? Blanditiis, quam ullam.
      </p>
    </div>
  );
};

export default ChooseUsCard;
