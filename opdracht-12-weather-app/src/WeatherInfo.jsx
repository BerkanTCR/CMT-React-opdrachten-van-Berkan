const WeatherInfo = ({city, temp, feelslike, humidity, windspeed, icon}) => {
    return (
        < section >
            <h1>Stad: {city}</h1>
            <img src={` https://openweathermap.org/img/wn/${icon}.png`} alt="" />
            <h2>Temperatuur: {temp}</h2>
            <h3>Voelt als: {feelslike}</h3>
            <h3>Vochtigheid: {humidity}</h3>
            <h3>Windkracht: {windspeed}</h3>
        </section>
    );
}

export default WeatherInfo;  