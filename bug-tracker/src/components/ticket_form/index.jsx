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
	DataList,
	Option,
	Field,
	TextArea,
	ButtonContainer,
	SubmitButton,
	CancelButton,
} from "./style";

const TicketForm = () => {
	const disable = (e) => {
		e.preventDefault();
		return false;
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
					<SubmitButton />
					<CancelButton />
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TicketForm;
