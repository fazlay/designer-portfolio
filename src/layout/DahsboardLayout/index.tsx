import { josefin_semibold, montserrat } from "@/config/fonts";
import Sidebar from "@/components/sideBar/Sidebar";
import TopBar from "@/topBar";

const DashBoardLayout: React.FC<
  React.PropsWithChildren & { className?: string; topBarTitle?: string }
> = ({ children, className = "", topBarTitle }) => {
  return (
    <div
      className={`${className} ${montserrat.variable}  ${josefin_semibold.variable}`}
    >
      <div className="flex flex-row ">
        <div className="left-0 fixed ">
          <Sidebar />
        </div>
        <div className="w-full ml-[320px] z-10 font-sans">
          <div className="top-0 sticky w-full z-10 ">
            <TopBar title={topBarTitle} />
          </div>
          <div className=" pt-6 mt-[60px] overflow-y-auto h-full ">
            <div className="pt-11 bg-[#F9F9F9] px-11 z-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
