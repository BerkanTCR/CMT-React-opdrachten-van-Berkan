import { useState } from 'react';
import animal from '../animal.js'
import Animal from '../components/Animal'
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
    const navigate = useNavigate();

    const [animalList, setAnimalList] = useState(animal)

    const goToDetail = (animalid) => {
        navigate(`/animal/${animalid}`);
    };
    return (

        <section>
            <h1>Welkom bij onze winkel!</h1>
            <h2>Onze Producten</h2>

            {animalList.map(animal => (
                <Animal
                    key={animal.id}
                    animal={animal}
                    onShowDetail={goToDetail}
                />
            ))}
        </section>

    );
}

export default Homepage;