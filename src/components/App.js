import React from "react";
import Nav from "./Nav";
import HogContainer from "./HogForm"

import hogs from "../porkers_data";


    // const [checked, setChecked] = useState(false);

    // const handleCheck = () => {
    //     setChecked(!checked);
    // };

// const filteredHogs = hogs.filter(hog => hog.greased === true).map(hogs => (
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

function App () {
	return (
		<div className="App">
			<Nav />
			{/* <label>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={handleCheck}
                />
                greased
            </label> */}
			<HogContainer hogs = {hogs}/>
		</div>
	);
}

export default App;
