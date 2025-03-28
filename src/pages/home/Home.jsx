import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [books,setBooks] = useState([])
  const fetchBooks = async () => {
    const response = await axios.get('https://mern2-0-basicnode-zrh4.onrender.com/book')
    if(response.status == 200){
      setBooks(response.data.data)
      
    }
    

  }
  useEffect(()=>{
    fetchBooks()
  },[])
  console.log(books)
  
  return (
   <>
   <Navbar/>
   <div className='flex flex-wrap justify-evenly'>
    {
      books.length > 0 && books.map((book)=>{
        return(
          <Card book={book}/>
        )
      })
    }
  
  
   </div>


   </>
  )
}

export default Home