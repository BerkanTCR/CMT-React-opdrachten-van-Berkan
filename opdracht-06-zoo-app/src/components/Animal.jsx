const Animal = ({animal, onShowDetail}) => {
    return (

        <section className="AnimalCard"  onClick={() => onShowDetail(animal.id)}>
            <img src={animal.imageUrl} alt="" />
            <h1>Name:{animal.name} </h1>
        </section>

    );
}

export default Animal;