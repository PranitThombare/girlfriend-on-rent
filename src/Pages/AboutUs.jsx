import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

// Custom styles consistent with the rest of the site
const customStyles = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #FEFDFB;
        color: #1a1a1a;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
    .saffron-text { color: #F15A24; }
    .saffron-bg { background-color: #F15A24; }
    .hover\\:saffron-bg-darker:hover { background-color: #D84B1B; }
    .about-hero-bg {
        background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80');
        background-size: cover;
        background-position: center;
    }
`;

function AboutUs() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <style>{customStyles}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

            {/* Header */}
            <header className="bg-white/90 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Urban<span className="saffron-text">Sathi</span></Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-600 hover:saffron-text font-medium transition">Log In</Link>
                        <Link to="/signup" className="saffron-bg text-white px-6 py-2.5 rounded-full hover:saffron-bg-darker font-semibold transition shadow-md">Sign Up</Link>
                    </div>
                     <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
                 <div className={`md:hidden px-6 pb-4 space-y-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <Link to="/login" className="block text-gray-600 hover:saffron-text font-medium transition">Log In</Link>
                    <Link to="/signup" className="block saffron-bg text-white text-center px-5 py-2 rounded-full hover:saffron-bg-darker transition shadow">Sign Up</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}
                <section className="about-hero-bg text-white">
                    <div className="container mx-auto px-6 py-24 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold !leading-tight mb-4">More Than a Platform, We're a Community</h1>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">Discover the story behind UrbanSathi and our mission to combat urban loneliness by fostering genuine human connections across India.</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">From a Simple Idea to a Thriving Community</h2>
                                <p className="text-gray-600 mb-4">Founded in 2024 in Baramati, Maharashtra, UrbanSathi started with a simple question: "Why should anyone have to miss out on an experience just because they don't have company?"</p>
                                <p className="text-gray-600">Our founders, inspired by their own experiences in India's bustling cities, set out to create a safe, reliable, and respectful platform for finding like-minded companions. Today, we're proud to have helped thousands of people connect for everything from movie nights and wedding dates to new hobbies and morning walks.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1600880292210-85938b637985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Founders discussing ideas" className="rounded-2xl shadow-xl w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">The People Behind the Platform</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12">We are a passionate team of developers, designers, and community builders dedicated to our mission.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Team Member Card */}
                            <div className="text-center">
                                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                                <h3 className="text-xl font-semibold">Rohan Sharma</h3>
                                <p className="saffron-text font-medium">Co-Founder & CEO</p>
                            </div>
                             {/* Team Member Card */}
                            <div className="text-center">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                                <h3 className="text-xl font-semibold">Priya Mehta</h3>
                                <p className="saffron-text font-medium">Co-Founder & Head of Product</p>
                            </div>
                             {/* Team Member Card */}
                            <div className="text-center">
                                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                                <h3 className="text-xl font-semibold">Sameer Khan</h3>
                                <p className="saffron-text font-medium">Lead Engineer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                         <h2 className="text-3xl font-bold mb-4">Ready to Find Your Sathi?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">Join thousands of others who are creating meaningful memories and connections.</p>
                        <Link to="/signup" className="saffron-bg text-white px-8 py-3.5 rounded-full hover:saffron-bg-darker font-semibold transition shadow-lg text-lg">Join Our Community Today</Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default AboutUs;
