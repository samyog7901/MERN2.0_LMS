import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    "All Books",
    "Bhagavad Gita",
    "Meditation",
    "Spiritual",
    "Self-Help",
    "Vedas & Upanishads",
    "Mythology",
    "Buddhism",
    "Hinduism",
    "Philosophy",
  ];

  return (
    <>
      {/* MAIN NAV */}
      <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">

          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1003199924/vector/open-book.jpg?s=612x612&w=0&k=20&c=nMtbiEjWkKvNQvZa-h9E8oyNNJDVsSSqzBDpqtATF4g="
              className="h-10 w-10 rounded object-cover"
              alt="Logo"
            />
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Spiritual Hub
            </span>
          </Link>

          {/* CENTER SEARCH */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search books, authors, ISBN..."
                className="w-full bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">
            <Link to="/addBook">
              <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition active:scale-95">
                Add Book
              </button>
            </Link>

            {/* Wishlist */}
            <button className="hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.597 4.876 9.935 3.75 8 3.75 5.41 3.75 3.312 5.765 3.312 8.25c0 7.22 8 11.25 8 11.25s8-4.03 8-11.25z" />
              </svg>
            </button>

            {/* Cart */}
            <button className="hover:text-blue-600 transition relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H21M7 13l-2 9m10-9l2 9M9 22h6" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>

            {/* User */}
            <button className="hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a8.25 8.25 0 0 1 15 0v.75H4.5v-.75z" />
              </svg>
            </button>
          </div>
        </div>

        {/* CATEGORY BAR */}
        <div className="bg-white border-t shadow-sm">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">

              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium pb-2 relative group"
                >
                  {cat}

                  {/* Underline Animation */}
                  <span className="absolute left-0 right-0 mx-auto w-0 `h-0.5` bg-blue-600 bottom-0 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}

            </div>
          </div>
        </div>
      </nav>

      {/* Push content below navbar (because navbar is fixed) */}
      <div className="h-[120px] md:h-[140px]"></div>
    </>
  );
};

export default Navbar;
