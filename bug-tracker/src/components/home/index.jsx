import React, { useState, useEffect, useContext } from "react";
import { Container, Header, TicketListContainer, Content } from "./style";
import { SideMenu } from "../side_menu";
import TopMenu from "../top_menu";
import { getUser } from "../../helpers/getUser";
import { CustomerContext } from "../../context/CustomerContext";
import TicketList from "../ticket_list";

const Home = () =>
{
	// context
	const { setUser } = useContext( CustomerContext );
	// state
	const [ authenticatedUser, setAuthenticatedUser ] = useState( {} );

	// get user information
	const userInfo = getUser();

	useEffect( () =>
	{
		// update state
		setAuthenticatedUser( userInfo );
		// update context
		setUser( userInfo );
	}, [] );

	return (
		<Container>
			<TopMenu />
			<Content>
				<SideMenu />
				<Header>{ authenticatedUser.name }</Header>
			</Content>

			<TicketListContainer>
				<TicketList userInfo={ userInfo } />
			</TicketListContainer>
		</Container>
	);
};

export default Home;
