import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="linkColor" to="/">
          <li>Home</li>
        </Link>
        <Link className="linkColor" to="/about">
          <li>About</li>
        </Link>
        <Link className="linkColor" to="/store">
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