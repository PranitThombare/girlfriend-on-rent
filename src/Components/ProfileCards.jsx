import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

function ProfileCards({ girls }) {
  const [selectedGirl, setSelectedGirl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  // Open booking modal
  const handleBookClick = (girl) => {
    setSelectedGirl(girl);

    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setShowModal(true);
  };

  // Confirm booking (POST to backend)
  const handleConfirmBooking = async () => {
    if (!user) {
      alert("No user found in localStorage!");
      return;
    }

    const booking = {
      girlId: selectedGirl.id,
      userId: user.id,
      duration: 1, // fixed 1 hour for now
      totalAmount: selectedGirl.pricePerHour,
    };

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      if (!response.ok) {
        throw new Error("Failed to confirm booking");
      }

      const savedBooking = await response.json();
      console.log("✅ Booking Confirmed:", savedBooking);

    //   alert("Booking confirmed successfully!");

      // Close modal
      setShowModal(false);
      setSelectedGirl(null);
    } catch (error) {
      console.error("❌ Error confirming booking:", error);
      alert("Something went wrong while booking!");
    }
  };

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
            onClick={() => handleBookClick(girl)}
            className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Book Now
          </button>
        </div>
      ))}

      {/* Booking Modal */}
      {showModal && selectedGirl && user && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Confirm Booking
            </h2>

            <p className="text-gray-700">
              <strong>Girl:</strong> {selectedGirl.name}
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> ₹{selectedGirl.pricePerHour}/hr
            </p>

            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-700">
                <strong>User:</strong> {user.name}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {user.email}
              </p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCards;
