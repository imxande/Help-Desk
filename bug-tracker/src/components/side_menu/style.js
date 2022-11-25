import styled from "styled-components";

export const Container = styled.div`
	width: 4vw;
	height: 94.9vh;
	background-color: #dcdcdc;
	display: flex;
	flex-direction: column;

`;
export const MenuContainer = styled.div`
	// border: 1px solid red;
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
`;

export const List = styled.li`
	margin: 4em 0px;
	text-align: center;
`;

export const Text = styled.span`
	font-size: 0.8em;
`;
