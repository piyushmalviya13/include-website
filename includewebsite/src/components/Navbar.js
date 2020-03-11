import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          {" "}
          <img src={logo} style={{ width: 100, marginTop: -7 }} />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
