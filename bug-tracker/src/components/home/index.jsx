import React, { useState } from "react";
import { Container, Header } from "./style";
import { SideMenu } from "../side_menu";
import TopMenu from "../top_menu";

const Home = () => {
	const [user, setUser] = useState({
		userId: null,
		name: "",
		role: "",
	});
	// grab token from local storage
	const token = localStorage.getItem("token");
	console.log(token);
	return (
		<Container>
			<TopMenu />
			<Header>Check token in local storage</Header>
			<SideMenu />
		</Container>
	);
};

export default Home;
