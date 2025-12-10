import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [hoverDescription, setHoverDescription] = useState(false);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [similarBooks, setSimilarBooks] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`
      );
      if (response.status === 200) {
        setBook(response.data.data);

        const allBooks = (await axios.get(`https://mern2-0-basicnode-zrh4.onrender.com/book`)).data.data;

        // More by same author
        setAuthorBooks(
          allBooks.filter(
            (b) => b.authorName === response.data.data.authorName && b._id !== id
          )
        );

        // Similar books (by publication here)
        setSimilarBooks(
          allBooks.filter(
            (b) => b.publication === response.data.data.publication && b._id !== id
          )
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  const rating = 4; // Dummy rating

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-gray-100  pt-28 pb-16 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <nav className="text-gray-500 text-sm mb-6" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex items-center flex-wrap">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="hover:underline cursor-pointer">{book.publication}</span>
              </li>
              <li className="mx-2">/</li>
              <li className="font-semibold">{book.bookName}</li>
            </ol>
          </nav>

          {/* Main Book Container */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-gray-50">

            {/* Image with hover overlay */}
            <div
              className="md:w-1/3 relative bg-gray-100 flex items-center justify-center p-6 cursor-pointer group dark:bg-gray-900"
            
            >
              <img
                src={book.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"}
                alt={book.bookName}
                className="rounded-xl max-h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {hoverDescription && book.description && (
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 rounded-xl flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm leading-relaxed overflow-y-auto max-h-[380px]">{book.description}</p>
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="md:w-2/3 p-8 flex flex-col justify-between dark:text-gray-200">
              <div>
                <span className="inline-block mb-2 px-3 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">
                  {book.publication || "Category"}
                </span>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{book.bookName}</h1>
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

              {/* Author & details */}
              <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <p><span className="font-semibold">Author:</span> {book.authorName}</p>
                <p><span className="font-semibold">ISBN:</span> {book.isbnNumber}</p>
                <p><span className="font-semibold">Publication:</span> {book.publication}</p>
                <p><span className="font-semibold">Published Date:</span> {book.publishedAt}</p>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition dark:bg-gray-400 dark:hover:bg-gray-500 dark:text-blue-600">
                  Buy Now
                </button>
                <button className="flex-1 px-5 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Full Description Section */}
          {book.description && (
            <section className="mt-10 bg-white shadow rounded-xl p-6 border border-gray-200 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed dark:text-gray-200">{book.description}</p>
            </section>
          )}

          {/* More by this Author (Horizontal Scroll) */}
          {authorBooks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">More by {book.authorName}</h2>
              <div className="flex overflow-x-auto gap-6 pb-2 hide-scrollbar">
                {authorBooks.map((b) => (
                  <div key={b._id} className="flex-none w-40 sm:w-48">
                    <Card book={b} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Similar Books (Horizontal Scroll) */}
          {similarBooks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Similar Books</h2>
              <div className="flex overflow-x-auto gap-6 pb-2 hide-scrollbar">
                {similarBooks.map((b) => (
                  <div key={b._id} className="flex-none w-40 sm:w-48">
                    <Card book={b} />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleBook;
