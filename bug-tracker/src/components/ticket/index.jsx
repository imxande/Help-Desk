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
	HeadingTwo,
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
				<HeadingTwo>Ticket Information</HeadingTwo>
				<TicketForm />
			</FormContainer>
		</Container>
	);
};

export default Ticket;
