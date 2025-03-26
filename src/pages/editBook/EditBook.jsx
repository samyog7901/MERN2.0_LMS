import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {
    const {id} = useParams()
    const navigate = useNavigate()
      const [data, setData] = useState({
        bookName : '',
        bookPrice : '',
        isbnNumber : null,
        authorName : '',
        publication : '',
        publishedAt : ''
      })
      const [image, setImage] = useState(null)

      const handleChange = (e) => {
        const {name, value} = e.target
        setData({
          ...data,
          [name]: value
        })
      }
    
      const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData()

        Object.entries(data).forEach(([key,value])=>{
          formData.append(key,value)
        })
        formData.append('image',image)

        const response = await axios.patch(`https://mern2-0-basicnode-zrh4.onrender.com/book/${id}`,formData)
        
        if(response.status === 200){
          navigate('https://mern-2-0-lms.vercel.app/book' + id)
        }else{
          alert('Something went wrong')
        }
      }

      const fetchBook = async ()=>{
        const response = await axios.get('https://mern2-0-basicnode-zrh4.onrender.com/book/' + id)
        if(response.status === 200){
          setData(response.data.data)
        }
      }
      useEffect(() => {
        fetchBook()
      },[])

  return (
    <>
    <Navbar/ >
    
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 my-29">
    
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit Book
            </h1>
            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="bookName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                    <input type="text" name="bookName" id="bookName" value={data.bookName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="bookPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Price</label>
                    <input type="text" name="bookPrice" value={data.bookPrice} id="bookPrice"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="isbnNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN Number</label>
                    <input type="number" name="isbnNumber" value={data.isbnNumber} id="isbnNumber"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="authorName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
                    <input type="text" name="authorName" value={data.authorName} id="authorName"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="publication" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publication</label>
                    <input type="text" name="publication" value={data.publication} id="publication"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="publishedAt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published Date</label>
                    <input type="date" name="publishedAt" value={data.publishedAt} id="publishedAt"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="image" class="block text-sm font-medium text-gray-700">Upload Book Image</label>
                    <input type="file" name="image" id="image" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
          


                
                <div>
                  <button type="submit" class="px-6 py-3 w-full bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-green-600 hover:shadow-lg focus:ring-4 focus:ring-green-300 active:scale-95">
                      Edit Book
                  </button>

                </div> 
               
               
                
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default EditBook