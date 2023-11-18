import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSkype,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faHeadphones,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormDataType from "@/types/common.types";

import styles from "./footer.module.css";
import { FooterCopyright } from "./FooterCopyright";

interface FooterProps {
  hideForm?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideForm }) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    business_email: "",
    phone: "",
    website: "",
    contact_reason: "",
    message: "",
    offer_newsletter: false,
    type: "",
  });

  const updateData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e: any) => {
    e.preventDefault();

    console.log(formData);
    // http
    //   .post(
    //     "/contact-lists",

    //     {
    //       data: {
    //         type: "Footer Contact Option",
    //         name: formData?.name,
    //         business_email: formData?.business_email,
    //         phone: formData?.phone,
    //         website: formData?.website,
    //         message: formData?.message,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.request.status);
    //     console.log(res.data);
    //   });
  };
  return (
    <>
      {!hideForm ? (
        <div className={`footer_image_container w-full  bg-white`}>
          <div className="container_margin h-full">
            <div className="flex flex-row items-center h-full">
              <div className=" w-[675px]">
                <h3 className="text-[40px] leading-[48px] font-sans font-semibold text-white ">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        "Connect with us to get </br> our exclusive services and </br> make your business profitable",
                    }}
                  />
                </h3>
                <p className="font-normal font-sans text-xl tracking-wide py-5">
                  Fill out the form below to get started
                </p>
                <form onSubmit={submitForm}>
                  <div className="flex flex-row flex-wrap gap-x-6 gap-y-7 font-sans">
                    <input
                      className="appearance-none  block w-[calc(50%-13px)] border-[1px] border-black text-[#000] placeholder-[#8E8E8E] placeholder:font-light placeholder:text-lg px-4 py-4  leading-tight focus:shadow-lg rounded-lg"
                      id="grid-first-name"
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={updateData}
                    />
                    <input
                      className="appearance-none block w-[calc(50%-13px)] border-[1px] border-black text-[#000] placeholder-[#8E8E8E] placeholder:font-light placeholder:text-lg py-4 px-4  leading-tight focus:shadow-lg rounded-lg"
                      id="grid-first-name"
                      type="email"
                      placeholder="Business Email"
                      name="business_email"
                      onChange={updateData}
                    />
                    <input
                      className="appearance-none block w-[calc(50%-13px)] border-[1px] border-black text-[#000] placeholder-[#8E8E8E] placeholder:font-light placeholder:text-lg py-4 px-4  leading-tight focus:shadow-lg rounded-lg"
                      id="grid-first-name"
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      onChange={updateData}
                    />
                    <input
                      className="appearance-none block w-[calc(50%-13px)] border-[1px] border-black text-[#000] placeholder-[#8E8E8E] placeholder:font-light placeholder:text-lg py-4 px-4  leading-tight focus:shadow-lg rounded-lg"
                      id="grid-first-name"
                      type="text"
                      placeholder="Website"
                      name="website"
                      onChange={updateData}
                    />
                    <input
                      className="appearance-none block w-full border-[1px] border-black text-[#000] placeholder-[#8E8E8E] placeholder:font-light placeholder:text-lg py-9 px-4 mb-2 leading-tight focus:shadow-lg rounded-lg"
                      id="grid-first-name"
                      type="text"
                      placeholder="Write Your Message"
                      name="message"
                      onChange={updateData}
                    />
                    <button
                      type="submit"
                      className="bg-[#ef4033] hover:bg-[#fff] hover:text-[#ef4033] text-white border-[.5px] border-[#b3b3b3]  uppercase tracking-wide font-semibold text-xl  w-full py-[9px] px-4 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="-mt-1 bg-background-footer text-secondary  2xl:h-full-mt-1">
        <div className="div container_margin">
          <div className=" flex flex-row  py-6 items-center border-b-2  border-slate-400">
            <span className="font-sans font-thin text-lg pr-16 tracking-[4px] text-white">
              {" "}
              FOLLOW US{" "}
            </span>
            <div className="social-icons ">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="social-icon-footer hover:scale-110  hover:bg-white text-[#0077AC]"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-icon-footer hover:scale-110 hover:bg-white text-[#5280EC]"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="social-icon-footer hover:scale-110 hover:bg-white text-[#F12080]"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="social-icon-footer hover:scale-110  hover:bg-white text-[#179FD6]"
              />
              <FontAwesomeIcon
                icon={faPinterest}
                className="social-icon-footer text-[#ef4033] hover:scale-110 hover:bg-white "
              />
            </div>
          </div>
          <div className=" px-2 pt-[47px] font-sans grid grid-cols-14 w-full pb-12 border-b-2   border-slate-400  md:gap-x-[30px]">
            <div className="left-section  col-span-4  w-full">
              <p className=" font-sans font-semibold pb-5 text-xl text-white tracking-wider">
                OUR ADDRESS
              </p>

              <p className="fon-medium   text-white">Canada Office</p>
              <div className="pt-3 flex flex-row gap-x-4">
                <FontAwesomeIcon icon={faLocationDot} fontSize={"18px"} />
                <div>
                  <p className={` font-sans text-white font-normal pt-0 -mt-1`}>
                    22 Alice St. Hamilton
                  </p>
                  <p className={` font-sans font-normal   text-white`}>
                    L8H 4R1, ON, Canada
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className="fon-medium  text-white pt-5">Bangladesh Office</p>
                <div className="pt-4  flex flex-row gap-x-4">
                  <FontAwesomeIcon icon={faLocationDot} fontSize={"18px"} />
                  <div>
                    <p
                      className={` font-sans font-normal pt-0  text-white -mt-1 `}
                    >
                      104, Block D, South Banasree
                    </p>
                    <p className={`font-sans font-normal  text-white `}>
                      Khilgaon, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="third-section col-span-3 ">
              <p className="font-semibold pb-4 text-xl text-white tracking-wider">
                USEFUL LINKS
              </p>

              <ul className="">
                <li className={styles.footer_li}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.footer_li}>
                  <a href="/about-us">About Us</a>
                </li>
                <li className={styles.footer_li}>
                  <a href="/services">Services</a>
                </li>
                <li className={styles.footer_li}>
                  <a href="/testimonial">Testimonial</a>
                </li>
                <li className={styles.footer_li}>
                  <a href="/contact">Contact</a>
                </li>
                <li className={styles.footer_li}>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="second-section col-span-3  w-full font-sans">
              <p className="font-semibold pb-3 text-xl text-white tracking-wider">
                GET IN TOUCH
              </p>
              <div>
                <p className="text-base font-normal text-[#D4D4D4]  pb-0">
                  24/7 Support :
                </p>
              </div>
              <div className="flex flex-row">
                <div className="icon flex text-base justify-start items-center pr-1">
                  <FontAwesomeIcon icon={faHeadphones} color="#ef4033" />
                </div>
                <div className="text pl-2 col-span-7  ">
                  <p className="text-base font-normal text-white">
                    {" "}
                    +88017111 38456
                  </p>
                </div>
              </div>
              <p className="text-base font-normal text-[#D4D4D4]  pt-[10px]">
                Get in touch
              </p>
              <div className="flex flex-row">
                <div className="icon flex text-base justify-start items-center pr-1">
                  <FontAwesomeIcon icon={faEnvelope} color="#ef4033" />
                </div>
                <div className="text pl-2 col-span-7  ">
                  <p className="text-base font-normal text-white">
                    info@admaze.com
                  </p>
                </div>
              </div>

              <p className="text-base font-normal text-[#D4D4D4]  pt-[12px]">
                Connect With Skype
              </p>
              <div className="flex flex-row">
                <div className="icon flex text-base justify-start items-center pr-1">
                  <FontAwesomeIcon icon={faSkype} color="#ef4033" />
                </div>
                <div className="text pl-2 col-span-7  ">
                  <p className="text-base font-normal text-white">admaze</p>
                </div>
              </div>
              <p className="text-base font-normal text-[#D4D4D4]   pt-[12px]">
                Connect With Whatsapp
              </p>
              <div className="flex flex-row">
                <div className="icon flex text-base justify-start items-center pr-1">
                  <FontAwesomeIcon icon={faWhatsapp} color="#ef4033" />
                </div>
                <div className="text pl-2 col-span-7  ">
                  <p className="text-base font-normal text-white">
                    {" "}
                    +88017111 38456
                  </p>
                </div>
              </div>
            </div>

            <div className="last-section col-span-3 ">
              <div className="flex flex-col ">
                <div className=" flex flex-col items-start">
                  <p className="font-semibold pb-2 text-xl text-white tracking-wider">
                    NEWSLETTER
                  </p>
                  <p className={` font-normal  text-base`}>
                    Sign up for the latest deals, product news, and more from
                    golink
                  </p>
                  <div className="pt-[30px]">
                    <div className={styles.webflow_style_input}>
                      <input
                        // className=""
                        type="email"
                        placeholder="Enter your email"
                      ></input>
                      <button type="submit">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterCopyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
