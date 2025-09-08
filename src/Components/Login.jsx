// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import React from "react";
// import axios from "axios";

// function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const [success, setSuccess] = useState(false); // true if login successful

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Login response:", res.data);
//       if (res.data) {
//         localStorage.setItem("user", JSON.stringify(res.data));
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false);
//           navigate("/dashboard");
//         }, 500);
//       } else {
//         navigate("/login");
//         alert("Invalid credentials. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert(err.response?.data || "Login Failed!");
//     }
//   };

//   return (
//     <div className="text-center mt-12">
//       <h2 className="text-2xl font-semibold mb-6">Login</h2>

//       {success && (
//         <div
//           className="bg-green-500 text-white px-4 py-2 rounded mb-4 animate-fadeInOut"
//         >
//           Account created successfully!
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//         >
//           Login
//         </button>

//         <p className="mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup">
//             <button
//               type="button"
//               className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//             >
//               Signup
//             </button>
//           </Link>
//         </p>
//       </form>

//       {/* Tailwind animation */}
//       <style>
//         {`
//           @keyframes fadeInOut {
//             0% { opacity: 0; transform: translateY(-10px); }
//             10% { opacity: 1; transform: translateY(0); }
//             90% { opacity: 1; transform: translateY(0); }
//             100% { opacity: 0; transform: translateY(-10px); }
//           }
//           .animate-fadeInOut {
//             animation: fadeInOut 1s;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import axios from "axios";

// Custom styles from login.html, adapted for JSX
const customStyles = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #FEFDFB !important;
        color: #1a1a1a;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
    .saffron-text {
        color: #F15A24;
    }
    .saffron-bg {
        background-color: #F15A24;
    }
    .hover\\:saffron-bg-darker:hover {
        background-color: #D84B1B;
    }
    .focus\\:ring-saffron:focus {
        --tw-ring-color: #F15A24;
    }
    .focus\\:border-saffron:focus {
        --tw-border-color: #F15A24;
    }
    .form-input {
        transition: all 0.2s ease-in-out;
    }
`;

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null); // State for login errors

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state on new submission
        try {
            const res = await axios.post(
                "http://localhost:8080/api/auth/login",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data));
                setSuccess(true);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000); // Increased delay to show success message
            } else {
                // This case might not be hit if backend sends proper error codes
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || err.response?.data || "Login Failed!");
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Embed custom styles and Google Fonts link */}
            <style>{customStyles}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

            <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 border border-gray-200 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-center text-3xl font-bold">
                            <Link to="/">Urban<span className="saffron-text">Sathi</span></Link>
                        </h1>
                        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        
                        {/* Success Message */}
                        {success && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Redirecting to your dashboard...</span>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Login Failed: </strong>
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="email-address" className="font-medium text-sm text-gray-700">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input appearance-none block w-full px-4 py-3 mt-1 border-gray-300 rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-saffron focus:border-saffron sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="font-medium text-sm text-gray-700">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-input appearance-none block w-full px-4 py-3 mt-1 border-gray-300 rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-saffron focus:border-saffron sm:text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="text-sm">
                                <a href="#" className="font-medium saffron-text hover:text-orange-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white saffron-bg hover:saffron-bg-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron transition transform hover:-translate-y-0.5 hover:shadow-lg">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-sm text-center">
                        <p className="text-gray-600">
                            Don't have an account?
                            <Link to="/signup" className="ml-1 font-medium saffron-text hover:text-orange-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
