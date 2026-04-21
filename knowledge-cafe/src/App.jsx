
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  }

  return (
    <>
       <Header></Header>
       
       <div className='md:flex justify-between gap-4 max-w-7xl mx-auto mt-10'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>

        <Bookmarks bookmarks={bookmarks}></Bookmarks>
       </div>
  
    </>
  )
}

export default App
