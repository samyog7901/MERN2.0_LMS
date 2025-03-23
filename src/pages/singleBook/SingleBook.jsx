import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} = useParams() 
  const [book, setBook] = useState({})
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if(response.status === 200) {
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])
  return (
   <>
    <Navbar/>
    <div class="max-w-sm rounded overflow-hidden shadow-lg my-25 hover:-translate-0.5 mx-125 w-200">
      <img class="w-full" src={book.imageUrl ? book.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{book.bookName}</div>
        <p class="text-gray-700 text-base">
           Rs.{book.bookPrice} 
        </p>
        <p>Author: {book.authorName}</p>
        <p>
          {book.isbnNumber}
        </p>
        <p>
          Publication: {book.publication}
        </p>
        <p>
          Published Date: {book.publishedAt}
        </p>
   
      </div>
    </div>
   </>
  )
}

export default SingleBook