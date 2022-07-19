import SearchIcon from '@mui/icons-material/Search';

function Button({ children, showSidebar, style }) {
  return (
    <div style={style} className="navbar">
      <div className="navbarButton">
        <button className="menu-bars" onClick={showSidebar}>
          <SearchIcon style={{ fontSize: '2.5rem', color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default Button;
