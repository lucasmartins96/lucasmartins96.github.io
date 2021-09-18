import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav>
      <div className="container">
        <ul className="parent">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">sobre mim</a>
          </li>
          <li>
            <a href="#">projetos</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
