import { useEffect, useState } from 'react';
import SearchWeather from './components/SearchWeather/index';
import Temperature from './components/Temperature/index';
import LocationTimeDate from './components/LocationTimeDate/index';
import WeatherIcon from './components/WeatherIcon';
import weatherApi from './service/weatherApi';
import weatherData from './data/weatherData';

function App() {
  const API_KEY = 'adb6273fdb1d40ea056888a68c9a8f3a';

  const [temp, setTemp] = useState();
  const [loc, setLoc] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=el+paso,texas79938&appid=${API_KEY}&units=imperial`,
      { method: 'GET' }
    );

    const data = response.data;

    return data;
  };

  const convertToTime = (time) => {
    var time = new Date(time * 1000).toLocaleTimeString('en-US');

    return time;
  };

  const convertToDate = (date) => {
    var date = new Date(date * 1000).toLocaleDateString('en-US');
    return date;
  };

  useEffect(() => {
    setTemp(Math.round(weatherData[0].main.temp) + '\u00B0');
    setLoc(weatherData[0].name);
    setTime(convertToTime(weatherData[0].dt));
    setDate(convertToDate(weatherData[0].dt));
  }, []);

  return (
    <div className="main-container">
      <div className="main-title-searchicon-container">
        <div className="title-search-container">
          <div>WeatherApp</div>
          <SearchWeather />
        </div>
      </div>
      <div className="location-time-date-container">
        Weather time and temp
        <div className="temp-location-date-container">
          <Temperature temp={temp} />
          <LocationTimeDate loc={loc} time={time} date={date} />
          <WeatherIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
