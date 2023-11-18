import { FooterCopyright } from "./FooterCopyright";

interface FooterProps {
  hideForm?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="text-[#000]  text-center pt-[40px]">
        <div>
          <a href="" className="px-[20px] uppercase font-bold">
            Portfolio
          </a>
          <a href="" className="px-[20px] uppercase font-bold">
            Contact
          </a>
          <a href="" className="px-[20px] uppercase font-bold">
            Blog
          </a>
        </div>
        <FooterCopyright />
      </div>
    </>
  );
};

export default Footer;
