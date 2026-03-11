
import './book.css'
export default function Book({ book }){

    // We can destructure the book object to get the title, author and year properties as well

const { title, author, year } = book;

return(
    <div className="book">
        <h3>Title: {title} </h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>    
    </div>
)

}