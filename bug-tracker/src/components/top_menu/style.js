import styled from "styled-components";

export const Container = styled.div`
	background: #242943;
	width: 100%;
	height: 3em;
	display: flex;
	justify-content: space-between;
`;

export const UL = styled.ul`
	display: flex;
`;

export const List = styled.li`
	// border: 1px solid red;
	margin-left: 1em;

	&:hover {
		background: rgba(255, 255, 255, 0.5);
	}
`;

export const LeftContent = styled.div`
	display: flex;
	align-items: center;
	margin: 1.3em;
`;

export const RightContent = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
`;

export const Link = styled.a`
	color: white;
	font-size: 25px;
`;

export const Button = styled.button`
	background: #242943;
	border: none;
	color: white;
	position: relative;
	
	&:hover::after {
		content: attr(data-title);
		position: absolute;
		background: #242943;
		font-size: 16px;
		padding: 5px;
		margin-top: 10px;
		border-radius: 10%;
		white-space: nowrap;
	}
`;

export const Icon = styled.div`
	font-size: 25px;
	&:hover {
		background: rgba(255, 255, 255, 0.5);
		cursor: pointer;
	}
`;

export const Text = styled.span`
	font-size: 25px;
	cursor: pointer;
	color: white;
`;

export const ProfileContainer = styled.button`
background: #242943;
border: none;
color: white;
position: relative;
&:hover::after {
	content: attr(data-title);
	position: absolute;
	background: #242943;
	font-size: 16px;
	padding: 5px;
	margin-top: 10px;
	right: 0.5em;
	border-radius: 10%;
	white-space: nowrap;
}
`

