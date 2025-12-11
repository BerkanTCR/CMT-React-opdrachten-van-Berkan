import './App.css'
import { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';

function App() {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState('rome')
  const [input, setInput] = useState('')

  const apiKey = '9f176e85ba960604da0c96dc51255762';

  useEffect(() => {
    // Fetch functie binnen useEffect
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        console.log(weatherData)
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchWeather();
  }, []); // Lege array = run eenmalig bij mount

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  
  return (
    <div>

      <div>
        <input
          type="text"
          placeholder="Zoek een stad..."
          value={city}
          
          onClick={handleSearch}
          name='search'
        />
        <button onClick={handleSearch}>Zoeken</button>
      </div>

      {weather ? (
        <WeatherInfo city={weather.name} icon={weather.weather[0].icon} temp={weather.main.temp} feelslike={weather.main.feels_like} humidity={weather.main.humidity} windspeed={weather.wind.speed} />
      ) : (
        <p>Het weer is aan het laden</p>
      )
      }
    </div >
  );
}

export default App
