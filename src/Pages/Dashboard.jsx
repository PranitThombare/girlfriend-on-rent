import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import ProfileCards from "../Components/ProfileCards";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [girls, setGirls] = useState([]);


  // fetch girls from backend
  useEffect(() => {
    const fetchGirls = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/girls");
        setGirls(res.data);
      } catch (err) {
        alert("error is : ", err);
      }
    };
    fetchGirls();
  }, []);

  const handleBook = (girl) => {
    alert( `you booked ${girl.name} for Rs.${girl.price} `);
  };

  return (
    <div>
      <Navbar user = { user } />
      {/* <Sidebar /> */}
      <ProfileCards girls = { girls } onBook={handleBook} />
      <Footer />
    </div>
  );
}

export default Dashboard;
