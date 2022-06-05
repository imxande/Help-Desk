import React from "react";
import { Container, Form, Field } from "./style";

const TicketForm = () => {
	return (
		<Container>
			<Form>
				<Field>subject</Field>
				<Field>body</Field>
			</Form>
		</Container>
	);
};

export default TicketForm;
