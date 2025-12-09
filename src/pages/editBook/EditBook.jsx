import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: null,
    authorName: "",
    publication: "",
    publishedAt: "",
    imageUrl: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input fields
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  // Submit updated book data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "imageUrl") formData.append(key, value);
      });

      if (image) formData.append("image", image);

      const response = await axios.patch(
        `https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`,
        formData
      );

      if (response.status === 200) {
        navigate(`/book/${id}`);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(error.response?.data?.error || "Update failed.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`
      );
      if (response.status === 200) {
        setData(response.data.data);
        setPreview(response.data.data.imageUrl);
      }
    } catch (error) {
      alert("Failed to load book details");
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center px-6 py-10 mx-auto max-w-2xl">
        <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Book Details
          </h1>

          {/* Image Preview */}
          <div className="flex justify-center mb-6">
            <img
              src={preview || "https://via.placeholder.com/150"}
              alt="Preview"
              className="h-40 w-40 object-cover rounded-lg border"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Book Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                value={data.bookName}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Book Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Book Price
              </label>
              <input
                type="number"
                name="bookPrice"
                value={data.bookPrice}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* ISBN */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ISBN Number
              </label>
              <input
                type="number"
                name="isbnNumber"
                value={data.isbnNumber}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                name="authorName"
                value={data.authorName}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Publication */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Publication
              </label>
              <input
                type="text"
                name="publication"
                value={data.publication}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Publish Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Published Date
              </label>
              <input
                type="date"
                name="publishedAt"
                value={data.publishedAt}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2.5 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Change Book Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 w-full p-2 border rounded-lg bg-gray-50"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Book"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBook;
