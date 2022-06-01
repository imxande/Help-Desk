import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

export const Label = styled.label`
	text-align: center;
`;

export const Field = styled.input`
	width: 320px;
	height: 50px;
	margin: 10px;
	box-sizing: border-box;
	font-size: 16px;
	padding: 13px 15px;
`;

export const ButtonContainer = styled.div`
	margin: 20px auto;
	font-size: 20px;
	width: 320px;
	height: 50px;
`;

export const Button = styled.button`
	width: 320px;
	height: 50px;
	font-size: 20px;
	background: #34c7d5;
	color: #ffff;
	cursor: pointer;
	&:hover {
		background: #25a5b1;
	}
`;

export const Footer = styled.footer`
	display: flex;
	width: 320px;
	height: 50px;
	font-size: 20px;
	margin: 0 auto;
`;

export const Text = styled.p`
	font-size: 20px;
	margin-right: 5px;
`;

export const Span = styled.span`
	&:hover {
		color: #2582b1;
	}
`;
