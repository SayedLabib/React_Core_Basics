
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/bookmarks'


function App() {


  return (
    <>
       <Header></Header>
       
       <div className='md:flex justify-between gap-4 container mx-auto mt-10'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
       </div>
  
    </>
  )
}

export default App
