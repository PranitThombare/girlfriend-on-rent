import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar( { user }){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }


    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "10px 20px", 
            background: "#6200ea", 
            color: "white" 
            }}>
            <h2>Welcome, { user.name } </h2>
            <button onClick={handleLogout} style={{ padding: "8px 12px", cursor: "pointer" }}>
                Logout
            </button>
        </div>
    );
}

export default Navbar;
