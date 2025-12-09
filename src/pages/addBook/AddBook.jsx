import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publication: "",
    publishedAt: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));
      if (image) formData.append("image", image);

      const response = await axios.post(
        "https://mern2-0-basicnode-zrh4.onrender.com/book",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      response.status === 201
        ? navigate("/")
        : alert("Something went wrong");
    } catch (error) {
      alert(error.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Fix Navbar Overlap */}
      <div className="pt-28"></div>

      <div className="flex justify-center items-start px-4 pb-20">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📚 Add a New Book
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Enter book details to expand your spiritual collection
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Input Group */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Price (Rs.)
                </label>
                <input
                  type="number"
                  name="bookPrice"
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                  focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  ISBN
                </label>
                <input
                  type="number"
                  name="isbnNumber"
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                  focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                name="authorName"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Publication
              </label>
              <input
                type="text"
                name="publication"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Published Date
              </label>
              <input
                type="date"
                name="publishedAt"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
                focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Book Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 
                focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl
              hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Add Book"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
