import { useState } from 'react';
import './App.css'
import CreateToDoItem from "./components/CreateToDoItem";
import ToDoList from "./components/ToDoList"
import todoitem from './components/ToDoItem';
function App() {

    const [textInput, setTextInput] = useState("")
    const [description, setDescription] = useState([])

 

  return (
    <>
      <h1>Opdracht 8 - To Do</h1>

      <CreateToDoItem textInput={textInput} setTextInput={setTextInput} description={description} setDescription={setDescription} />
      <ToDoList toodoitem={todoitem} description={description} />




    </>
  )
}

export default App
