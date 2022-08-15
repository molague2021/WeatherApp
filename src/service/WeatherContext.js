import { createContext, useState, useReducer } from 'react';
import weatherReducer from './WeatherReducer';

const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_APIKEY;

export const WeatherApiProvider = ({ children }) => {
  //creating an initial state
  const initialState = {
    loading: false,
    temp: '90',
    loc: 'Enter Location',
    time: 'time',
    date: 'date',
    humidity: 'humidity',
    cloudy: 'cloudy',
    winds: 'winds',
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const convertToTime = (time) => {
    var definedTime = new Date(time * 1000).toLocaleTimeString('en-US');

    return definedTime;
  };

  const convertToDate = (date) => {
    var definedDate = new Date(date * 1000).toLocaleDateString('en-US');
    return definedDate;
  };

  // const getLongandLat = async (text) => {
  //   const location = text.replace(' ', '+');

  //   const response = await fetch(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`,
  //     {
  //       method: 'GET',
  //     }
  //   );

  //   const data = await response.json();

  //   if (data[0].name === 'El Paso') {
  //     setLat('31.8001');
  //     setLong('-106.2005');
  //   } else {
  //     setLat(data[0].lat);
  //     setLong(data[0].lon);
  //   }
  // };

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  // const getWeather = async (text) => {
  //   await getLongandLat(text);
  //   console.log(lat, long);
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`,
  //     { method: 'GET' }
  //   );

  //   const data = await response.json();
  //   console.log(data);

  //   setTemp(Math.round(data.main.temp) + '\u00B0');
  //   setLoc(data.name);
  //   setTime(convertToTime(data.dt));
  //   setDate(convertToDate(data.dt));
  //   setLoading(false);
  // };

  const getWeather = async (text) => {
    const location = text.replace(' ', '+');

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`,
      { method: 'GET' }
    );

    const data = await response.json();
    console.log(data);

    dispatch({
      type: 'GET_WEATHER',
      payload: data,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        loading: state?.loading,
        temp: Math.round(state?.temp) + '\u00B0',
        loc: state?.loc,
        time: state?.time === 'time' ? '00:00 UTC' : convertToTime(state?.time),
        date:
          state?.date === 'date' ? '01/01/2001' : convertToDate(state?.date),
        getWeather,
        setLoading,
        humidity: state?.humidity + '%',
        winds: Math.round(state?.winds),
        cloudy: state?.cloudy + '%',
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
