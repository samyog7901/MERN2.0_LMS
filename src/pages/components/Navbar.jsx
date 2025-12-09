import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Left Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1003199924/vector/open-book.jpg?s=612x612&w=0&k=20&c=nMtbiEjWkKvNQvZa-h9E8oyNNJDVsSSqzBDpqtATF4g="
              className="h-9 w-9 rounded-md shadow-sm"
              alt="Book Logo"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              Spiritual Hub
            </span>
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/addBook">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition-all duration-200 active:scale-95">
                Add Book
              </button>
            </Link>

            {/* Mobile Icon (optional, not functional unless you add menu logic) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
