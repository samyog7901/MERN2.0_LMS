import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ book }) => {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white my-25" key={book._id}>
      <img 
        className="w-full h-90 object-cover" 
        src={book.imageUrl ? book.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"} 
        alt={book.bookName} 
      />
      <div className="p-4">
        <div className="font-bold text-lg text-gray-800">{book.bookName}</div>
        <p className="text-gray-700 text-sm mt-1">Rs. {book.bookPrice}</p>
        <Link 
          to={`/book/${book._id}`} 
          className="inline-block mt-3 text-blue-500 font-semibold hover:underline"
        >
          See More
        </Link>
      </div>
    </div>
  )
}

export default Card
