import { dinNextFont, josefin_semibold, montserrat } from "@/config/fonts";
import Footer from "@/components/Footer";

const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string; hideForm?: boolean }
> = ({ children, className = "", hideForm = false }) => {
  console.log("BaseLayout", hideForm);
  return (
    <>
      <div className="flex flex-col items-center py-[30px]">
        <img
          src="https://static.wixstatic.com/media/31b5a8_8387990482eb4a6295873fb23533246f~mv2.png/v1/fill/w_268,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%202_3x.png"
          alt=""
        />
      </div>
      <div
        className={`${className} ${montserrat.variable}  ${josefin_semibold.variable} ${dinNextFont.variable} `}
      >
        {children}
      </div>
      <div>
        <Footer />
        {/* <div className="pb-[60px] text-center pt-[100px] ">
          <a href="" className="font-bold mx-[20px]">
            PORTFOLIO
          </a>
          <a href="" className="font-bold mx-[20px]">
            CONTACT
          </a>
          <a href="" className="font-bold mx-[20px]">
            BLOG
          </a>
        </div> */}
      </div>
    </>
  );
};

export default BaseLayout;
