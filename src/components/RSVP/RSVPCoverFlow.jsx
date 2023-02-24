import React from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export const CoverFlowRSVP = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '129.4118%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFbbcKemSM&#x2F;view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
            </iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '129.4118%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFbbXyNp3k&#x2F;view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
            </iframe> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '129.4118%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFbbYwimHc&#x2F;view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
            </iframe>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        #app { height: 100% }
        html,
        body {
          position: relative;
          height: 100%;
        }

        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }

        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 300px;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
        }

        .photo-frame {
          background-image: url('https://unsplash.com/photos/_0sEjWfAK3Q/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc3MDAxMjEx&force=true');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding: 20px;
        }
        
        .photo-frame .rsvp-card {
          background-color: white;
          border: 2px solid black;
          border-radius: 20px;
          padding: 20px;
          position: relative;
        }
        
        .photo-frame .rsvp-card:before {
          content: '';
          border: 2px solid black;
          border-radius: 20px;
          position: absolute;
          top: -10px;
          bottom: -10px;
          left: -10px;
          right: -10px;
        }
      `} </style>
    </>
  );
};

export default CoverFlowRSVP;
