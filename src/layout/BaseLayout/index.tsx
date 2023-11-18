import { dinNextFont, josefin_semibold, montserrat } from "@/config/fonts";

const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string; hideForm?: boolean }
> = ({ children, className = "", hideForm = false }) => {
  console.log("BaseLayout", hideForm);
  return (
    <div
      className={`${className} ${montserrat.variable}  ${josefin_semibold.variable} ${dinNextFont.variable}`}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
