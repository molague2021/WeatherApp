import { blue } from '@mui/material/colors';
import React from 'react';

function SearchNav() {
  return (
    <div
      style={{
        width: '500px',
        height: '100vh',
        listStyle: 'none',
        padding: '10em 2em',
        margin: 0,
        insetInlineEnd: '40%',
        backgroundColor: '#000000',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '1rem',
        }}
      >
        <li style={{ flex: '1' }}>Hello</li>
        <li>Blah</li>
      </ul>
    </div>
  );
}

export default SearchNav;
