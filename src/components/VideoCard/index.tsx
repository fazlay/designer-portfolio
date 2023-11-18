import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const VideoCard = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=h9vETeRiulY"
          width="100%"
          height="auto"
          light={
            <img
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=366&q=80"
              alt="Thumbnail"
              width={"100%"}
            />
          }
        />
      </div>

      <div className="text-area pt-[8px]">
        <p className=" text-[16.5px]  text-[#4c4c4c] font-light">
          “Lorem ipsum dolor sit amet, consectetur adipiscing. Etiam a nulla ”
        </p>
        <p className="font-normal text-[18px] pt-[12px]">John Doe</p>
        <p className=" text-[18px] font-light -mt-1">Founde, Company</p>
      </div>
    </div>
  );
};

export default VideoCard;
