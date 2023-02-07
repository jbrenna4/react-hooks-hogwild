import React from "react";

const Search = () => {


    function handleChange(event) {
        console.log(event.target.value)
      }

	return (
		<div>
            <select onChange={handleChange}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <label>
                <input type="checkbox" />
                greased
            </label>
		</div>
	);
};

export default Search;
