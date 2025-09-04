import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar( { user }){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }


    return (
        <>

<div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 shadow-lg relative rounded-b-2xl">
  {/* Centered animated welcome text */}
  <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-serif tracking-wide animate-glow drop-shadow-lg">
    Welcome, {user.name}
  </h2>

  {/* Logout button on the RIGHT */}
  <button
    onClick={handleLogout}
    className="absolute right-4 px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 active:bg-red-700 transition duration-300 ease-in-out"
  >
    Logout
  </button>
</div>

<style>
{`
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #ff6ec7, 0 0 20px #ff6ec7; }
    50% { text-shadow: 0 0 20px #fff, 0 0 30px #ff2e9a, 0 0 40px #ff2e9a; }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
`}
</style>


        </>
    );
}

export default Navbar;
