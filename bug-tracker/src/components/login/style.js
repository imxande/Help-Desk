import styled from "styled-components";

export const Container = styled.div`
	width: 500px;
	height: 700px;
	background-color: #fff;
	border-radius: 5%;
	box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
		rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const Header = styled.header`
	display:flex
	justify-content: center;
	margin-top: 50px;

`;

export const HeadingOne = styled.h1`
	font-size: 50px;
	text-align: center;
	margin-top: 10px;
`;

export const Text = styled.p`
	font-size: 18px;
	text-align: center;
	margin: 25px 0;
`;

export const Icon = styled.i`
	font-size: 50px;
	display: flex;
	justify-content: center;
	color: #34c7d5;
`;
