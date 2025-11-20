import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Navigation from './Pages/Navigation';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/NoPage" element={<NoPage />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
