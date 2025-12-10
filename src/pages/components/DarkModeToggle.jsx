import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const DarkModeToggle = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDark}
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-gray-200 dark:bg-gray-700 transition-all duration-300"
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white"
          fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500"
          fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364
               6.364-1.414-1.414M6.05 6.05 4.636 4.636m12.728 
               0-1.414 1.414M6.05 17.95l-1.414 1.414M16 12a4 
               4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
