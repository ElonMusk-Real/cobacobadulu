import React from "react";
import "./Carousell3.css";

function Carousell3() {
  return (
    <div
      className="main-carousel"
      data-flickity='{ "autoPlay": true, "draggable": false, "wrapAround": true, "prevNextButtons": false, "fade": true, "lazyLoad": true}'
    >
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
    </div>
  );
}

export default Carousell3;
