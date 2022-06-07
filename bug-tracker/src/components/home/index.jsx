import React, { useState, useEffect, useContext } from "react";
import { Container, Header } from "./style";
import { SideMenu } from "../side_menu";
import TopMenu from "../top_menu";
import { decodeToken } from "react-jwt";
import { CustomerContext } from "../../context/CustomerContext";

const Home = () => {
	// context
	const { setUser } = useContext(CustomerContext);
	// state
	const [authenticatedUser, setAuthenticatedUser] = useState({});

	// grab token from local storage
	const token = localStorage.getItem("token");

	// grab payload
	const payload = decodeToken(token);

	useEffect(() => {
		console.log(payload);
		// update state
		setAuthenticatedUser(payload);
		// update context
		setUser(payload);
	}, []);

	return (
		<Container>
			<TopMenu />
			<Header>{authenticatedUser.name}</Header>
			<SideMenu />
		</Container>
	);
};

export default Home;
