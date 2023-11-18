import dynamic from "next/dynamic";
import React from "react";

import "aos/dist/aos.css";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const SliderCard = () => {
  return (
    <section>
      <div className="inner-containe min-h-96 md:flex  pl-6 pr-2 text-black bg-slate-200">
        <div className="left-section flex flex-col justify-between md:w-1/2 pr-4 ">
          <div className="pt-12 pb-6 px-6 md:pt-12">
            <h2 className="text-4xl font-bold font-primary-heading uppercase text-left">
              TREMENDOUS SERVICE
            </h2>
            <p className="text-left py-2 2xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
          <div className=" pb-6 px-6 ">
            <p className="text-left text-lg font-bold ">Lorem ipsum </p>
            <p className="text-left font-regular ">Walmart, Doken Villa </p>
          </div>
        </div>
        <div className="right-section md:w-1/2">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=h9vETeRiulY"
            width="100%"
            height="100%"
          />

          {/* <Image
            src="/assets/images/stock_01.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
