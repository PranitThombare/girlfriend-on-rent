import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false); // true if login successful

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login response:", res.data);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/dashboard");
        }, 500);
      } else {
        navigate("/login");
        alert("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data || "Login Failed!");
    }
  };

  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      {success && (
        <div
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 animate-fadeInOut"
        >
          Account created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
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
          Login
        </button>

        <p className="mt-4">
          Don’t have an account?{" "}
          <Link to="/signup">
            <button
              type="button"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Signup
            </button>
          </Link>
        </p>
      </form>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fadeInOut {
            animation: fadeInOut 1s;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
