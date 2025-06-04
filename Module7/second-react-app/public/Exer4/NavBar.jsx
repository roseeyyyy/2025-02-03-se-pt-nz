import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="componentBox">
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/bitcoin-rates">Bitcoin Rates</Link>
    </nav>
  );
}

export default Navbar;
