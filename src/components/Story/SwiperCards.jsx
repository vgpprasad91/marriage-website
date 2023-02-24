import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper";

export const CardsEffect = () => {
  return (
    <>
      <div className="overflow-hidden lg:overflow-visible">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          navigation
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/8f31b8fb-96c1-4ed4-1d99-30ff4d956d00/public" alt="first-meet" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/8f3b7063-ff15-403a-5b38-e47f95aa9400/public" alt="official-confirmation" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/ee8aed30-b7c8-4a2b-9170-0222a2c00f00/public" alt="engagement" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://imagedelivery.net/w3bwa6Kx95L31QaiCVI-wg/cdfc08e4-7a6a-468d-633f-107265f0dc00/public" alt="wedding" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CardsEffect;
