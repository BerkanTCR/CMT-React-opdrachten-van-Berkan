import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList  from './components/MessageList'
function App() {
  let name = "Berkan";
  let message = "Hello World!";
  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>

      <CreateMessage />
      <MessageList name={name} message={message}/>

    </>
  )
}

export default App
