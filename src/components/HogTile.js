import React, { useState } from "react";

function HogTile({ name, image, specialty, weight, greased, }) {

    const [hogExpansion, setHogExpansion] = useState([]);

    function handleClick() {
        setHogExpansion((hogExpansion) => !hogExpansion);
    }

    if (hogExpansion === true) {

        return (
            <div className="pigTile">
              <h3>{name}</h3>
              <img src = {image}></img>
              <h4>{specialty}</h4>
              <h4>{weight} lbs</h4>
              <br></br>
              <button onClick={handleClick}>Close Info</button>
            </div>
          );
        }
        else {
            return (
                <div className="pigTile">
                <h3>{name}</h3>
                <img src = {image}></img>
                <br></br>               
                <button onClick={handleClick}>More Info</button>
                </div>
            );
        }
}


export default HogTile;