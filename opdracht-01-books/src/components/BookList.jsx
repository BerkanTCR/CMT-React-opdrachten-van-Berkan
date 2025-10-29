import Book from './Book'
const BookList = () => {
    return (

    <section className="booklistsection">
        <Book title='Harry Potter' author='Lukasz' image="./images/book-1.png"/>
        <Book title='Fantasia VI' author='Berkan' image="./images/book-2.png"/>
        <Book title='Canon van Geneeskunde' author='Ibn Sina' image="./images/canon.png"/>
    </section>

    )
};

export default BookList;

