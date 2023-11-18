import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import BlogCard from "../BlogCard";

const BlogSlider = () => {
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="">
      <div className="flex justify-end gap-4 mr-8">
        {/* <div className="flex justify-center gap-4 2xl:gap-x-20">
          <div
            ref={navigationPrevRef}
            className="cursor-pointer "
            onClick={handlePrevSlide}
          >
            <p className="text-4xl font-bold">&#x276E;</p>
          </div>
          <div
            ref={navigationNextRef}
            className="cursor-pointer"
            onClick={handleNextSlide}
          >
            <p className="text-4xl font-bold">&#x276F;</p>
          </div>
        </div> */}
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log(navigationPrevRef.current)}
        breakpoints={{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <BlogCard blogdata={""} homePageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard blogdata={""} homePageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard blogdata={""} homePageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard blogdata={""} homePageSlider />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard blogdata={""} homePageSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
