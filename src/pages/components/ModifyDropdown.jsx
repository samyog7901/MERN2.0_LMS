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
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 text-gray-700
                   hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200
                   dark:hover:bg-gray-700 focus:outline-none"
      >
        Modify
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
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
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white
                     dark:bg-gray-900 border dark:border-gray-700 z-20"
        >
          <Link to={"/editBook/:id"}><button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            Edit
          </button></Link>
          <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            Rename
          </button>
          <button className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-800">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
