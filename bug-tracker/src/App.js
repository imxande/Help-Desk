import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import PrivateRoute from "./components/private_route";
import Dashboard from "./components/dashboard/index";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
