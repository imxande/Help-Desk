import styled from "styled-components";

export const Container = styled.div`
	width: 5.2vh;
	height: 100vh;
	background-color: #dcdcdc;
	display: flex;
	position: fixed;
	flex-direction: column;
`;
export const MenuContainer = styled.div`
	// border: 1px solid red;
`;
export const Icon = styled.i`
	font-size: 40px;
	color: ${(props) => props.color};
`;

export const Button = styled.div`
	position: fixed;
	bottom: 20px;
`;

export const List = styled.li`
	margin: 50px 0px;
	text-align: center;
`;

export const Text = styled.span`
	font-size: 12px;
`;
