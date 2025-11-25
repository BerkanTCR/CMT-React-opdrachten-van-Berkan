import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AnimalDetail from './pages/AnimalDetail'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <h1>Opdracht 6 - Zoo app</h1>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/animal/:animalid" element={<AnimalDetail />} />



    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
