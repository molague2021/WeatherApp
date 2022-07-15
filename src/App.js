import { useEffect, useState } from 'react';
import SearchWeather from './components/SearchWeather/index';
import Temperature from './components/Temperature/index';
import LocationTimeDate from './components/LocationTimeDate/index';
import WeatherIcon from './components/WeatherIcon';
import weatherApi from './service/weatherApi';
import weatherData from './data/weatherData';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_APIKEY;

  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [loc, setLoc] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  // const getLonandLat = async () => {
  //   const response = await fetch(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=el+paso,texas,79938&appid=${API_KEY}`,
  //     { method: 'GET' }
  //   );

  //   const data = await response.json();

  //   return data;
  // };

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=el+paso,texas79938&appid=${API_KEY}&units=imperial`,
      { method: 'GET' }
    );

    const data = await response.json();
    console.log(data);

    setTemp(Math.round(data.main.temp) + '\u00B0');
    setLoc(data.name);
    setTime(convertToTime(data.dt));
    setDate(convertToDate(data.dt));
    setLoading(false);
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
    getWeather();
    //setTemp(Math.round(weatherData[0].main.temp) + '\u00B0');
    //setLoc(weatherData[0].name);
    //setTime(convertToTime(weatherData[0].dt));
    //setDate(convertToDate(weatherData[0].dt));
  }, []);

  return (
    <div className="main-container">
      <div className="main-title-searchicon-container">
        <div className="title-search-container">
          <div className="weather-title-container">
            <div className="weather-title">WeatherApp</div>
            <div className="location-time-date-container">
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                <div className="temp-location-date-container">
                  <Temperature temp={temp} />
                  <LocationTimeDate loc={loc} time={time} date={date} />
                  <WeatherIcon />
                </div>
              )}
            </div>
          </div>
          <SearchWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
