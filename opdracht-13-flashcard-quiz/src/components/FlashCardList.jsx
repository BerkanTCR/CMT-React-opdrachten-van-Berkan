import FlashCard from './FlashCard'
import data from '../data.js'
const FlashCardList = () => {
    return ( 
        <>
        <section className="space-y-4">
            <h1 className="text-center text-xl text-white font-bold">FlashCard List</h1>
          <FlashCard />
          {data.map(d => (
            <FlashCard question={d.question} answer={d.answer} />
          ))}

        </section>
        </>
     );
}
 
export default FlashCardList;