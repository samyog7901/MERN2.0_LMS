import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  // Sample rating if not present
  const rating = book.rating || Math.floor(Math.random() * 5) + 1;

  return (
    <div className="relative w-56 md:w-52 lg:w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
      
      {/* Book Image */}
      <img
        src={
          book.imageUrl
            ? book.imageUrl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"
        }
        alt={book.bookName}
        className="w-full h-40 object-cover"
      />

      {/* Overlay for hover */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity text-white p-3 flex flex-col justify-between">
        <div className="text-sm h-20 overflow-y-auto">
          {book.description
            ? book.description
            : "No description available for this book."}
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-400">
            {"★".repeat(rating) + "☆".repeat(5 - rating)}
          </span>
          <Link
            to={`/book/${book._id}`}
            className="bg-amber-500 px-2 py-1 rounded text-xs font-medium hover:bg-amber-600"
          >
            See More
          </Link>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-3">
        <h3 className="text-md font-semibold text-gray-800 truncate">
          {book.bookName}
        </h3>
        <p className="text-sm text-gray-600 mt-1">Rs. {book.bookPrice}</p>
      </div>
    </div>
  );
};

export default Card;
