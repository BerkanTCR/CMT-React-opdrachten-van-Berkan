import Book from './Book'
const BookList = () => {
    return (

    <section className="booklistsection">
        <Book title='Het leven van een loser' author='Jason' image="./images/book-1.png"/>
        <Book title='killer instinct' author='Berkan' image="./images/book-2.png"/>
        <Book title='Canon van Geneeskunde' author='Ibn Sina' image="./images/canon.png"/>
    </section>

    )
};

export default BookList;

