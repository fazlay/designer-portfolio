import { homepageServices } from "@/constants/data.constants";
import { FeaturedServicesType } from "@/constants/homepage.constants";
import { NextPageWithLayout } from "@/pages/_app";

import HeaderText from "../HeaderText/HeaderText";
import BlogCard from "../BlogCard";
import HeroSection from "../HeroSection";
import Slider from "../Slider";
import { SectionDistance, TitleDistance } from "../Space";
import AboutUsCard from "./AboutUsCard";
import ServicesCardContainer from "./ServicesCardContainer";

const HomePage: NextPageWithLayout<any> = (data) => {
  const { heroTitle } = data?.data;
  console.log("data---->", heroTitle);
  return (
    <>
      <div className="max-w-screen-3xl mx-auto">
        <HeroSection
          heroTitle={"ADMAZE MEDIA"}
          heroSubTitle={"B2B Marketing Agency"}
          heroDescription={
            "Revolutionize your Business-to-Business growth with our comprehensive   marketing expertise.</br>  Expect exceptional results. Discover the future of business success."
          }
          heroUrl={"/assets/hero_images/hero_homepage_modern.png"}
          homepage
        />
      </div>

      <div className="container_margin">
        <SectionDistance distance="h-[38px]" />
        <AboutUsCard />
      </div>
      <SectionDistance distance="h-[70px]" />
      <div className="container_margin">
        <div className="flex flex-row gap-x-10">
          {homepageServices.map((service: FeaturedServicesType) => (
            <div
              key={service?.title}
              className="  border-[1px] border-[#666666] w-1/3 h-[265px] px-8 pt-[42px] pb-8 flex flex-col items-center rounded-lg"
            >
              <div className="w-full flex flex-col items-center">
                {/* <svg className="w-[70px] h-[70px]  ">{service?.img}</svg> */}
                <img src={service.img} className="w-[75px] h-[75px]" alt="" />

                <p className=" font-sans font-bold pt-[20px] pb-[10px] text-[21px] text-center ">
                  {service?.title}
                </p>
                <p className=" font-sans font-normal text-[#000]tracking-[.2px] text-[15.5px] text-center   ">
                  <span
                    dangerouslySetInnerHTML={{ __html: service?.subTitle }}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDistance distance="h-[75px]" />
      <ServicesCardContainer />

      <div className=" 2xl:pb-0 ">
        <SectionDistance distance="h-[110px]" />

        <div className=" bg-[#F8F8F8] font-sans">
          <h2 className="pt-[65px] pb-[26px] text-[36px] font-sans font-bold text-center text-[#333333] -tracking-[.3px]">
            Clients Experience
          </h2>
          <p className="text-[16.5px] font-sans font-normal text-center text-black pb-[25px]">
            Clients are sharing experiences after choosing our services
          </p>
          <div className="container_margin bg-[#F8F8F8]">
            <Slider />
          </div>
        </div>
      </div>

      <SectionDistance distance="h-[75px]" />

      <div className="container_margin">
        <HeaderText
          text="Our Blog"
          titleClassName="text-center !text-[35px] "
          className="pb-0"
        />
        <TitleDistance distance="h-[38px]" />

        <div className=" flex flex-row gap-y-10 gap-x-5 flex-wrap">
          {[1, 2, 3].map((singleBlog, index) => (
            <BlogCard blogdata={singleBlog} key={index} />
          ))}
        </div>

        <div className="flex justify-center pt-[20px]">
          <a href="/blog">
            <div className=" flex items-center justify-center bg-[#ef4033] text-[18px] transition ease-in-out delay-150  text-white hover:text-primary font-sans font-bold uppercase  hover:bg-white border -[2px] border-transparent hover:border-black w-[361px] h-[72px] rounded-full mt-6">
              Explore more articles{" "}
            </div>
          </a>
        </div>
        <SectionDistance />
      </div>
    </>
  );
};

export default HomePage;
