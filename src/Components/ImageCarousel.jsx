// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// function ImageCarousel({ images }) {
//   return (
//     <Swiper
//       modules={[Navigation]}
//       navigation
//       spaceBetween={10}
//       slidesPerView={1}
//       className="rounded-lg"
//     >
//       {images.map((img, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={`http://localhost:8080/images/${img.imageUrl}`}
//             alt={`Slide ${index}`}
//             className="w-full h-48 object-cover rounded-lg"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default ImageCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const ImageCarousel = ({ images }) => {
  // Fallback in case images are not provided
  if (!images || images.length === 0) {
    return (
      <img
        className="h-full w-full object-cover"
        src="https://placehold.co/400x300/f9d5b5/6d28d9?text=Photo"
        alt="Placeholder"
      />
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
      className="h-full w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={img._id || index}>
          <img
            src={`http://localhost:8080/images/${img.imageUrl}`}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
