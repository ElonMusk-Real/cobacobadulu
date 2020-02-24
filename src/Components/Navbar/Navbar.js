import React, { Component } from "react";
import "./Navbar.css";
import logo from "../Assets/natadanusnavbar1.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="submenu" className="logo">
          <img src={logo}></img>
        </div>
        <div className="submenu">Home</div>
        <div className="submenu">Snack</div>
        <div className="submenu">Merchandise</div>
        <div className="submenu">Campaign</div>
      </div>
    );
  }
}
