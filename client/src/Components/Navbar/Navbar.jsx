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
              <a className="nav-link" href="#about"> <span>01.</span>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience"> <span>02.</span>Experince</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects"><span>03.</span>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"><span>04.</span>Contact</a>
            </li>
            <li className="nav-item">
            <button className='bg-transparent px-2 pb-1'> Resume</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
