import ToDoItem from "./ToDoItem"
const ToDoList = ({ todoitem, description }) => {
    return (
        <>
            <ToDoItem todoitem={todoitem} description={description} />
            <ToDoItem todoitem={todoitem} description={description} />
            <ToDoItem todoitem={todoitem} description={description} />


        </>
    );
}

export default ToDoList;