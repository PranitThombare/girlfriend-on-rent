// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../Components/Navbar";
// import ProfileCards from "../Components/ProfileCards";
// import Footer from "../Components/Footer";
// import Sidebar from "../Components/Sidebar";
// import BookingHistory from "../Components/BookingHistory";

// function Dashboard() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [girls, setGirls] = useState([]);
//   const [showHistory, setShowHistory] = useState(false);


//   // fetch girls from backend
//   useEffect(() => {
//     const fetchGirls = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/girls");
//         setGirls(res.data);
//         console.log(res.data);
//       } catch (err) {
//         alert("error is : ", err);
//       }
//     };
//     fetchGirls();
//   }, []);

//   // const handleBook = (girl) => {
//   //   alert( `you booked ${girl.name} for Rs.${girl.price} `);
//   // };

//   return (
//         <div>
//       <Navbar user={user} />

//       {/* Toggle Button */}
//       <div className="flex justify-end px-6 mt-4">
//         <button
//           onClick={() => setShowHistory(!showHistory)}
//           className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
//         >
//           {showHistory ? "Dashboard" : "History"}
//         </button>
//       </div>

//       {/* Conditional Rendering */}
//       <div className="px-6 mt-6">
//         {showHistory ? <BookingHistory /> : <ProfileCards girls={girls} />}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Import Swiper components for the image carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ImageCarousel from "../Components/ImageCarousel";
import BookingHistory from "../Components/BookingHistory"

