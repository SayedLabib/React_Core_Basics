import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmarks, handleReadingTime}) => {
  
    const {id, title, cover_img, author_name, author_img, reading_time, post_date, hashtags } = blog;
   
    return (
        <div className='container mx-auto text-4xl'>
            <img className='rounded-xl md:w-full' src={cover_img} alt={`cover picture of the title ${title}`} />
            
            <div className='mt-10 mb-14'>
                {/* Blog meta information */}
                
                <div className='flex justify-between items-center'>

                   <div className='flex flex-row items-center gap-3'>
                        
                        <img className='md:w-[70px] md:h-[70px] rounded-full' src={author_img} alt={`Author picture of ${author_name}`} />

                  <div className='text-[16px] flex md:flex-col gap-0'>

                    <p className='font-bold text-[24px] m-0'>{author_name}</p>
                    <p className='text-gray-500 -mt-2'>{post_date}</p>

                  </div>


                   </div> 

                   <div className='flex flex-row items-center gap-3'>
                     <p className='text-xl'>{reading_time} min read</p>
                     
                     <button onClick={() => handleAddToBookmarks(blog)}>
                       <img src="https://img.icons8.com/?size=24&id=p5IcHfcSGnlD&format=png&color=000000" alt="" />
                     </button>
                     
                   </div>
                  
                </div>

                {/* blog title */}
                <h1 className='mt-5 text-3xl font-bold'>{title}</h1>
                <h3 className='text-gray-500 text-xl mt-5'>{hashtags}</h3>
                <button className='text-blue-700 text-xl mt-5 font-semibold' onClick={() => handleReadingTime(id, reading_time)}>
                  Mark as read
                </button>
                 <hr className='w-[121px] h-[2px] bg-blue-800' />
                <hr className='mt-10' />

            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
};

export default Blog;