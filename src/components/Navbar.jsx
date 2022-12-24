import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a>
            <Link to="/milestone">Milestone</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/album">Album</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/wish">Wish</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}
