// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/signup",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log(res.data);
//       setSuccess(true);
//       setTimeout(() => {
//         setSuccess(false);
//         navigate("/login");
//       }, 1000);
//     } catch (err) {
//       console.error("Signup error:", err);
//       alert(err.response?.data || "Signup Failed! ");
//     }
//   };

//   return (
//     <div className="text-center mt-12">
//       <h2 className="text-2xl font-semibold mb-6">Signup</h2>

//       {/* Animated success message */}
//       {success && (
//         <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 animate-fadeInOut">
//           Account created successfully!
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
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
//           Signup
//         </button>

//         <p className="mt-4">
//           Already have an account?{" "}
//           <Link to="/login">
//             <button
//               type="button"
//               className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//             >
//               Login
//             </button>
//           </Link>
//         </p>
//       </form>

//       {/* Keep custom animation */}
//       <style>
//         {`
//           @keyframes fadeInOut {
//             0% { opacity: 0; transform: translateY(-10px); }
//             10% { opacity: 1; transform: translateY(0); }
//             90% { opacity: 1; transform: translateY(0); }
//             100% { opacity: 0; transform: translateY(-10px); }
//           }
//           .animate-fadeInOut {
//             animation: fadeInOut 2s;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Custom styles from signup.html, adapted for JSX
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
    .left-panel-gradient {
        background-image: linear-gradient(to top right, #FF9933, #F15A24);
    }
`;

function Signup() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axios.post(
                "http://localhost:8080/api/auth/signup",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );

            console.log(res.data);
            setSuccess(true);
            setTimeout(() => {
                navigate("/login");
            }, 1500); // Slightly longer delay to read the message
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.response?.data?.message || err.response?.data || "Signup Failed!");
        }
    };

    return (
        <div className="bg-gray-50">
            <style>{customStyles}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

            <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-5">

                {/* Left Column: Content & Instructions */}
                <div className="hidden md:flex md:col-span-1 lg:col-span-3 left-panel-gradient text-white p-12 flex-col justify-between">
                    <div>
                        <Link to="/" className="text-3xl font-bold">Urban<span className="bg-white text-orange-600 px-2 rounded-md">Sathi</span></Link>
                        <div className="mt-12">
                            <h2 className="text-4xl font-bold leading-tight">Join a Community of Meaningful Connections.</h2>
                            <p className="mt-4 text-lg text-orange-100">Create your account to start discovering companions for events, hobbies, and every occasion.</p>
                        </div>
                        <ul className="space-y-6 mt-10">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong className="font-semibold">Verified Profiles:</strong> Connect with genuine people in a safe and secure environment.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span><strong className="font-semibold">Flexible Booking:</strong> Find companions for everything from coffee dates to formal events.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 12v.01M12 12v.01M12 16v.01M12 16v.01M12 20v.01M12 20v.01" />
                                </svg>
                                <span><strong className="font-semibold">Secure Payments:</strong> Your financial details are always protected with our encrypted system.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center text-orange-200 text-sm">
                        &copy; 2025 UrbanSathi. All rights reserved.
                    </div>
                </div>

                {/* Right Column: Sign Up Form */}
                <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-md w-full">
                        <div className="bg-white p-10 border border-gray-200 rounded-2xl shadow-xl">
                            <div>
                                <h1 className="text-center text-3xl font-bold md:hidden mb-6">
                                    <Link to="/">Urban<span className="saffron-text">Sathi</span></Link>
                                </h1>
                                <h2 className="text-center text-2xl font-bold text-gray-900">
                                    Create your account
                                </h2>
                            </div>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                {success && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Success!</strong>
                                        <span className="block sm:inline"> Redirecting to login...</span>
                                    </div>
                                )}
                                {error && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Signup Failed: </strong>
                                        <span className="block sm:inline">{error}</span>
                                    </div>
                                )}
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="full-name" className="font-medium text-sm text-gray-700">Full Name</label>
                                        <input id="full-name" name="name" type="text" autoComplete="name" required onChange={handleChange} value={formData.name} className="form-input appearance-none block w-full px-4 py-3 mt-1 border-gray-300 rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-saffron focus:border-saffron sm:text-sm" placeholder="e.g., John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="font-medium text-sm text-gray-700">Email address</label>
                                        <input id="email-address" name="email" type="email" autoComplete="email" required onChange={handleChange} value={formData.email} className="form-input appearance-none block w-full px-4 py-3 mt-1 border-gray-300 rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-saffron focus:border-saffron sm:text-sm" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="font-medium text-sm text-gray-700">Password</label>
                                        <input id="password" name="password" type="password" autoComplete="new-password" required onChange={handleChange} value={formData.password} className="form-input appearance-none block w-full px-4 py-3 mt-1 border-gray-300 rounded-lg shadow-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-saffron focus:border-saffron sm:text-sm" placeholder="Create a password" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white saffron-bg hover:saffron-bg-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron transition transform hover:-translate-y-0.5 hover:shadow-lg">
                                        Create Account
                                    </button>
                                </div>
                            </form>
                            <div className="text-sm text-center mt-6">
                                <p className="text-gray-600">
                                    Already have an account?
                                    <Link to="/login" className="ml-1 font-medium saffron-text hover:text-orange-500">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Signup;
