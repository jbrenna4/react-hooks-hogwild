import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import HogContainer from "./HogContainer"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Search />
			<HogContainer hogs = {hogs}/>
		</div>
	);
}

export default App;
