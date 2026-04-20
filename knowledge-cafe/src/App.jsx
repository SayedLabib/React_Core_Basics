
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/bookmarks'


function App() {


  return (
    <>
       <Header></Header>
       
       <div className='flex justify-normal items-center'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
       </div>
  
    </>
  )
}

export default App
