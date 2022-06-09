import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../helpers/getUser";
import { getDate } from "../../helpers/getDate";
import { DateContext } from "../../context/DateContext";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
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
	// state
	const [ticket, setTicket] = useState({
		customer_id: "",
		subject: "",
		date: "",
		status: "",
		body: "",
		employee_id: null,
	});

	// let's bring over our date context to get the date stored
	const { dateTime } = useContext(DateContext);

	// lets grab some user info to auto populate some of the fields in the form
	const { name, subject } = getUser();

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

	// handles changes
	const handleChange = (e) => {
		const { name, value } = e.target;

		// update state
		setTicket({
			...ticket,
			[name]: value,
		});
	};

	// handles submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// get date and time
		const { currentMonth, day, year, hours, minutes } = getDate();

		// new ticket
		const newTicket = {
			customer_id: subject,
			subject: ticket.subject,
			date: `${currentMonth} ${day}, ${year}, ${hours}:${minutes}`,
			status: ticket.status,
			body: ticket.body,
			employee_id: null,
		};

		console.log(newTicket);

		// create ticket using axios with auth
		axiosWithAuth()
			.post("/api/tickets", newTicket)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => console.log(error));
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<TopContent>
					<Label htmlFor="name">
						<LeftContent>
							Contact Name
							<Field type="text" name="name" />
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
								name="status"
								value={ticket.status}
								onChange={handleChange}
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
							<Field type="text" name="subject" value={ticket.subject} onChange={handleChange} />
						</LeftContent>
					</Label>
					<Label htmlFor="date">
						<RightContent>
							Date
							<Field
								onKeyDown={disable}
								placeholder={dateTime}
								caretColor="transparent"
								cursor="default"
								type="text"
								name="date"
								value={ticket.date}
								onChange={handleChange}
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
							<TextArea type="text" name="body" value={ticket.body} onChange={handleChange} />
						</Description>
					</Label>
				</Body>
				<ButtonContainer>
					<SubmitButton>
						<Span color="#ffff">Submit</Span>
					</SubmitButton>
					<CancelButton onClick={handleCancel}>
						<Span color="#5a616f">Cancel</Span>
					</CancelButton>
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
