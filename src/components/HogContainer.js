import React from "react";
import HogTile from "./HogTile"

const HogContainer = ( {hogs} ) => {

    const hogCards = hogs.map((hog) => (
        <HogTile
           key={hog.name} 
           name = {hog.name} 
           specialty = {hog.specialty} 
           greased = {hog.greased} 
           weight = {hog.weight}
//           medal = {hog."highest medal achieved}
           image = {hog.image}
         />
     ));

     return (
        <div id="hogs">
          <h2>Hogs</h2>
          <div id="hog-list">{hogCards}</div>
        </div>
      );
    }

export default HogContainer;
