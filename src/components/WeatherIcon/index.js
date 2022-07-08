import { WiRain } from 'react-icons/wi';

function WeatherIcon() {
  return (
    <div className="weather-container">
      <div className="weather-icon">
        <WiRain className="WiRain" />
      </div>
      <div className="weather-label-container">
        <div className="weather-label">Rainy</div>
      </div>
    </div>
  );
}

export default WeatherIcon;
