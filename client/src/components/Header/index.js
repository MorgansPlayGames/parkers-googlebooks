import React from "react";
import Navbar from "../Navbar"


function Header(props) {
  return (
    <div>
        <Navbar />
        <p className="h6">Search and save books to a server!</p>
    </div>
  );
}

export default Header;