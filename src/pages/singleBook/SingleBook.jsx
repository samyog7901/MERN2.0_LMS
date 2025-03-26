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
    <Navbar/>
    <Link to={`/`}><button className='relative top-20 left-5 bg-amber-400 hover:cursor-pointer hover:bg-amber-300 hover:text-red-400'>Home</button></Link>
    
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-5 my-17">
    <div class="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
        <img class="w-full h-auto object-contain" 
            src={book.imageUrl ? book.imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s'}
            alt="Book Cover" />

        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-3">{book.bookName}</h2>

            <span class="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                Rs. {book.bookPrice}
            </span>

            <div class="mt-4 space-y-2 text-gray-700 text-base">
                <p><span class="font-semibold">Author:</span> {book.authorName}</p>
                <p><span class="font-semibold">ISBN:</span> {book.isbnNumber}</p>
                <p><span class="font-semibold">Publication:</span> {book.publication}</p>
                <p><span class="font-semibold">Published Date:</span> {book.publishedAt}</p>
            </div>

            <div class="mt-5 flex justify-between">
                <button class="px-5 py-2 bg-green-500 text-white text-sm rounded-lg shadow-md hover:bg-green-600 transition">
                    Buy Now
                </button>
                <button class="px-5 py-2 bg-gray-300 text-gray-700 text-sm rounded-lg shadow-md hover:bg-gray-400 transition flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4.001 4.001 0 015.656 0L10 6.586l1.172-1.414a4.001 4.001 0 015.656 5.656l-5.656 5.656-1.172 1.172-1.172-1.172-5.656-5.656a4.001 4.001 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    Add to Wishlist
                </button>
            </div>
           <button className='mx-45 my-10 text-white bg-red-400 p-2.5 rounded-lg hover:bg-red-600 hover:cursor-pointer' onClick={handleDelete}>Delete</button>
          <Link to={`/editBook/${book._id}`} ><button className='mx-75 text-white bg-blue-400 px-3.5 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer'>Edit</button></Link>
        </div>
      
    </div>
</div>




   </>
  )
}

export default SingleBook