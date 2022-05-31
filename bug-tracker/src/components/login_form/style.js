import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	line-height: 40px;
`;

export const Label = styled.label`
	text-align: center;
`;

export const Field = styled.input`
	width: 320px;
	height: 50px;
	margin: 10px;
	border-radius: 5px;
	font-size: 16px;
	padding: 13px 15px;
	box-sizing: border-box;
`;

export const ForgotButton = styled.button`
	text-align: center;
	border: none;
	padding: 0;
	cursor: pointer;
	background: none;
	font-size: 14px;
	color: #25a5b5;
	&:hover {
		color: #2582b1;
	}
`;

export const ContinueButton = styled.button`
	width: 320px;
	height: 50px;
	margin: 40px auto;
	color: #ffffff;
	background: #34c7d5;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background: #25a5b1;
	}
`;

export const SignUpContent = styled.div`
	display: flex;
	width: 320px;
	margin: 0 auto;
`;

export const Text = styled.p`
	font-size: 18px;
`;

export const SignUpButton = styled.button`
	border: none;
	padding: 0;
	cursor: pointer;
	background: none;
	margin: 0 10px;
	color: #34c7d5;
	font-size: 18px;
	&:hover {
		color: #2582b1;
	}
`;
