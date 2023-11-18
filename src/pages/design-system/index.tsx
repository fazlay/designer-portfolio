import React, { ReactNode } from "react";

import BaseLayout from "@/layout/BaseLayout";

const DesignSystem = () => {
  return (
    <>
      <div className="mx-[200px] my-[300px] ">
        <h1 className="text-[40px] font-sans font-bold mb-[50px]">
          Design System
        </h1>
        <div className="flex flex-row">
          <div>
            <h1 className="text-[40px] font-sans font-bold">
              h1 Montserrat-bold 40px
            </h1>
            <h1 className="text-[40px] font-sans font-semibold">
              h1 Montserrat-semibold 40px
            </h1>
            <h1 className="text-[40px] font-sans font-medium">
              h1 Montserrat-medium 40px
            </h1>
            <h1 className="text-[40px] font-sans font-normal">
              h1 Montserrat-normal 40px
            </h1>
            <h1 className="text-[40px] font-sans font-light">
              h1 Montserrat-light 40px
            </h1>
            <h1 className="text-[40px] font-sans font-thin">
              h1 Montserrat-thin 40px
            </h1>
          </div>
          <div className="bg-black p-4 ml-4 text-white">
            <h1 className="text-[40px] font-sans font-bold">
              h1 Montserrat-bold 40px
            </h1>
            <h1 className="text-[40px] font-sans font-semibold">
              h1 Montserrat-semibold 40px
            </h1>
            <h1 className="text-[40px] font-sans font-medium">
              h1 Montserrat-medium 40px
            </h1>
            <h1 className="text-[40px] font-sans font-normal">
              h1 Montserrat-normal 40px
            </h1>
            <h1 className="text-[40px] font-sans font-light">
              h1 Montserrat-light 40px
            </h1>
            <h1 className="text-[40px] font-sans font-thin">
              h1 Montserrat-thin 40px
            </h1>
          </div>
        </div>
        <h1 className="text-[40px] font-sans font-bold mb-[50px]">
          Paragraph Text
        </h1>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="text-[18px] font-sans font-normal">
              p Montserrat-normal
              18px-------------------------------------------------------- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
            <p className="text-[18px] font-sans font-light">
              p Montserrat-light 18px
              -------------------------------------------------------- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
            <p className="text-[18px] font-sans font-thin">
              p Montserrat-thin 18px
              --------------------------------------------------------Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
          </div>
          <div className="bg-black p-4 ml-4 text-white w-1/2">
            <p className="text-[18px] font-sans font-normal">
              p Montserrat-normal
              18px-------------------------------------------------------- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
            <p className="text-[18px] font-sans font-light">
              p Montserrat-light
              18px-------------------------------------------------------- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
            <p className="text-[18px] font-sans font-thin">
              p Montserrat-thin
              18px-------------------------------------------------------- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              delectus ea quos sint magni, saepe maxime aliquam commodi illum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

DesignSystem.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default DesignSystem;
