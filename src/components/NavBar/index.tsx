import {
  faAngleDown,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNavigation = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(true);

  return (
    <nav className=" font-sans fixed w-full z-[1000] top-0 left-0 z-1  bg-white  ">
      <div className="container_margin hidden md:block bg-white rounded-[10px]   shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)]">
        <div
          className={`pt-[17px] pb-[13px] flex items-center h-full justify-between`}
        >
          <a href="/" className="flex items-center">
            <img
              src="/assets/images/logos/text_logo.svg"
              className="h-8 mr-3"
              alt="Admaze Logo"
            />
          </a>

          <div className="flex flex-row font-normal items-center  text-[#444444] text-[16px]">
            <a href="/login">
              <div className="px-2  cursor-pointer hover:text-[#ef4033]">
                {" "}
                <FontAwesomeIcon icon={faUser} className="px-2" />
                Login
              </div>
            </a>
            <div className="border-r-2 h-[12px] w-[2px] border-[#444444]"></div>
            <a href="/sign-up">
              <div className="px-2 cursor-pointer hover:text-[#ef4033]">
                {" "}
                <FontAwesomeIcon icon={faRightToBracket} className="pr-2 " />
                Sign up
              </div>
            </a>
          </div>
        </div>
        <div className="h-[69px] rounded-[10px]  bg-[#1E1E1E]  -mb-[35px] flex flex-row justify-between  ">
          <div className="text-white flex flex-row h-full items-center ">
            <div className="flex flex-row  justify-between items-center pl-[10px] h-full">
              <a
                href="/"
                className="cursor-pointer mx-[18px] border-transparent border-b-[4px] h-full hover:border-white  flex items-center text-[18px] font-normal tracking-[.1px]"
              >
                Home
              </a>
              <span className="border-r-[1px] h-[15px] border-[#474747]"></span>
            </div>
            <div className="flex flex-row justify-between items-center h-full">
              <a
                href="/about-us"
                className="cursor-pointer mx-[25px] font-normal border-transparent border-b-[4px] hover:border-white h-full flex items-center text-[18px]"
              >
                About Us
              </a>
              <span className="border-r-[1px] h-[15px] border-[#474747]"></span>
            </div>
            <div
              className="mx-[25px] group/menu border-transparent border-b-[4px] hover:border-white h-full flex items-center relative text-[19px]
            after:block after:content-[' '] after:absolute after:top-10
            after:h-[50px] after:w-[150px]"
            >
              <a href="/services">
                Services
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="pl-3 mt-2"
                  fontSize={"18px"}
                />
              </a>
              <div className="invisible group-hover/menu:visible w-[900px] h-[155px] absolute bg-[#1E1E1E] top-[80px] rounded-lg  flex flex-row items-center  ">
                {/* pt-[15px] pb-[26px] px-[26px] */}
                <a
                  href="/leadgen"
                  className="px-[26px] h-full flex flex-row items-center cursor-pointer group/submenu"
                >
                  <div>
                    <p className="text-[16px] font-semibold">
                      {" "}
                      B2B Lead Generation
                      <span className="group-hover/submenu:border-white border-transparent border-b-[1px] block w-[55%] my-[3px]"></span>
                    </p>
                    <p className="text-[16px] font-normal">
                      Fuel your growth with Targeted Lead Generation Convert
                      prospects into customers.
                    </p>
                  </div>
                </a>
                <div className="border-r-2 h-[100px] w-[2px] border-white"></div>
                <a
                  href="/appoinment-setting"
                  className=" py-[7.5px] px-[26px] h-full flex flex-row items-center cursor-pointer group/submenu  "
                >
                  <div>
                    <p className="text-[16px] font-semibold ">
                      {" "}
                      Appointment Setting
                      <span className="group-hover/submenu:border-white border-transparent border-b-[1px] block w-[55%] my-[3px]"></span>
                    </p>
                    <p className="text-[16px] font-normal leading-[22px]">
                      Revolutionize your sales game with our Appointment Setting
                      service. Learn More…
                    </p>
                  </div>
                </a>
                <div className="border-r-2 h-[100px] w-[2px] border-white"></div>
                <a
                  href="/account-based-marketing"
                  className=" py-[7.5px] px-[26px] h-full flex flex-row items-center cursor-pointer group/submenu"
                >
                  <div>
                    <p className="text-[16px] font-semibold  ">
                      {" "}
                      Account Based Marketing
                      <span className="group-hover/submenu:border-white border-transparent border-b-[1px] block w-[55%] my-[3px]"></span>
                    </p>
                    <p className="text-[16px] font-normal leading-[22px]">
                      Target, engage, and convert with Account Based Marketing -
                      the ROI booster.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <span className="border-r-[1px] h-[15px] border-[#474747]"></span>
            <div className="flex flex-row justify-between items-center h-full">
              <a
                href="/blog"
                className="cursor-pointer mx-[24px] border-transparent border-b-[4px] hover:border-white h-full flex items-center text-[18px]"
              >
                Blog
              </a>
              <span className="border-r-[1px] h-[15px] border-[#474747]"></span>
            </div>
            <div className="flex flex-row justify-between items-center h-full">
              <a
                href="/portfolio"
                className="cursor-pointer mx-[24px] border-transparent border-b-[4px] hover:border-white h-full flex items-center text-[18px]"
              >
                Case Study
              </a>
              <span className="border-r-[1px] h-[15px] border-[#474747]"></span>
            </div>
            <a
              href="/testimonial"
              className="cursor-pointer mx-[24px] border-transparent border-b-[4px] hover:border-white h-full flex items-center text-[18px] "
            >
              Testimonial
            </a>
          </div>

          <a
            href="/contact"
            className="cursor-pointer w-[230px] bg-[#ef4033] h-full font-semibold text-[22px] text-white flex items-center justify-center rounded-r-[10px]"
          >
            Contact Us
          </a>
        </div>
        {/* <div className="max-w-screen-xl  mx-auto p-6">
          <div className="" id="navbar-sticky">
            <ul
              id="navbar"
              className="flex font-semibold text-xl justify-between"
            >
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About Us
                </a>
              </li>
              <li className="group hover:block !px-0 ">
                <a href="/services"> Services</a>

                <div className="absolute hidden  group-hover:block mt-56 drop-shadow-md pt-3 text-[#000]  bg-white pb-2">
                  <a
                    href="/leadgen"
                    className=" block px-4  font-normal text-base mx-4 my-2 rounded-sm hover:bg-gray-200 py-2 pr-4"
                  >
                    Lead Generation
                  </a>

                  <a
                    href="/email-marketing/"
                    className="block py-2 px-4  font-normal  text-base  mx-4 my-2 hover:bg-gray-200"
                  >
                    Email Marketing
                  </a>

                  <a
                    href="/power-point-presentation/"
                    className=" block py-2 px-4  font-normal text-base  mx-4 my-2 hover:bg-gray-200 "
                  >
                    Power Point Presentation
                  </a>
                </div>
              </li>
              <li>
                <a href="/" className="flex items-center ">
                  <img
                    src="/assets/images/logos/icon_logo.svg"
                    className="h-16 pl-8"
                    alt="admazelogo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                >
                  Portfolio
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  href="/testimonial"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="block md:hidden">
        <div className="max-w-screen-xl  mx-auto px-4 bg-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={` ${
              navbarOpen ? "hidden" : ""
            } w-full md:block md:w-auto bg-white`}
          >
            <ul id="navbar" className=" font-semibold text-xl">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/testimonial"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
