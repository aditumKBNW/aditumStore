import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="linkColor" >
          <li>Home</li>
        </Link>
        <Link to="/about" className="linkColor">
          <li>About</li>
        </Link>
        <Link to="/store" className="linkColor">
          <li>Store</li>
        </Link>
        {/* <Link className="linkColor">
          <li>Cart</li>
        </Link>
        <Link className="linkColor">
          <li>Review</li>
        </Link> */}
      </ul>
    </nav>
  )
}

export default Nav;