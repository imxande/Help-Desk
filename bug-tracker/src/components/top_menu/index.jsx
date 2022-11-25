import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { CustomerContext } from "../../context/CustomerContext";
import { DateContext } from "../../context/DateContext";
import { getDate } from "../../helpers/getDate";

import
{
	Container,
	LeftContent,
	Link,
	RightContent,
	UL,
	Button,
	Icon,
	List,
	ProfileContainer
} from "./style";

const TopMenu = () =>
{
	/**
	 * Let us grab the user info we got in our context api
	 * Note that this info was added to our CustomerContext as the user logged in
	 */
	const { user } = useContext( CustomerContext );
	const { setDateTime } = useContext( DateContext );

	// grab first and lastname from the user's data
	const { name } = user;

	// we will use navigate hook in oder to redirect
	const history = useNavigate();

	// handle click
	const createClick = ( e ) =>
	{
		e.preventDefault();

		// find date time
		const { currentMonth, day, year } = getDate();

		// update dateTime on context
		setDateTime( `${ currentMonth } ${ day }, ${ year }` );

		// redirect on click
		return history( "/ticket" );
	};

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
							<Button data-title="Search">
								<Icon>
									<AiOutlineSearch />
								</Icon>
							</Button>
						</List>
						<List>
							<Button data-title="Create" onClick={ createClick }>
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
							<ProfileContainer data-title={ `${ name }` }>
								<Icon>
									<BiUserCircle />
								</Icon>
							</ProfileContainer>
						</List>
					</UL>
				</RightContent>
			</Container>
		</div>
	);
};

export default TopMenu;
