import React from "react";
import ImageCarousel from "./ImageCarousel";

function ProfileCards({ girls, onBook }) {
  return (
    <div className="flex flex-wrap gap-6 ml-56 mt-6">
      {girls.map((girl) => (
        <div
          key={girl.id}
          className="bg-white shadow-lg rounded-xl p-4 w-64 text-center hover:shadow-2xl transition"
        >
          <ImageCarousel images={girl.images} />

          <h4 className="text-lg font-semibold">
            {girl.name}, {girl.age}
          </h4>
          <p className="text-gray-500">{girl.city}</p>
          <p className="italic text-gray-600">{girl.description}</p>
          <p className="text-purple-600 font-bold text-lg mt-2">
            ₹{girl.pricePerHour}
          </p>
          <button
            onClick={() => onBook(girl)}
            className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfileCards;
