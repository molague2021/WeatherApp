import Temperature from './Temperature/Temperature';
import LocationTimeDate from './LocationTimeDate/LocationTimeDate';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function Weather({ loading, temp, loc, time, date }) {
  return (
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
  );
}

export default Weather;
