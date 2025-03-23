import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {
  return (
    
<div class="max-w-sm rounded overflow-hidden shadow-lg my-25 hover:-translate-0.5" key={book._id}>
  <img class="w-full" src={book.imageUrl ? book.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s"} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{book.bookName}</div>
    <p class="text-gray-700 text-base">
     Rs. {book.bookPrice}
    </p>

   <Link to={`/book/${book._id}`}>See More</Link>
   
  </div>
</div>
  )
}

export default Card