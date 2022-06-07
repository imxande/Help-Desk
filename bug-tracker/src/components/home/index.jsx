import React, { useState, useEffect, useContext } from "react";
import { Container, Header } from "./style";
import { SideMenu } from "../side_menu";
import TopMenu from "../top_menu";
import { getUser } from "../../helpers/getUser";
import { CustomerContext } from "../../context/CustomerContext";

const Home = () => {
	// context
	const { setUser } = useContext(CustomerContext);
	// state
	const [authenticatedUser, setAuthenticatedUser] = useState({});

	// get user information
	const userInfo = getUser();

	useEffect(() => {
		console.log(userInfo);
		// update state
		setAuthenticatedUser(userInfo);
		// update context
		setUser(userInfo);
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
