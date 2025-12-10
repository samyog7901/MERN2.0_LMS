import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 dark:bg-gray-900 text-gray-200 dark:text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Spiritual Hub</h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm">
            Explore a world of spiritual wisdom, meditation, yoga, and self-growth books.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "All Books", "About Us", "Contact"].map((link, idx) => (
              <li key={idx}>
                <Link to={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-amber-400 transition">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            {["Spiritual", "Meditation", "Yoga", "Bhagavad Gita", "Biography", "Vedas"].map((cat, idx) => (
              <li key={idx}>
                <span className="hover:text-amber-400 transition cursor-pointer">{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for latest updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-400 text-white px-4 py-2 rounded-r-lg hover:bg-amber-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-600 mt-8 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Spiritual Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
