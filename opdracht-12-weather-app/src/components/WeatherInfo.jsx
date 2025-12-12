const WeatherInfo = ({ city, temp, feels, humidity, wind }) => {
    return (
        <section>
            <h1>{city}</h1>
            <h2>Temperatuur: {Math.round(temp)}°C</h2>
            <h3> Voelt aan als {Math.round(feels)}°C</h3>
            <h3> Luchtvochtigheid {humidity}%</h3>
            <h3>Windsnelheid {wind} m/s</h3>
        </section>



    );
}

export default WeatherInfo;
