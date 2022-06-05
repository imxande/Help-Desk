import React from "react";
import {
	Container,
	Form,
	TopContent,
	MiddleContent,
	BottomContent,
	Body,
	Label,
	LeftContent,
	RightContent,
	Description,
	// Select,
	// Option,
	Field,
	TextArea,
	ButtonContainer,
	SubmitButton,
	CancelButton,
} from "./style";

const TicketForm = () => {
	return (
		<Container>
			<Form>
				<TopContent>
					<Label htmlFor="name">
						<LeftContent>
							Contact Name
							<Field />
						</LeftContent>
					</Label>
					<Label htmlFor="status">
						<RightContent>
							Status
							<Field />
							{/* <Select>
									<Option>Open</Option>
									<Option>In Process</Option>
									<Option>On Hold</Option>
									<Option>Closed</Option>
								</Select> */}
						</RightContent>
					</Label>
				</TopContent>
				<MiddleContent>
					<Label htmlFor="subject">
						<LeftContent>
							Subject
							<Field />
						</LeftContent>
					</Label>
					<Label htmlFor="date">
						<RightContent>
							Date
							<Field placeholder="MM/dd/yyyy hh:mm --" />
						</RightContent>
					</Label>
				</MiddleContent>
				<BottomContent>
					<Label htmlFor="owner">
						<LeftContent>
							Ticket Owner
							<Field />
						</LeftContent>
					</Label>
					<Label htmlFor="priority">
						<RightContent>
							Priority
							<Field />
						</RightContent>
					</Label>
				</BottomContent>
				<Body>
					<Label htmlFor="body">
						<Description>
							Description
							<TextArea />
						</Description>
					</Label>
				</Body>
				<ButtonContainer>
					<SubmitButton />
					<CancelButton />
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
