import React from "react";
import "./Carousell2.css";

function Carousell2() {
  return (
    <div
      className="main-carousel2"
      data-flickity='{"autoPlay": true, "wrapAround": true, "freeScroll": true, "prevNextButtons": false,
      "pageDots": false}'
    >
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
      <div className="carousel-cell2"></div>
    </div>
  );
}

export default Carousell2;
