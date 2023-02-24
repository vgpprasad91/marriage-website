import React from "react";
import SwiperCore, { Navigation, Pagination, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCube, Navigation, Pagination]);

export const CubeProfile = () => {
  return (
    <div className="swiper-container">
      <Swiper
        pagination={{ clickable: true }}
        effect="cube"
        loop
        centeredSlides
        navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        }}
        >
        <SwiperSlide>
          <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/2f2159d6-7032-49c6-00e5-fa1e7d7a6600/public" alt="guru-profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/7cd59a77-66ee-4d37-9bb4-fdc85cdebf00/public" alt="vaishnavi-profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/2f2159d6-7032-49c6-00e5-fa1e7d7a6600/public" alt="guru-profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/7cd59a77-66ee-4d37-9bb4-fdc85cdebf00/public" alt="vaishnavi-profile" />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      <style jsx>{`
        .swiper-container {
          position: relative;
          width: 600px;
          height: 600px;
          margin: 0 auto;
        }
        @media screen and (max-width: 991px) {
            .swiper-container {
              width: 400px;
              height: 400px;
            }
          }
  
          @media screen and (max-width: 767px) {
            .swiper-container {
              width: 300px;
              height: 300px;
            }
          }  
        .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
        }
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          z-index: 1;
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </div>
  );
};

export default CubeProfile;
