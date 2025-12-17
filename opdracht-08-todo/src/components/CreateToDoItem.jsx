const CreateToDoItem = ({textInput, setTextInput, description, setDescription}) => {


    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitDescriptionHandler = (e) => {
        e.preventDefault()
        setDescription([...description, textInput])
        setTextInput('')
    }

    return (
        <>
            <form action="">
                <textarea value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
                <br>
                </br>
                <br>
                </br>
                <button onClick={submitDescriptionHandler}>Toevoegen</button>
            </form>
        </>
    );
}

export default CreateToDoItem;