import React from 'react';
import Navbar from '../components/Navbar';
import NavMonth from '../components/NavMonth';
import '../styles/album.css'

function Album() {
  return (
    <div style={{ minWidth: '100vw' }}>
      <Navbar />
      <h1>Our Photo Album</h1>
			<NavMonth />
    </div>
  );
}

export default Album;
