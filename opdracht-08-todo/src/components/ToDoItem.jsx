const ToDoItem = ({ toDoItem }) => {

    console.log(toDoItem);
    return (
        <>
            {toDoItem.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

        </>
    );
}

export default ToDoItem;