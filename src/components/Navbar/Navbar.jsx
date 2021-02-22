import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        {/* Link to homepage */}
        <Link to="/" className="navbar_link">
          Home
        </Link>

        {/* Link to characters */}
        <Link to="/characters" className="navbar_link">
          Characters
        </Link>

        {/* Logo */}
        <img src="rickandmorty.png" alt="rickandmorty" />

        {/* Link to search */}
        <Link to="/search" className="navbar_link">
          Search
        </Link>

        {/* Link to Rick&MortyAPI */}
        <a
          className="navbar_link"
          target="_blank"
          href="https://rickandmortyapi.com/"
        >
          R&M API
        </a>
      </div>
    </div>
  );
}
