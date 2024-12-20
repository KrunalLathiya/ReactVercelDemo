import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ResponsiveLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample image data for grid
  const images = [
    { id: 1, src: "https://via.placeholder.com/400x300?text=Image+1", alt: "Image 1" },
    { id: 2, src: "https://via.placeholder.com/400x300?text=Image+2", alt: "Image 2" },
    { id: 3, src: "https://via.placeholder.com/400x300?text=Image+3", alt: "Image 3" },
    { id: 4, src: "https://via.placeholder.com/400x300?text=Image+4", alt: "Image 4" },
    { id: 5, src: "https://via.placeholder.com/400x300?text=Image+5", alt: "Image 5" },
    { id: 6, src: "https://via.placeholder.com/400x300?text=Image+6", alt: "Image 6" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Responsive Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">LOGO</div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <ul
            className={`
            ${isMenuOpen ? "flex" : "hidden"} 
            md:flex flex-col md:flex-row 
            absolute md:relative 
            top-16 md:top-0 
            left-0 md:left-auto 
            w-full md:w-auto 
            bg-gray-800 md:bg-transparent 
            flex-col md:flex-row 
            space-y-4 md:space-y-0 md:space-x-6 
            p-4 md:p-0
          `}
          >
            <li>
              <a href="#" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Image Grid */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Image {image.id}</h3>
                <p className="text-gray-600">
                  Description for image {image.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Three Column Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Column 1: About */}
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-300">
              We are a creative team dedicated to delivering exceptional digital
              experiences with innovation and passion.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p>123 Web Street</p>
              <p>Tech City, Digital State</p>
              <p>Email: info@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
