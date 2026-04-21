import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (

       
            //   <div className='bg-[#dfdfffec] rounded-xl p-5 mb-5'>
                   
            //          <h1 className='text-xl font-bold text-[#6047EC]'>Spent time on read: 0 min</h1>
            //   </div>

        <div className="md:w-1/3 bg  bg-gray-200 rounded-xl p-5">
                 

                <h1 className="text-2xl m-5">Bookmarked blogs: {bookmarks.length}</h1>
             {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
             }
        </div>
    );
};

export default Bookmarks