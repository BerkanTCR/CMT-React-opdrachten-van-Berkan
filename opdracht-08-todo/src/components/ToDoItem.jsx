const ToDoItem = ({ todoitem, description }) => {
    return (
        <>
            <h2>{todoitem}</h2>
            <p>{description}</p>
        </>
    );
}

export default ToDoItem;