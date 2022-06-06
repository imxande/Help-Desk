import React from "react";
import { useNavigate } from "react-router-dom";
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
	DataList,
	Option,
	Field,
	TextArea,
	ButtonContainer,
	SubmitButton,
	CancelButton,
} from "./style";

const TicketForm = () => {
	// we will have useNavigate hook redirect our page
	const history = useNavigate();

	// we will add a disable functionality to some of our input fields containing data list
	const disable = (e) => {
		e.preventDefault();
		return false;
	};

	// handle cancel
	const handleCancel = (e) => {
		e.preventDefault();
		// in case user cancels the form redirect to home page
		history("/home");
	};

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
							<Field onKeyDown={disable} type="text" list="statusList" />
							<DataList id="statusList">
								<Option>Open</Option>
								<Option>In Process</Option>
								<Option>On Hold</Option>
								<Option>Closed</Option>
							</DataList>
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
							<Field onKeyDown={disable} placeholder="MM/dd/yyyy hh:mm --" />
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
							<Field type="text" list="priorityList" placeholder="-None-" onKeyDown={disable} />
							<DataList id="priorityList">
								<Option>-None-</Option>
								<Option>High</Option>
								<Option>Medium</Option>
								<Option>Low</Option>
							</DataList>
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
					<SubmitButton>Submit</SubmitButton>
					<CancelButton onClick={handleCancel}>Cancel</CancelButton>
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
