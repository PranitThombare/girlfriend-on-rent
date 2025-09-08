import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

// Custom styles from careers.html, adapted for JSX
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
    .hero-bg-image {
        background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80');
        background-size: cover;
        background-position: center;
    }
`;

function Careers() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Embed styles and fonts */}
            <style>{customStyles}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

            {/* Header / Navigation */}
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
                <section className="hero-bg-image text-white">
                    <div className="container mx-auto px-6 py-24 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold !leading-tight mb-4">Work With Us</h1>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto">Help us build the platform for meaningful connections and shape the future of companionship.</p>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12">We are guided by principles that ensure a safe, respectful, and innovative community.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                                <p className="text-gray-600">The well-being of our community is our top priority. We are committed to creating a secure and trustworthy platform.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold mb-2">Foster Connection</h3>
                                <p className="text-gray-600">We believe in the power of genuine human connection and build features that encourage meaningful interactions.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold mb-2">Innovate Boldly</h3>
                                <p className="text-gray-600">We are constantly exploring new ideas and technologies to improve the experience for every member of our community.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Life at UrbanSathi Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Life at UrbanSathi</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We're more than just a company; we're a community dedicated to making a positive impact.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl font-bold mb-4">A Culture of Collaboration and Growth</h3>
                                <p className="text-gray-600 mb-6">At UrbanSathi, we thrive on teamwork. We encourage open communication and provide opportunities for professional development, ensuring that every team member can build a rewarding career while contributing to a meaningful mission.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 saffron-text" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Competitive salary and equity options</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 saffron-text" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Comprehensive health and wellness benefits</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 saffron-text" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Flexible work schedules and remote options</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Team collaborating in an office" className="rounded-2xl shadow-xl" />
                            </div>
                        </div>
                    </div>
                </section>

                

            </main>

            {/* Footer */}
           <Footer />
        </>
    );
}

export default Careers;
