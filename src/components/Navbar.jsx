import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className='a' to="/milestone">Milestone</Link>
        </li>
        <li>
          <Link className='a' to="/album">Album</Link>
        </li>
        <li>
          <Link className='a' to="/wish">Wish</Link>
        </li>
      </ul>
    </nav>
  );
}
