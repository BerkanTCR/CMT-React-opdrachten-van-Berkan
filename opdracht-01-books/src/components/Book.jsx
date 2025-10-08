const Book = ({image, title, author}) => {
    return (
    <section className="booksection">
        <img className="bookimage" src={image} alt="" />
        <h2>{title}</h2>
        <h3>{author}</h3>
    </section>  
     );
}
 
export default Book;