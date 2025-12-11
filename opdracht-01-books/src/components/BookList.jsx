import Book from './Book'
import BookCounter from './Bookcounter'
import { useState } from "react";
const BookList = () => {
  const [books, setBooks] = useState(Bookdata)
  const [searchInput, setSearchInput] = useState = ("")
  return (

    <div className='search'>
      <input 
        type='text'
        placeholder='Zoek een titel op'
        onChange={handleChange}
        value={searchInput}
        name='search'
      />
    </div>
    
    <section className="booklistsection">
      <BookCounter aantal={books.length}/>
        {books.map(book => (
       
        <Book title={book.title} author={book.author} image={book.image}/>
      ))}
        

  
    </section>






  )
};

export default BookList;

