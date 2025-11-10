import { useState } from "react";
const Book = ({image, title, author}) => {
       
        const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

        function verhoogTeller () {
            setAantalKeerGelezen(aantalKeerGelezen + 1)
        }
    
    return (
    <>
        <h1 className="bookteller">Dit boek is zo vaak gelezen: {aantalKeerGelezen}!</h1>
            <section className="booksection">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <h3>{author}</h3>
                <button onClick={verhoogTeller}>Keer gelezen:</button>
            </section> </>
     );

}
 
export default Book;