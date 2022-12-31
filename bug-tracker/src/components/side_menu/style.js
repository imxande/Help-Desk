import styled from "styled-components";

export const Container = styled.div`
	width: 3vw;
	height: 94.9vh;
	background: #178795;
	display: flex;
	flex-direction: column;

`;
export const MenuContainer = styled.div`

`;
export const Icon = styled.i`
	font-size: 2.5em;
	cursor: pointer;
	color: ${(props) => props.color};
`;
export const HiddenIcon = styled.i`
	font-size: 2.5em;
	cursor: pointer;
	margin-left: 2em;
	color: ${(props) => props.color};
	
`;

export const UL = styled.ul`
`;

export const Button = styled.div`
	position: fixed;
	bottom: 0.5em;
	color: #9fffe9;
`;

export const List = styled.li`
	margin: 4em 0px;
	text-align: center;
`;

export const Text = styled.span`
	font-size: 0.9em;
	color: #9fffe9;
`;
