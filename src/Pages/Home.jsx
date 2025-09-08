// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="text-center mt-12">
//       <h1 className="text-3xl font-bold">Welcome to Girlfriend on Rent 💖</h1>
//       <p className="text-gray-600 mt-2">
//         Find your perfect match and get started today!
//       </p>

//       <div className="mt-6">
//         <Link to="/login">
//           <button className="mr-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//             Login
//           </button>
//         </Link>
//         <Link to="/signup">
//           <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
//             Signup
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// src/pages/Home.js

// src/pages/Home.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

// Custom CSS styles are now embedded directly in the component.
const customStyles = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #FEFDFB;
        color: #1a1a1a;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }

    .saffron-gradient {
        background-image: linear-gradient(to right, #FF9933, #F15A24);
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

    .profile-card-gradient {
        background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
    }

    .ring-saffron {
        --tw-ring-color: #F15A24;
    }
`;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{customStyles}</style>

      {/* =================================================================
          HEADER / NAVIGATION
      ================================================================== */}
      <header className="bg-white/90 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Urban<span className="saffron-text">Sathi</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:saffron-text transition font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:saffron-text transition font-medium">
              How It Works
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:saffron-text font-medium transition">
              Log In
            </Link>
            <Link to="/signup" className="saffron-bg text-white px-6 py-2.5 rounded-full hover:saffron-bg-darker font-semibold transition shadow-md">
              Sign Up
            </Link>
          </div>
          <button id="mobile-menu-button" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden px-6 pb-4 space-y-3 ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <a href="#features" className="block text-gray-600 hover:saffron-text transition">Features</a>
          <a href="#how-it-works" className="block text-gray-600 hover:saffron-text transition">How It Works</a>
          <hr className="my-2" />
          <Link to="/login" className="block text-gray-600 hover:saffron-text font-medium transition">Log In</Link>
          <Link to="/signup" className="block saffron-bg text-white text-center px-5 py-2 rounded-full hover:saffron-bg-darker transition shadow">Sign Up</Link>
        </div>
      </header>

      {/* =================================================================
          MAIN CONTENT
      ================================================================== */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center md:text-left">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Your Perfect Companion Awaits
              </span>
              <h1 className="text-4xl md:text-6xl font-bold !leading-tight mb-4">
                Meaningful Connections for Every Occasion
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Attend weddings, explore new hobbies, or share a coffee. With UrbanSathi, find a trusted friend for any event.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link to="/signup" className="w-full sm:w-auto saffron-bg text-white rounded-lg px-8 py-3.5 hover:saffron-bg-darker font-semibold transition shrink-0 text-center shadow-lg">
                  Create a Free Account
                </Link>
                <a href="#how-it-works" className="w-full sm:w-auto bg-gray-100 text-gray-800 rounded-lg px-8 py-3.5 hover:bg-gray-200 font-semibold transition shrink-0 text-center">
                  Learn More
                </a>
              </div>
            </div>
            {/* Right Column (Image) */}
            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Two friends enjoying a coffee" className="rounded-2xl shadow-2xl"/>
              {/* <img src="https://images.unsplash.com/photo-1599948058230-74a621546737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Two friends enjoying a coffee" className="rounded-2xl shadow-2xl" /> */}
            </div>
          </div>
        </section>

        {/* Why Choose Us? Section */}
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Why Choose UrbanSathi?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">We prioritize your safety, privacy, and satisfaction above all else.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <div className="saffron-bg text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-5 shadow-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5.068l.255.433a1 1 0 001.442.25l.047-.029a7.456 7.456 0 018.172 0l.047.029a1 1 0 001.442-.25l.255-.433A11.954 11.954 0 0110 1.944zM10 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm-2.93-8.854a1 1 0 00-1.414 1.414L7.05 12.02a1 1 0 001.414-1.414l-1.4-1.438zM12.95 10.586a1 1 0 00-1.414-1.414l-1.4 1.438a1 1 0 001.414 1.414l1.4-1.438z" clipRule="evenodd" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
                        <p className="text-gray-600">Every companion undergoes a verification process to ensure a safe and genuine experience.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <div className="saffron-bg text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-5 shadow-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                        <p className="text-gray-600">Our encrypted payment system protects your financial details, with clear, upfront pricing.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <div className="saffron-bg text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-5 shadow-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a1.037 1.037 0 00-.536 1.362l1.032 2.064a.97.97 0 001.272.534l2.25-1.125a1 1 0 011.108.203l3.35 3.35a1 1 0 010 1.414l-2.293 2.293a1 1 0 01-1.414 0l-4.435-4.435a1 1 0 01-.203-1.108l1.125-2.25a.97.97 0 00-.534-1.272L8.36 8.536a1 1 0 01-1.06-.54l-4.435-7.4a1 1 0 01.836-.986H3z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Our dedicated support team is always available to assist you with any questions or concerns.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Started in 3 Easy Steps</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Connecting with a companion has never been simpler.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Step 1 */}
              <div className="p-6">
                <img src="https://placehold.co/400x300/f9d5b5/6d28d9?text=Discover" className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg" alt="Discover profiles" />
                <span className="inline-block saffron-bg text-white rounded-full w-10 h-10 leading-10 font-bold mb-2">1</span>
                <h3 className="text-xl font-semibold mb-2">Search & Discover</h3>
                <p className="text-gray-600">Browse profiles with detailed bios, photos, and interests to find the right person for you.</p>
              </div>
              {/* Step 2 */}
              <div className="p-6">
                <img src="https://placehold.co/400x300/f6a89e/6d28d9?text=Book" className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg" alt="Book securely" />
                <span className="inline-block saffron-bg text-white rounded-full w-10 h-10 leading-10 font-bold mb-2">2</span>
                <h3 className="text-xl font-semibold mb-2">Book Securely</h3>
                <p className="text-gray-600">Select your preferred date and time, and confirm your booking through our secure platform.</p>
              </div>
              {/* Step 3 */}
              <div className="p-6">
                <img src="https://placehold.co/400x300/f47a6e/6d28d9?text=Enjoy" className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg" alt="Enjoy your time" />
                <span className="inline-block saffron-bg text-white rounded-full w-10 h-10 leading-10 font-bold mb-2">3</span>
                <h3 className="text-xl font-semibold mb-2">Enjoy Your Time</h3>
                <p className="text-gray-600">Meet your companion and have a memorable experience. Share feedback to help our community grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Profiles Section */}
        <section id="profiles" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Some of Our Companions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Profile Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" alt="Profile of Anya" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white profile-card-gradient">
                    <h3 className="text-xl font-bold">Anya, 26</h3>
                    <p className="text-sm">Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">"Art gallery enthusiast and your go-to guide for city food tours."</p>
                  <button className="w-full bg-orange-50 text-orange-600 font-semibold py-2.5 rounded-lg hover:bg-orange-100 transition">View Profile</button>
                </div>
              </div>
              {/* Profile Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Profile of Rohan" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white profile-card-gradient">
                          <h3 className="text-xl font-bold">Rohan, 29</h3>
                          <p className="text-sm">Mumbai, Maharashtra</p>
                      </div>
                  </div>
                  <div className="p-6">
                      <p className="text-gray-600 text-sm mb-4">"Live music aficionado and your partner for concerts or comedy shows."</p>
                      <button className="w-full bg-orange-50 text-orange-600 font-semibold py-2.5 rounded-lg hover:bg-orange-100 transition">View Profile</button>
                  </div>
              </div>
              {/* Profile Card 3 */}
               <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative">
                      <img src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" alt="Profile of Meera" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white profile-card-gradient">
                          <h3 className="text-xl font-bold">Meera, 24</h3>
                          <p className="text-sm">Bengaluru, Karnataka</p>
                      </div>
                  </div>
                  <div className="p-6">
                      <p className="text-gray-600 text-sm mb-4">"Bookworm and coffee connoisseur. Let's explore quaint cafes together."</p>
                      <button className="w-full bg-orange-50 text-orange-600 font-semibold py-2.5 rounded-lg hover:bg-orange-100 transition">View Profile</button>
                  </div>
              </div>
              {/* Profile Card 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative">
                      <img src="https://images.unsplash.com/photo-1542327897-4141b355e20a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Profile of Sameer" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white profile-card-gradient">
                          <h3 className="text-xl font-bold">Sameer, 31</h3>
                          <p className="text-sm">Delhi, NCR</p>
                      </div>
                  </div>
                  <div className="p-6">
                      <p className="text-gray-600 text-sm mb-4">"Fitness enthusiast and the perfect companion for a morning run or hike."</p>
                      <button className="w-full bg-orange-50 text-orange-600 font-semibold py-2.5 rounded-lg hover:bg-orange-100 transition">View Profile</button>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================
          FOOTER
      ================================================================== */}
      <Footer />
    </>
  );
}