import { useContext, useEffect, useState } from 'react';
import SearchWeather from './components/SearchWeather/SearchWeather';
import Weather from './components/Weather/Weather';
import { WeatherApiProvider } from './service/WeatherContext';

function App() {
  return (
    <WeatherApiProvider>
      <div className="main-container">
        <div className="main-title-searchicon-container">
          <div className="title-search-container">
            <Weather />
            <SearchWeather />
          </div>
        </div>
      </div>
    </WeatherApiProvider>
  );
}

export default App;