// Custom styles consistent with the rest of the application
const customStyles = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f9fafb;
        color: #1a1a1a;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
    .saffron-text { color: #F15A24; }
    .saffron-bg { background-color: #F15A24; }
    .hover\\:saffron-bg-darker:hover { background-color: #D84B1B; }
    .sidebar-link-active { background-color: #f15a24; color: white; }
    .sidebar-link { transition: background-color 0.2s ease-in-out; }

    /* Styles for Swiper Navigation Arrows */
    .swiper-button-next, .swiper-button-prev {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
    .swiper-button-next:after, .swiper-button-prev:after {
        font-size: 14px;
        font-weight: bold;
    }
`;






// Placeholder Component for Messages
const Messages = () => (
     <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Messages</h3>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">You have no messages.</p>
        </div>
    </div>
);


function Dashboard() {
    const [user, setUser] = useState(null);
    const [companions, setCompanions] = useState([]);
    const [activeView, setActiveView] = useState('dashboard'); // 'dashboard', 'bookings', 'messages'
    const [showModal, setShowModal] = useState(false);
    const [selectedCompanion, setSelectedCompanion] = useState(null);
    const [bookingStatus, setBookingStatus] = useState({ state: 'idle', message: '' }); // idle, success, error
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.name) {
            setUser(storedUser);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchCompanions = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/girls");
                setCompanions(res.data);
            } catch (err) {
                console.error("Error fetching companions:", err);
            }
        };
        if (user) {
            fetchCompanions();
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };
    
    // Open booking modal
    const handleBookClick = (companion) => {
        setSelectedCompanion(companion);
        setShowModal(true);
        setBookingStatus({ state: 'idle', message: '' }); // Reset status on new modal open
    };

    // Confirm booking (POST to backend)
    const handleConfirmBooking = async () => {
        if (!user || !selectedCompanion) {
            setBookingStatus({ state: 'error', message: 'User or companion data is missing.' });
            return;
        }

        const booking = {
            girlId: selectedCompanion._id || selectedCompanion.id,
            userId: user._id || user.id,
            duration: 1, 
            totalAmount: selectedCompanion.pricePerHour || 999, // Use actual price or a default
        };

        try {
            const response = await axios.post("http://localhost:8080/api/bookings", booking);
            console.log("✅ Booking Confirmed:", response.data);
            setBookingStatus({ state: 'success', message: 'Booking confirmed successfully!' });
            
            // Close modal after a short delay
            setTimeout(() => {
                setShowModal(false);
                setSelectedCompanion(null);
            }, 2000);

        } catch (error) {
            console.error("❌ Error confirming booking:", error);
            const errorMessage = error.response?.data?.message || "Something went wrong while booking!";
            setBookingStatus({ state: 'error', message: errorMessage });
        }
    };


    if (!user) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    const renderContent = () => {
        switch (activeView) {
            case 'dashboard':
                return (
                     <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Discover Companions</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {companions.length > 0 ? companions.map((companion) => (
                                <div key={companion._id || companion.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                    {/* Replaced static image with the ImageCarousel component */}
                                    <ImageCarousel images={companion.images} />
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h4 className="text-lg font-bold">{companion.name}, {companion.age}</h4>
                                        <p className="text-sm text-gray-500">{companion.location || companion.city}</p>
                                        <p className="text-purple-600 font-bold text-lg mt-1">₹{companion.pricePerHour || 999}/hr</p>
                                        <p className="text-gray-700 text-sm my-2 h-10 truncate">{companion.bio || companion.description}</p>
                                        <button onClick={() => handleBookClick(companion)} className="mt-auto w-full saffron-bg text-white font-semibold py-2 rounded-lg hover:saffron-bg-darker transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            )) : <p>No companions available at the moment.</p>}
                        </div>
                    </div>
                );
            case 'bookings':
                return <BookingHistory  user={user} />;
            case 'messages':
                return <Messages />;
            default:
                return null;
        }
    };

    return (
        <>
            <style>{customStyles}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg">
                    <div className="flex items-center justify-center h-20 border-b">
                        <Link to="/" className="text-3xl font-bold">Urban<span className="saffron-text">Sathi</span></Link>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        <button onClick={() => setActiveView('dashboard')} className={`flex items-center w-full text-left px-4 py-2.5 font-semibold rounded-lg sidebar-link ${activeView === 'dashboard' ? 'sidebar-link-active' : 'text-gray-600 hover:bg-gray-200'}`}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            Dashboard
                        </button>
                         <button onClick={() => setActiveView('bookings')} className={`flex items-center w-full text-left px-4 py-2.5 font-medium rounded-lg sidebar-link ${activeView === 'bookings' ? 'sidebar-link-active' : 'text-gray-600 hover:bg-gray-200'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            My Bookings
                        </button>
                        <button onClick={() => setActiveView('messages')} className={`flex items-center w-full text-left px-4 py-2.5 font-medium rounded-lg sidebar-link ${activeView === 'messages' ? 'sidebar-link-active' : 'text-gray-600 hover:bg-gray-200'}`}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            Messages
                        </button>
                    </nav>
                    <div className="px-4 py-4 border-t">
                        <button onClick={handleLogout} className="flex items-center w-full px-4 py-2.5 text-gray-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-medium">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex items-center justify-between p-6 bg-white border-b">
                        <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h2>
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold text-gray-700">{user.name}</span>
                            <img className="h-10 w-10 rounded-full object-cover" src={user.image || "https://placehold.co/100x100/f9d5b5/6d28d9?text=User"} alt="User profile" />
                        </div>
                    </header>

                    <div className="flex-1 p-8 overflow-y-auto">
                       {renderContent()}
                    </div>
                </main>
            </div>
            
            {/* Booking Modal */}
            {showModal && selectedCompanion && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md m-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Booking</h2>
                        
                        <div className="flex items-center space-x-4">
                            <img src={selectedCompanion.images && selectedCompanion.images.length > 0 ? `http://localhost:8080/images/${selectedCompanion.images[0].imageUrl}` : "https://placehold.co/400x300/f9d5b5/6d28d9?text=Photo"} className="w-24 h-24 rounded-lg object-cover" alt={selectedCompanion.name}/>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{selectedCompanion.name}, {selectedCompanion.age}</p>
                                <p className="text-gray-600"><strong>Price:</strong> ₹{selectedCompanion.pricePerHour || 999}/hr</p>
                            </div>
                        </div>

                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                            <p className="text-gray-700"><strong>Booking for:</strong> {user.name}</p>
                            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
                        </div>
                        
                        {/* Status Messages */}
                        {bookingStatus.state === 'success' && <p className="mt-4 text-center text-green-600 font-semibold">{bookingStatus.message}</p>}
                        {bookingStatus.state === 'error' && <p className="mt-4 text-center text-red-600 font-semibold">{bookingStatus.message}</p>}

                        <div className="flex justify-end mt-6 space-x-3">
                            <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
                                Cancel
                            </button>
                            <button onClick={handleConfirmBooking} disabled={bookingStatus.state === 'success'} className="px-6 py-2 saffron-bg text-white font-semibold rounded-lg hover:saffron-bg-darker transition disabled:bg-gray-400">
                                {bookingStatus.state === 'success' ? 'Confirmed!' : 'Confirm Booking'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Dashboard;

