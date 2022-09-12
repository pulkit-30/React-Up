import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        Brain Thug Masquerade{" "}
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header;
