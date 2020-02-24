import React, { Component } from "react";
import "./Navbar.css";
import logo from "../Assets/natadanusnavbar.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="submenu">Home</div>
        <div className="submenu">Snack</div>
        <div className="submenu">Merchandise</div>
        <div className="submenu">Campaign</div>
      </div>
    );
  }
}
