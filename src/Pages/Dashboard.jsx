import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import ProfileCards from "../Components/ProfileCards";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import BookingHistory from "../Components/BookingHistory";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [girls, setGirls] = useState([]);
  const [showHistory, setShowHistory] = useState(false);


  // fetch girls from backend
  useEffect(() => {
    const fetchGirls = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/girls");
        setGirls(res.data);
        console.log(res.data);
      } catch (err) {
        alert("error is : ", err);
      }
    };
    fetchGirls();
  }, []);

  // const handleBook = (girl) => {
  //   alert( `you booked ${girl.name} for Rs.${girl.price} `);
  // };

  return (
        <div>
      <Navbar user={user} />

      {/* Toggle Button */}
      <div className="flex justify-end px-6 mt-4">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
        >
          {showHistory ? "Dashboard" : "History"}
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="px-6 mt-6">
        {showHistory ? <BookingHistory /> : <ProfileCards girls={girls} />}
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
