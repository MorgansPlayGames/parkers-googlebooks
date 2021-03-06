import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Google Books Searcher
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item" key="1">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search Books
          </Link>
        </li>
        <li className="nav-item" key="2">
          <Link
            to="/saved"
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
          >
            Saved Books
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
}

export default Navbar;