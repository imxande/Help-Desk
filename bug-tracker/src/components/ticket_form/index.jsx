import React from "react";
import { Container, Form, Label, Select, Option, Field, SubmitButton, CancelButton } from "./style";

const TicketForm = () => {
	return (
		<Container>
			<Form>
				<Label htmlFor="status">
					<Select>
						<Option>Open</Option>
						<Option>In Process</Option>
						<Option>On Hold</Option>
						<Option>Closed</Option>
					</Select>
				</Label>
				<Label htmlFor="subject">
					<Field placeholder="subject" />
				</Label>
				<Label htmlFor="body">
					<Field placeholder="description" />
				</Label>
				<Label>
					<Field placeholder="MM/dd/yyyy hh:mm" />
				</Label>
				<SubmitButton />
				<CancelButton />
			</Form>
		</Container>
	);
};

export default TicketForm;
