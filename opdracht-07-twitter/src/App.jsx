import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'
import { useState } from 'react';
function App() {
  let name = "Berkan";

  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>

      <CreateMessage textInput={textInput} setTextInput={setTextInput} message={message} setMessage={setMessage}/>
      <MessageList name={name} message={message} />

    </>
  )
}

export default App
