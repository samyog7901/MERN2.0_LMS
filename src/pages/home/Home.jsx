import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import Footer from "../components/Footer";
import SmallHeroCarousel from "../components/SmallHeroCarousel";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    const response = await axios.get(
      "https://mern2-0-basicnode-zrh4.onrender.com/book"
    );
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((b) =>
    b.bookName.toLowerCase().includes(search.toLowerCase())
  );

  const slides = ["/bgasitis.jpg", "/giftbtgod.jpg", "/meditation.jpg"];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Prevent navbar overlap */}
      <div className="pt-10 px-4">

        {/* -------------------- HERO SECTION -------------------- */}
        <section>
          <SmallHeroCarousel slides={slides} />
        </section>

        {/* -------------------- CATEGORY FILTER (UI only) -------------------- */}
        <section className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            "Spiritual",
            "Meditation",
            "Yoga",
            "Bhagavad Gita",
            "Biography",
            "Vedas",
          ].map((cat, idx) => (
            <span
              key={idx}
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-700 transition"
            >
              {cat}
            </span>
          ))}
        </section>

        {/* -------------------- BOOK SECTION -------------------- */}
        <h2 className="text-3xl text-center font-semibold text-amber-600 mt-12 mb-6">
          Explore Spiritual Books
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4 mt-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Card key={index} book={book} />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-lg col-span-full text-center">
              No books found.
            </p>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
