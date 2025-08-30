import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">Welcome to Girlfriend on Rent 💖</h1>
      <p className="text-gray-600 mt-2">
        Find your perfect match and get started today!
      </p>

      <div className="mt-6">
        <Link to="/login">
          <button className="mr-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
