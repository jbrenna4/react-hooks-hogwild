import React from "react";

function HogTile({ name, image, specialty, weight, greased, }) {


  return (
    <div className="hog-item">
      <h3>{name}</h3>
      <img src = {image}></img>
    </div>
  );
}


export default HogTile;