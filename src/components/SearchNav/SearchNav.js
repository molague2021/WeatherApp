import { useEffect, useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WeatherData from './WeatherData/WeatherData';
import Button from '../../shared/Button';
import WeatherApi from '../../service/WeatherContext';

function SearchNav() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const { getLongandLat, getWeather, humidity, cloudy, winds } =
    useContext(WeatherApi);

  const weather = [
    {
      name: 'humidity',
      value: '27',
    },
    {
      name: 'humidity',
      value: '27',
    },
  ];

  // useEffect(() => {
  //   console.log('Hello, this is a useEffect for when setting items');
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   console.log('Hello, local storage', items);
  // }, []);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const searchLocation = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something');
    } else {
      //getLongandLat(text);
      getWeather(text);
      setText('');
    }
  };

  return (
    <>
      <Button showSidebar={showSidebar} />
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <ul
            className="nav-menu-inputItem"
            /*style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}*/
          >
            <li className="navbar-toggle">
              <div className="nav-input-searchIcon">
                <div className="nav-input">
                  <form onSubmit={searchLocation} style={{ width: '100%' }}>
                    <input
                      className="inputfield"
                      placeholder="Another location (City, State, or ZipCode)"
                      type="text"
                      value={text}
                      onChange={handleChange}
                    />
                  </form>
                </div>
              </div>
            </li>
          </ul>
          <div style={{ paddingLeft: '85px', paddingBottom: '30px' }}>
            {weather.map((item, index) => {
              return (
                <>
                  <span
                    style={{
                      color: 'darkgrey',
                      paddingLeft: '16px',
                      display: 'flex',
                    }}
                  >
                    {item.name}
                  </span>
                </>
              );
            })}
          </div>
          <div
            style={{
              borderBottom: '1px solid white',
              margin: '0 100px 0 100px',
              width: '80%',
            }}
          ></div>
          <ul
            className="nav-menu-items"
            /*style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}*/
          >
            <span
              style={{
                display: 'flex',
                fontWeight: 'Bold',
                padding: '30px 16px',
              }}
            >
              Weather Details
            </span>
            <li className="nav-text">
              <span style={{ color: 'darkgrey' }}>Cloudy:</span>
              <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {cloudy}
              </span>
            </li>
            <li className="nav-text">
              <span style={{ color: 'darkgrey' }}>Humidity:</span>
              <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {humidity}
              </span>
            </li>
            <li className="nav-text">
              <span style={{ color: 'darkgrey' }}>Winds:</span>
              <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {winds}m/hr
              </span>
            </li>
          </ul>
        </div>
        <Button style={{ maxWidth: '200px' }} showSidebar={showSidebar} />
      </nav>
    </>
  );
}

/*<div
          style={{
            width: '500px',
            height: '100vh',
            listStyle: 'none',
            padding: '2em 2em',
            margin: 0,
            insetInlineEnd: '40%',
            backgroundColor: '#000000',
            opacity: 0.5,

            
        Make it blurry
        backdropFilter: 'blur(2rem)' 
        
      }}
      </div>
      >*/

export default SearchNav;
