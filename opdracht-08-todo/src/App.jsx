import { useState } from 'react';
import './App.css'
import CreateToDoItem from "./components/CreateToDoItem";
import ToDoList from "./components/ToDoList"
function App() {


    const [textInput, setTextInput] = useState("")
    const [toDoItem, setToDoItem] = useState([])

 

  return (
    <>
      <h1>Opdracht 8 - To Do</h1>

      <CreateToDoItem textInput={textInput} setTextInput={setTextInput} toDoItem={toDoItem} setToDoItem={setToDoItem} />
      <ToDoList  toDoItem={toDoItem} />




    </>
  )
}

export default App
