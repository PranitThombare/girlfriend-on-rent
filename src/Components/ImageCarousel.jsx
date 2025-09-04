import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      className="rounded-lg"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={`http://localhost:8080/images/${img.imageUrl}`}
            alt={`Slide ${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
