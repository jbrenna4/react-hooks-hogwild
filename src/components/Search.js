import React, { useState } from "react";

const Search = () => {


    function handleChange(event) {
        console.log(event.target.value)
      }

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    
    const pokemonsToDisplay = pokemon.filter((poke) =>

    poke.name.toLowerCase().includes(searchTerm.toLowerCase())

    );


	return (
		<div>
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
		</div>
	);
};

export default Search;
