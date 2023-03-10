import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import home6 from "../assets/home6.png";
import { categories } from "../../data";

const Home = () => {
  return (
    <div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:flex md:justify-center lg:justify-around md:items-center lg:gap-12 hidden md:gap-x-8">
        <img src={home6} alt="" width={400} />
        <div className="">
          <h1 className="text-7xl mb-10 font-Roboto text-[#920701]">
            SUMMER <br /> SALE
          </h1>
          <p className="text-xl font-Inter mb-12">
            DON'T COMPROMISE ON STYLE! GET FLAT 30% <br />
            OFF FOR NEW ARRIVALS.
          </p>
          <Link to="/">
            <button className="p-3 bg-[#920701] text-[#f5f5f5] font-Inter rounded-md hover:bg-transparent hover:border-2 hover:border-[#920701] hover:duration-700 hover:ease-in hover:text-[#920701]">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
      <div className='px-6 my-6'>
        <h1 className="font-Roboto font-bold text-lg md:text-center">
          TRENDING
        </h1>
        <p className="text-[#A93030] font-Inter text-sm md:text-center">
          Top of the Charts
        </p>
        <div className="pt-2 grid gap-y-4 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4 md:space-around">
          {categories.map((item) => (
            <div item={item} key={item.id} className="relative">
              <img src={item.img} alt="" />
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-[#f5f5f5] text-xl font-Roboto mb-4">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home