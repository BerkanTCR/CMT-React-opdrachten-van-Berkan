import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animal from '../animal.js'



const AnimalDetail = () => {
    const { animalid } = useParams();
    const navigate = useNavigate();
    const [animalDetail, setAnimalDetail] = useState(animal)

    const animalFind = animalDetail.find(a => a.id === Number(animalid));

    if (!animalFind) {
        return <div>Dier niet gevonden!</div>;
    }


    return (
        <section>
            <button onClick={() => navigate('/')}>
                Terug naar home
            </button>

        <h2>{animalFind.name}</h2>
        <img src={animalFind.imageUrl} alt="" />
        <p>{animalFind.habitat}</p>
        <p>{animalFind.diet}</p>
        <p>{animalFind.description}</p>

        </section>
    );
}

export default AnimalDetail;