
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
       <Header></Header>
       
       <div className='md:flex justify-between gap-4 max-w-7xl mx-auto mt-10'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
       </div>
  
    </>
  )
}

export default App
