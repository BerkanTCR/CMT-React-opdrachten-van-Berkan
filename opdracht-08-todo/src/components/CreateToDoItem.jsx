const CreateToDoItem = ({textInput, setTextInput, toDoItem, setToDoItem}) => {


    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitDescriptionHandler = (e) => {
        e.preventDefault()
        setToDoItem([...toDoItem, textInput])
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
                <button onClick={submitDescriptionHandler}>To-Do Toevoegen</button>
            </form>
        </>
    );
}

export default CreateToDoItem;