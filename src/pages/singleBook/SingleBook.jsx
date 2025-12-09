import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const SingleBook = () => {
    const navigate = useNavigate()
  const {id} = useParams() 
  const [book, setBook] = useState({})
  const fetchBook = async () => {
    const response = await axios.get(`https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`)
    if(response.status === 200) {
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])

  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this book?")) {
        try{
            const response = await axios.delete(`https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`)
            if(response.status === 200) {
                alert("Book deleted successfully")
                navigate("/")
            }        
        }catch(e){
            e.getMessage()
        }
    }
  }




    return (
  <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* IMAGE */}
            <div className="bg-gray-100 flex items-center justify-center p-5">
              <img
                src={book.imageUrl ? book.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"}
                alt="Book Cover"
                className="w-full h-[420px] object-contain rounded-xl"
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">{book.bookName}</h1>

              <p className="mt-2 text-lg font-semibold text-green-600">
                Rs. {book.bookPrice}
              </p>

              <div className="mt-6 space-y-3 text-gray-700 text-sm">
                <p><span className="font-semibold">Author:</span> {book.authorName}</p>
                <p><span className="font-semibold">ISBN:</span> {book.isbnNumber}</p>
                <p><span className="font-semibold">Publication:</span> {book.publication}</p>
                <p><span className="font-semibold">Published:</span> {book.publishedAt}</p>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex gap-4">

                <button className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                  Buy Now
                </button>

                <button className="flex-1 px-5 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition">
                  Add to Wishlist
                </button>
              </div>

              {/* EDIT + DELETE */}
              <div className="mt-8 flex gap-4">

                <Link to={`/editBook/${book._id}`} className="flex-1">
                  <button className="w-full px-5 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={handleDelete}
                  className="flex-1 px-5 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}



export default SingleBook