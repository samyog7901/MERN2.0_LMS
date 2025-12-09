import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Spiritual Hub</h2>
          <p className="text-gray-400 text-sm">
            Explore a world of spiritual wisdom, meditation, yoga, and self-growth books. Discover treasures from Vedas, Bhagavad Gita, Upanishads, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-amber-400 transition">All Books</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Spiritual", "Meditation", "Yoga", "Bhagavad Gita", "Biography", "Vedas"].map((cat, idx) => (
              <li key={idx}>
                <span className="hover:text-amber-400 transition cursor-pointer">{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get the latest updates on new books.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-400 text-white px-4 py-2 rounded-r-lg hover:bg-amber-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Spiritual Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
