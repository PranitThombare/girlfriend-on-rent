import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Aboutus from "./Pages/AboutUs";
import Careers from "./Pages/Careers";
import Press from "./Pages/Press";
// import BookingHistory from "./Components/BookingHistory";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        {/* <Route path="/history" element={<BookingHistory />} /> */}
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Careers" element={<Careers />} />
        <Rout path="/Press" element={<Press />} />


        {/* ✅ protected route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
