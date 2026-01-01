import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ModifyDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
  {/* Trigger */}
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center justify-between gap-3 w-28 px-3 py-2
               rounded-md bg-gray-100 text-gray-800
               border border-gray-300
               hover:bg-gray-200
               dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700
               dark:hover:bg-gray-700"
  >
    <span className="text-sm font-medium">Modify</span>
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Menu */}
  {open && (
    <div
      className="absolute right-0 mt-1 w-56
                 bg-white dark:bg-gray-900
                 border border-gray-200 dark:border-gray-700
                 rounded-md shadow-xl z-30"
    >
      <Link
        to={`/editBook/${id}`}
        className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200
                   hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Edit Book Details
      </Link>

      <button
        className="block w-full text-left px-4 py-2 text-sm
                   text-gray-800 dark:text-gray-200
                   hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Rename Book
      </button>

      <div className="my-1 border-t border-gray-200 dark:border-gray-700" />

      <button
        className="block w-full text-left px-4 py-2 text-sm
                   text-red-600 hover:bg-red-50
                   dark:hover:bg-gray-800"
      >
        Delete Book
      </button>
    </div>
  )}
</div>

  );
}
