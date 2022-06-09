import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import PrivateRoute from "./components/private_route";
import Home from "./components/home";
import Ticket from "./components/ticket";
import { CustomerContext } from "./context/CustomerContext";
import { DateContext } from "./context/DateContext";

function App() {
	// initial state
	const [user, setUser] = useState({});
	const [customerInfo, setCustomerInfo] = useState({});
	const [dateTime, setDateTime] = useState("");

	return (
		<div className="App">
			<CustomerContext.Provider value={{ user, setUser, customerInfo, setCustomerInfo }}>
				<DateContext.Provider value={{ dateTime, setDateTime }}>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="/ticket" element={<Ticket />} />

						<Route
							path="/home"
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
					</Routes>
				</DateContext.Provider>
			</CustomerContext.Provider>
		</div>
	);
}

export default App;
