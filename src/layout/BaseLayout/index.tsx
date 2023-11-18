import { josefin_semibold, montserrat } from "@/config/fonts";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/NavBar";

const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string; hideForm?: boolean }
> = ({ children, className = "", hideForm = false }) => {
  console.log("BaseLayout", hideForm);
  return (
    <div
      className={`${className} ${montserrat.variable}  ${josefin_semibold.variable}`}
    >
      <TopNavigation />
      <div className="mt-[96px]"></div>
      {children}
      <Footer hideForm={hideForm} />
    </div>
  );
};

export default BaseLayout;
