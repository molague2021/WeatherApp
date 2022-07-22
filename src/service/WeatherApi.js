import { createContext, useState } from 'react';

const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_APIKEY;

export const WeatherApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [loc, setLoc] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  // const initialState = {
  //   temp: '',
  //   loc: 'No Location',
  //   time: 'time',
  //   date: 'date',
  //   loading: true,
  // };

  const convertToTime = (time) => {
    var time = new Date(time * 1000).toLocaleTimeString('en-US');

    return time;
  };

  const convertToDate = (date) => {
    var date = new Date(date * 1000).toLocaleDateString('en-US');
    return date;
  };

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

  return (
    <WeatherContext.Provider
      value={{ loading, temp, loc, time, date, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherApiProvider;
