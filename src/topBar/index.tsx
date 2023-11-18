import { useRouter } from "next/router";
import React from "react";

interface TopBarProps {
  title?: string;
}

const TopBar: React.FC<TopBarProps> = ({ title = "Dashboard" }) => {
  const router = useRouter();
  return (
    <div className="h-[100px] bg-white flex items-center justify-between rounded-lg">
      <h1 className=" pl-[58px] font-bold text-[40px] "> {title}</h1>
      <div
        className="flex flex-row items-center cursor-pointer justify-center text-white w-[207px]  bg-[#049FF7] h-[36px] text-[16px] font-semibold mr-[50px]"
        onClick={() => {
          router.push("/add-order");
        }}
      >
        CREATE ORDER
      </div>
    </div>
  );
};

export default TopBar;
