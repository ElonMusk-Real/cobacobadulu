import React, { Component } from "react";
import "./Navbar.css";
import logo from "../Assets/natadanusnavbar.png"

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
            <img className="gambarlogo" src={logo}></img>
        </div>
      </div>
    );
  }
}
