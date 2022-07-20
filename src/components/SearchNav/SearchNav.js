import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WeatherData from './WeatherData/WeatherData';
import Button from '../../shared/Button';

function SearchNav() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const weather = [
    {
      name: 'humidity',
      value: '27',
    },
  ];

  useEffect(() => {
    console.log('Hello, this is a useEffect for when setting items');
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   console.log('Hello, local storage', items);
  // }, []);

  const showSidebar = () => {
    //console.log(sidebar);
    setSidebar(!sidebar);
  };

  const searchLocation = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // setText(e.target.value);
    // setItems(e.target.value);
    console.log('Submitting this type in ', text);
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
                      placeholder="Another location"
                      type="text"
                    />
                  </form>
                </div>
              </div>
            </li>
          </ul>
          {weather.map((item, index) => {
            return (
              <>
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
                  <li key={index} className="nav-text">
                    <span>{item.name}</span>
                  </li>
                </ul>
                <div
                  style={{
                    borderBottom: '1px solid white',
                    margin: '0 100px 0 100px',
                    width: '80%',
                  }}
                ></div>
              </>
            );
          })}
          {weather.map((item, index) => {
            return (
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
                <li key={index} className="nav-text">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              </ul>
            );
          })}
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
