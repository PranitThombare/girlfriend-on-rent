import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <a href="#" className="text-2xl font-bold">
                Urban<span className="saffron-text">Sathi</span>
              </a>
              <p className="text-gray-400 mt-2 text-sm">Meaningful connections, made simple.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
              {/* <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">About Us</a>
               */}
               <Link to="/Aboutus" className="block text-gray-400 hover:text-white transition py-1 text-sm" >
                  About Us
                </Link>
              <Link to="/Careers" className="block text-gray-400 hover:text-white transition py-1 text-sm">Careers</Link>
              <Link href="/Press" className="block text-gray-400 hover:text-white transition py-1 text-sm">Press</Link>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
              <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">Safety</a>
              <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">Contact Us</a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Legal</h4>
              <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">Terms of Service</a>
              <a href="#" className="block text-gray-400 hover:text-white transition py-1 text-sm">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">&copy; 2025 UrbanSathi. All rights reserved.</p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.087.625 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-1.4 0-2.782-.082-4.12-.24 2.618 1.68 5.723 2.648 9.048 2.648 10.814 0 16.725-8.962 16.725-16.725 0-.254-.007-.507-.021-.76 1.146-.828 2.139-1.868 2.924-3.04z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;