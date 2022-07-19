import { WiRain, WiDaySunny } from 'react-icons/wi';

function WeatherIcon() {
  return (
    <div className="weather-container">
      <div className="weather-icon">
        <WiDaySunny className="weatherIcon" />
      </div>
      <div className="weather-label-container">
        <div className="weather-label">Rainy</div>
      </div>
    </div>
  );
}

export default WeatherIcon;
