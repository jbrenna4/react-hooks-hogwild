import React from "react";

const Search = () => {
	return (
		<div>
            <select>
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
