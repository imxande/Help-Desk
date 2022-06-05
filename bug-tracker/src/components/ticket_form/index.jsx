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
						<Field placeholder="Contact Name" />
					</Label>
					<Label htmlFor="status">
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
						<Field placeholder="subject" />
					</Label>

					<Label>
						<Field placeholder="MM/dd/yyyy hh:mm" />
					</Label>
				</MiddleContent>
				<BottomContent>
					<Label>
						<Field placeholder="Ticket Owner" />
					</Label>
					<Label>
						<Select>
							<Option>-None-</Option>
							<Option>High</Option>
							<Option>Medium</Option>
							<Option>Low</Option>
						</Select>
					</Label>
					<Label htmlFor="body">
						<Field placeholder="description" />
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
