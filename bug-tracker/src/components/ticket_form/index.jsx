import React from "react";
import {
	Container,
	TopContent,
	MiddleContent,
	BottomContent,
	Form,
	Label,
	Select,
	Option,
	Field,
	ButtonContainer,
	SubmitButton,
	CancelButton,
} from "./style";

const TicketForm = () => {
	return (
		<Container>
			<Form>
				<TopContent>
					<Label>
						Contact Name
						<Field />
					</Label>
					<Label htmlFor="status">
						Status
						<Select>
							<Option>Open</Option>
							<Option>In Process</Option>
							<Option>On Hold</Option>
							<Option>Closed</Option>
						</Select>
					</Label>
				</TopContent>
				<MiddleContent>
					<Label htmlFor="subject">
						Subject
						<Field />
					</Label>
					<Label>
						Date
						<Field placeholder="MM/dd/yyyy hh:mm --" />
					</Label>
				</MiddleContent>
				<BottomContent>
					<Label>
						Ticket Owner
						<Field />
					</Label>
					<Label>
						Priority
						<Select>
							<Option>-None-</Option>
							<Option>High</Option>
							<Option>Medium</Option>
							<Option>Low</Option>
						</Select>
					</Label>
					<Label htmlFor="body">
						Description
						<Field />
					</Label>
				</BottomContent>
				<ButtonContainer>
					<SubmitButton />
					<CancelButton />
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
