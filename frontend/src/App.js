import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,
	Switch,
	Route,
	Link, 
	Redirect} from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
	let [isLoggedIn, setIsLoggedIn] = useState(false)
	// useEffect(() => {
	// 	setIsLoggedIn(true)
	// })
	return (

		<div>
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login setIsLoggedIn={setIsLoggedIn}/>
					</Route>
					<Route path="/dashboard">
						<Dashboard isLoggedIn={isLoggedIn}/>
					</Route>
				</Switch>
				{/* {isLoggedIn ? <Redirect to="/dashboard"/>: <Redirect to="/login"/>} */}
			</Router>
		</div>
	);
}


export default App;