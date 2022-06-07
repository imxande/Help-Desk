import React, { useContext } from "react";
import {
	Container,
	LeftContent,
	Link,
	RightContent,
	UL,
	Button,
	Icon,
	List,
	DropDown,
	Text,
	DropIcon,
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { CustomerContext } from "../../context/CustomerContext";

const TopMenu = () => {
	/**
	 * Let us grab the user info we got in our context api
	 * Note that this info was added to our CustomerContext as the user logged in
	 */
	const { user } = useContext(CustomerContext);

	// grab first and lastname from the user's data
	const { name } = user;

	return (
		<div>
			<Container>
				<LeftContent>
					<UL>
						<List>
							<Link href="#"> Tickets</Link>
						</List>
					</UL>
				</LeftContent>
				<RightContent>
					<UL>
						<List>
							<DropDown>
								<Text>
									{/* 👇 STATE WILL GO HERE */}
									Help Desk
								</Text>
								<DropIcon>
									<RiArrowDropDownFill />
								</DropIcon>
							</DropDown>
							{/* <Form>
                                <Label>Departments</Label>
                                <Select>
                                    <Option>All</Option>
                                    <Option>IT</Option>
                                    <Option>QA</Option>
                                    <Option>DevOps</Option>
                                    <Option>Product</Option>
                                </Select>
                            </Form> */}
						</List>
						<List>
							<Button data-title="Search">
								<Icon>
									<AiOutlineSearch />
								</Icon>
							</Button>
						</List>
						<List>
							<Button data-title="Create">
								<Icon>
									<IoCreateOutline />
								</Icon>
							</Button>
						</List>
						<List>
							<Button data-title="Notifications">
								<Icon>
									<IoMdNotificationsOutline />
								</Icon>
							</Button>
						</List>
						<List>
							<Button data-title="Settings">
								<Icon>
									<FiSettings />
								</Icon>
							</Button>
						</List>
						<List>
							<Button data-title={`${name}`}>
								<Icon>
									<BiUserCircle />
								</Icon>
							</Button>
						</List>
					</UL>
				</RightContent>
			</Container>
		</div>
	);
};

export default TopMenu;
