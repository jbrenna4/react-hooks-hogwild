import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import HogContainer from "./HogContainer"

import hogs from "../porkers_data";


//hogs.filter(hog => hog.greased === true).map(hogs => (


function App() {
// 		if (checked === true) {
// 		return (
// 			<div className="App">
// 				<Nav />
// 				<Search />
// 				<HogContainer hogs = {hogs}/>
// 			</div>
// 		);
// 	}
// 		else {
// 			return (
// 				<div className="App">
// 					<Nav />
// 					<Search />
// 					<HogContainer hogs = {hogs}/>
// 				</div>
// 			);
	
	
// 		}
// }

	return (
		<div className="App">
			<Nav />
			<Search />
			<HogContainer hogs = {hogs}/>
		</div>
	);
}

export default App;
