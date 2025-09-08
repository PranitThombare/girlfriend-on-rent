// // BookingHistory.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function BookingHistory() {
//   const [bookings, setBookings] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     if (user) {
//       // Fetch booking history for logged-in user
//     //   console.log(user)
//       axios
//         .get(`http://localhost:8080/api/bookings/user/${user.id}`)
//         .then((res) => {
//           setBookings(res.data);
//         //   console.log(res.data);
//         })
//         .catch((err) => {
//           console.error("Error fetching booking history:", err);
//         });
//     }
//   }, [user]);

//   if (!user) {
//     return <p className="text-center mt-6 text-red-500">Please log in first.</p>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-purple-700 mb-6">Booking History</h2>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">No bookings found.</p>
//       ) : (
//         <div className="space-y-4">
//           {bookings.map((booking) => (
//             <div
//               key={booking.id}
//               className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
//             >
//               <h3 className="text-lg font-semibold">{booking.girl.name}</h3>
//               <p className="text-gray-600">
//                 <strong>City:</strong> {booking.girl.city}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Price:</strong> ₹{booking.totalAmount}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Booked At:</strong>{" "}
//                 {new Date(booking.bookingTime).toLocaleString()}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Duration:</strong> {booking.duration} hr
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookingHistory;

import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingHistory = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      axios
        .get(`http://localhost:8080/api/bookings/user/${user.id}`)
        .then((res) => {
          console.log("Booking API response:", res.data);
          setBookings(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching booking history:", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (isLoading) {
    return <p className="text-gray-600">Loading booking history...</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Your Booking History</h3>
      {bookings.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">You have no past bookings.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {/* 🔹 Since your API doesn’t provide girl.images, we use placeholder */}
              <img
                src={
                  booking.girl.imageUrl
                    ? `http://localhost:8080/images/${booking.girl.imageUrl}`
                    : "https://placehold.co/150x150/f9d5b5/6d28d9?text=Photo"
                }
                alt={booking.girl.name}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-lg font-semibold">{booking.girl.name}</h4>
                <p className="text-gray-600">
                  <strong>City:</strong> {booking.girl.city}
                </p>
                <p className="text-gray-600">
                  <strong>Price:</strong> ₹{booking.totalAmount}
                </p>
                <p className="text-gray-600">
                  <strong>Booked At:</strong>{" "}
                  {new Date(booking.bookingTime).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> {booking.duration} hr
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
