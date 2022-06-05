import React from "react";
import TicketForm from "../ticket_form";
import { IoTicketOutline } from "react-icons/io5";
import {
	Container,
	Header,
	HeaderContainer,
	Icon,
	HeadingOne,
	FormContainer,
} from "../ticket/style";

const Ticket = () => {
	return (
		<Container>
			<HeaderContainer>
				<Header>
					<Icon>
						<IoTicketOutline />
					</Icon>
					<HeadingOne>Create ticket</HeadingOne>
				</Header>
			</HeaderContainer>
			<FormContainer>
				<TicketForm />
			</FormContainer>
		</Container>
	);
};

export default Ticket;
