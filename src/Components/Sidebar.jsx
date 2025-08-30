import React from "react";

function Sidebar(){


    return(
        <div style={{
            width: "200px",
            height: "100vh",
            background: "#f5f5f5",
            padding: "20px",
            position: "fixed",
            top: "0",
            left: "0"
        }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/bookings">My Bookings</a></li>
            <li><a href="/plans">Plans</a></li>
            <li><a href="/support">Support</a></li>
        </ul>
        </div>
    );
}

export default Sidebar;
