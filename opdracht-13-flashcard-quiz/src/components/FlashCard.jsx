import { useState } from 'react';

const FlashCard = ({question, answer}) => {

    const [flipped, setFlipped] = useState(true);

    const flipHandler = () => {
        setFlipped(!flipped)
    }
        return (
            <>
                <section className="max-w-sm mx-auto rounded-lg shadow-lg bg-white overflow-hidden text-center" onClick={flipHandler}>
                    {flipped ? <h2>{question}</h2> : <h2>{answer}</h2>}
                </section>
            </>
        );
    }

    export default FlashCard;