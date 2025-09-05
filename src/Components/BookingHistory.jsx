// BookingHistory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      // Fetch booking history for logged-in user
    //   console.log(user)
      axios
        .get(`http://localhost:8080/api/bookings/user/${user.id}`)
        .then((res) => {
          setBookings(res.data);
        //   console.log(res.data);
        })
        .catch((err) => {
          console.error("Error fetching booking history:", err);
        });
    }
  }, [user]);

  if (!user) {
    return <p className="text-center mt-6 text-red-500">Please log in first.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Booking History</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold">{booking.girl.name}</h3>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistory;
