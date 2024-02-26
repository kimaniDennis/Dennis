import React from 'react';
import './Navbar.css'
import 'bootstrap/js/dist/collapse'

function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-md navbar-light bg-transparent navbar-dark">
        <a className="navbar-brand" href="#">Dennis Kimani</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
            <li className="nav-item">
            <button className='bg-transparent'> Resume</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
