import Book from './Book'
import {  useState  } from "react";
const BookList = () => {
    const [books, setBooks] = useState ([
        { title: "Harry Potter", author: "Lukasz", image:"./images/book-1.png"},
        { title: "Fantasia VI", author: "Berkan", image:"./images/book-2.png"},
        { title: "Canon van Geneeskunde", author: "Ibn Sina", image:"./images/canon.png"},
         { title: "Canon 2", author: "Ibn Sina", image:"./images/canon.png"}
    ]);

    return (

    <section className="booklistsection">
        {books.map(book => (
       
        <Book title={book.title} author={book.author} image={book.image}/>
      ))}
        

  
    </section>






    )
};

export default BookList;

