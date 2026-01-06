import Book from './Book'
import BookCounter from './Bookcounter'
import { useState } from "react";
import BookData from "../BookData.js"

const BookList = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredBooks = BookData.filter(book =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className='search'>
        <input
          type='text'
          placeholder='Zoek een titel op'
          onChange={handleChange}
          value={searchInput}
        />
      </div>

      <section className="booklistsection">
        <BookCounter aantal={filteredBooks.length} />

        {filteredBooks.map(book => (
          <Book
            key={book.title}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
