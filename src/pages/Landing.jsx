import React from 'react';
import { Link } from 'react-router-dom';
import Foto from '../assets/thumb.jpg';

function Landing() {
  return (
    <div
      style={{
        display: 'flex',
        placeItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="gmbr">
          <img src={Foto} alt="" />
        </div>

        <h1>Happy Birthday Danis</h1>
        <p>
          Selamat ulang tahun Danis, gak kerasa yaaa udah 20 tahun sekarang.
          Semoga kamu sehat selalu dan dilimpahkan banyak rezeki, aamiin... Aku
          awalnya bingung mau ngasih kartu ucapan tapi kepikiran buat bikin ini.
          Hope you Enjoy
        </p>
        <div className="but-container">
          <Link to="/milestone">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
