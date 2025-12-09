import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    const response = await axios.get("https://mern2-0-basicnode-zrh4.onrender.com/book");
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

  return (
    <>
      <Navbar />

      {/* Prevent navbar overlap */}
      <div className="pt-28">

        {/* -------------------- HERO SECTION -------------------- */}
        <section className="bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-200 py-16 text-center rounded-lg mx-4 shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Spiritual Books & Ancient Wisdom
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Explore treasures of Vedas, Bhagavad Gita, Upanishads, Yoga, and Meditation…
          </p>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-80 px-4 py-2 border rounded-l-lg text-gray-700 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button className="bg-amber-500 text-white px-5 py-2 rounded-r-lg hover:bg-amber-600">
              Search
            </button>
          </div>
        </section>

        {/* -------------------- CATEGORY FILTER (UI only) -------------------- */}
        <section className="mt-10 flex flex-wrap gap-3 justify-center">
          {["Spiritual", "Meditation", "Yoga", "Bhagavad Gita", "Biography", "Vedas"].map(
            (cat, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm bg-gray-100 rounded-full border shadow-sm cursor-pointer hover:bg-amber-100"
              >
                {cat}
              </span>
            )
          )}
        </section>

        {/* -------------------- BOOK SECTION -------------------- */}
        <h2 className="text-3xl text-center font-semibold text-amber-600 mt-12 mb-6">
          Explore Spiritual Books
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4 mt-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => <Card key={index} book={book} />)
          ) : (
            <p className="text-gray-500 text-lg col-span-full text-center">
              No books found.
            </p>
          )}
        </div>



        {/* -------------------- NEWSLETTER -------------------- */}
        <section className="bg-gray-100 py-12 mt-20 text-center px-4 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Subscribe for New Book Updates 📚
          </h3>
          <p className="text-gray-600 mb-5">
            Get notified when we add new spiritual and motivational books.
          </p>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-72 border rounded-l-lg focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 text-white px-5 py-2 rounded-r-lg hover:bg-amber-600">
              Subscribe
            </button>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
