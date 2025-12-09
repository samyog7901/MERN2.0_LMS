import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [hoverDescription, setHoverDescription] = useState(false);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`
      );
      if (response.status === 200) {
        setBook(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  // Dummy rating: 4 stars out of 5
  const rating = 4;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <nav className="text-gray-500 text-sm mb-4" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="hover:underline cursor-pointer">Business and Investing</span>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center font-semibold">{book.bookName}</li>
            </ol>
          </nav>

          {/* Main Book Container */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">

            {/* Book Image with Hover Description */}
            <div 
              className="md:w-1/3 relative bg-gray-100 flex items-center justify-center p-6 cursor-pointer"
              onMouseEnter={() => setHoverDescription(true)}
              onMouseLeave={() => setHoverDescription(false)}
            >
              <img
                src={
                  book.imageUrl
                    ? book.imageUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"
                }
                alt={book.bookName}
                className="rounded-xl max-h-[400px] object-contain"
              />

              {/* Hover overlay */}
              {hoverDescription && book.description && (
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 rounded-xl flex items-center justify-center text-center">
                  <p className="text-sm leading-relaxed">{book.description}</p>
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="md:w-2/3 p-8 flex flex-col justify-between">
              
              {/* Title & Price */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{book.bookName}</h1>
                <p className="mt-2 text-xl font-semibold text-green-600">
                  Rs. {book.bookPrice}
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center">
                  {[...Array(5)].map((_, i) =>
                    i < rating ? (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300 mr-1" />
                    )
                  )}
                  <span className="ml-2 text-gray-500 text-sm">({rating}.0)</span>
                </div>
              </div>

              {/* Author & Details */}
              <div className="mt-6 text-gray-700 space-y-2 text-sm">
                <p><span className="font-semibold">Author:</span> {book.authorName}</p>
                <p><span className="font-semibold">ISBN:</span> {book.isbnNumber}</p>
                <p><span className="font-semibold">Publication:</span> {book.publication}</p>
                <p><span className="font-semibold">Published Date:</span> {book.publishedAt}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                  Buy Now
                </button>
                <button className="flex-1 px-5 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition">
                  Add to Wishlist
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
