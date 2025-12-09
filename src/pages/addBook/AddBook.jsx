import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: null,
    authorName: "",
    publication: "",
    publishedAt: "",
    description: "", // added description
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value)
      );
      if (image) formData.append("image", image);

      const response = await axios.post(
        "https://mern2-0-basicnode-zrh4.onrender.com/book",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201) navigate("/");
      else alert("Something went wrong");
    } catch (error) {
      alert(error.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="`pt-16` min-h-[calc(100vh-64px)] bg-gray-50 flex items-start justify-center pb-12">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 mt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Add New Book
        </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Book Name */}
            <div>
              <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Book Price */}
            <div>
              <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-700">
                Book Price
              </label>
              <input
                type="number"
                name="bookPrice"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* ISBN Number */}
            <div>
              <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-700">
                ISBN Number
              </label>
              <input
                type="number"
                name="isbnNumber"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Author Name */}
            <div>
              <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                name="authorName"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Publication */}
            <div>
              <label htmlFor="publication" className="block text-sm font-medium text-gray-700">
                Publication
              </label>
              <input
                type="text"
                name="publication"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Published Date */}
            <div>
              <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700">
                Published Date
              </label>
              <input
                type="date"
                name="publishedAt"
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                rows={5}
                placeholder="Enter book description..."
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none focus:ring-2 focus:ring-amber-500 outline-none"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Book Image (optional)
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-2 w-full text-sm border border-gray-300 rounded-lg p-2 bg-gray-50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition disabled:opacity-50"
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
