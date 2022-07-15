import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WeatherData from './WeatherData';

function SearchNav() {
  const [sidebar, setSidebar] = useState(false);

  const weather = [
    {
      name: 'humidity',
      value: '27',
    },
  ];

  const showSidebar = () => {
    console.log(sidebar);
    //setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <button className="menu-bars" onClick={showSidebar}>
          <SearchIcon style={{ fontSize: '2.5rem', color: 'white' }} />
        </button>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
          <li className="navbar-toggle">
            <div className="nav-input-searchIcon">
              <div className="nav-input">
                <input />
              </div>
              <div className="nav-searchbutton">
                <button className="menu-bars" onClick={showSidebar}>
                  <SearchIcon style={{ fontSize: '2.5rem', color: 'white' }} />
                </button>
              </div>
            </div>
          </li>
          {weather.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </li>
            );
          })}
        </ul>
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
