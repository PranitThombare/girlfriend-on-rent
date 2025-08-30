import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(res.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 1000);
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.response?.data || "Signup Failed! ");
    }
  };

  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl font-semibold mb-6">Signup</h2>

      {/* Animated success message */}
      {success && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 animate-fadeInOut">
          Account created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Signup
        </button>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login">
            <button
              type="button"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </Link>
        </p>
      </form>

      {/* Keep custom animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fadeInOut {
            animation: fadeInOut 2s;
          }
        `}
      </style>
    </div>
  );
}

export default Signup;
