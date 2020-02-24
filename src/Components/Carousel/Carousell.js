import React from "react";
import "./Carousel.css";

function Carousell() {
  return (
    <div className="main-carousel" data-flickity='{"draggable": false, "prevNextButtons": false,"autoPlay": true, "wrapAround": true}'>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
    </div>
  );
}

export default Carousell;
