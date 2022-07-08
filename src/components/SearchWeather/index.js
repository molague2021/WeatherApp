import SearchIcon from '@mui/icons-material/Search';

function SearchWeather() {
  return (
    <div className="search-icon-container">
      <div className="searchIcon">
        <button className="search">
          <SearchIcon style={{ fontSize: '2.5rem' }} />
        </button>
      </div>
    </div>
  );
}

export default SearchWeather;
