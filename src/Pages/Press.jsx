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
    .press-hero-bg {
        background-color: #f9fafb;
    }
`;

function Press() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mock data for press articles
    const pressArticles = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Times_of_India_logo.svg/2560px-The_Times_of_India_logo.svg.png",
            outlet: "The Times of India",
            headline: "UrbanSathi: The App Connecting Hearts in a Lonely World",
            date: "September 5, 2025",
            link: "#"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/YourStory_Logo.svg/1200px-YourStory_Logo.svg.png",
            outlet: "YourStory",
            headline: "How a Startup from Baramati is Tackling Urban Loneliness Across India",
            date: "August 28, 2025",
            link: "#"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/The_Economic_Times_logo.svg",
            outlet: "The Economic Times",
            headline: "The Companionship Economy: UrbanSathi's Innovative Business Model",
            date: "August 15, 2025",
            link: "#"
        }
    ];

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
                <section className="press-hero-bg">
                    <div className="container mx-auto px-6 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-4">UrbanSathi in the News</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">See what the world is saying about our mission to foster meaningful connections.</p>
                    </div>
                </section>

                {/* Press Mentions Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Featured Press</h2>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {pressArticles.map((article, index) => (
                                <a href={article.link} key={index} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                        <img src={article.logo} alt={`${article.outlet} logo`} className="h-8 mb-4 sm:mb-0 sm:mr-6 object-contain" />
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{article.headline}</h3>
                                            <p className="text-sm text-gray-500">{article.date}</p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block h-6 w-6 text-gray-400 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Media Kit & Contact Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
                                <p className="text-gray-600 mb-6">For all press-related questions, interviews, or other media opportunities, please get in touch with our communications team.</p>
                                <div className="space-y-3">
                                    <p className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 saffron-text" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                        <a href="mailto:press@urbansathi.com" className="hover:underline">press@urbansathi.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <h3 className="text-2xl font-bold mb-3">Download Our Media Kit</h3>
                                <p className="text-gray-600 mb-6">Access our official logos, brand guidelines, and high-resolution images.</p>
                                <Link to="#" className="inline-block saffron-bg text-white px-8 py-3 rounded-full hover:saffron-bg-darker font-semibold transition shadow-lg">
                                    Download Kit (.zip)
                                </Link>
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

export default Press;
