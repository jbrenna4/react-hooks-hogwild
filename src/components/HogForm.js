import React, {useState} from "react";
import HogTile from "./HogTile"

const HogContainer = ( {hogs} ) => {

    

    function handleChange(event) {
     console.log(event.target.value)
    }

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
      setChecked(!checked);
    };


    const greasedHogs = hogs.filter(function(hog) {
      return hog.greased === true;
    });

    const filteredHogs = greasedHogs.map((hog) => (
      <HogTile
         key={hog.name} 
         name = {hog.name} 
         specialty = {hog.specialty} 
         greased = {hog.greased} 
         weight = {hog.weight}
         medal = {hog["highest medal achieved"]}
         image = {hog.image}
       />
   ));

    const hogCards = hogs.map((hog) => (
        <HogTile
           key={hog.name} 
           name = {hog.name} 
           specialty = {hog.specialty} 
           greased = {hog.greased} 
           weight = {hog.weight}
           medal = {hog["highest medal achieved"]}
           image = {hog.image}
         />
     ));

     const ternHog = checked ? filteredHogs : hogCards
        console.log(typeof hogCards, hogCards)
        console.log(typeof ternHog, ternHog)
     return (
        <div id="hogs">
            <select onChange={handleChange}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <label>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={handleCheck}
                />
                greased
            </label>
          <h2>Hogs</h2>
          <div id="hog-list">{ternHog}</div>
        </div>
      );
    }

export default HogContainer;
