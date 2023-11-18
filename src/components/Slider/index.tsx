import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import ReviewSlider from "../HomePage/ReviewSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="relative z-0 flex flex-row justify-between">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log(navigationPrevRef.current)}
        style={{
          // marginLeft: "123px",
          // marginRight: "180px",
          position: "unset",
          // backgroundColor: "#DDDDDD",
        }}
      >
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider />
        </SwiperSlide>
      </Swiper>
      <div
        ref={navigationPrevRef}
        className="flex items-center absolute top-0 bottom-0 left-0 right-auto cursor-pointer"
        onClick={handlePrevSlide}
      >
        <div className="cursor-pointer h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-xl">
          <FontAwesomeIcon icon={faChevronLeft} color="#AFAFAF" />
        </div>
        {/* <p className="text-4xl font-bold">&#x276E;</p> */}
      </div>
      <div
        ref={navigationNextRef}
        className="flex items-center absolute top-0 bottom-0 right-0 cursor-pointer z-10"
        onClick={handleNextSlide}
      >
        <div className="cursor-pointer h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full shadow-xl">
          <FontAwesomeIcon icon={faChevronRight} color="#AFAFAF" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
