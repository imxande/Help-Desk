import React from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../helpers/getUser";
import { getDate } from "../../helpers/getDate";
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
	Span,
} from "./style";

const TicketForm = () => {
	// find date time
	const { currentMonth, day, year } = getDate();

	// lets grab some user info to auto populate some of the fields in the form
	const { name } = getUser();

	// navigation
	const history = useNavigate();

	// handles on key down
	const disable = (e) => {
		e.preventDefault();
		return false;
	};

	// handles cancel
	const handleCancel = (e) => {
		e.preventDefault();
		// redirect to home
		return history("/home");
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
							<Field
								onKeyDown={disable}
								type="text"
								list="statusList"
								caretColor="transparent"
								cursor="pointer"
								placeholder="New"
							/>
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
							<Field
								onKeyDown={disable}
								placeholder={`${currentMonth} ${day}, ${year} `}
								caretColor="transparent"
								cursor="default"
							/>
						</RightContent>
					</Label>
				</MiddleContent>
				<BottomContent>
					<Label htmlFor="owner">
						<LeftContent>
							Ticket Owner
							<Field
								placeholder={`${name}`}
								onKeyDown={disable}
								caretColor="transparent"
								cursor="default"
							/>
						</LeftContent>
					</Label>
					<Label htmlFor="priority">
						<RightContent>
							Priority
							<Field
								type="text"
								list="priorityList"
								placeholder="-None-"
								onKeyDown={disable}
								onClick={disable}
								caretColor="transparent"
								cursor="pointer"
							/>
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
					<SubmitButton>
						<Span color="#ffff">Submit</Span>
					</SubmitButton>
					<CancelButton onClick={handleCancel}>
						<Span color="5a616f">Cancel</Span>
					</CancelButton>
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
