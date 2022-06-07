import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
	font-size: 20px;
`;

export const TopContent = styled.div`
	display: flex;
	justify-content: center;
`;
export const MiddleContent = styled.div`
	display: flex;
	justify-content: center;
`;
export const BottomContent = styled.div`
	display: flex;
	justify-content: center;
`;

export const Body = styled.div`
	display: flex;
	justify-content: center;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
`;
export const RightContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	line-height: 1.3;
	margin-bottom: 10px;
`;
export const DataList = styled.datalist``;
export const Option = styled.option``;
export const Field = styled.input`
	font-size: 14px;
	border: none;
	outline: none;
	border-bottom: 1px solid #000;
	margin: 20px;
	width: 250px;
	caret-color: ${(props) => props.caretColor};
	cursor: ${(props) => props.cursor};
`;

export const TextArea = styled.textarea`
	width: 555px;
	height: 200px;
	line-height: 1.5;
	font-size: 16px;
`;

export const ButtonContainer = styled.div`
	margin: 10px auto;
	padding: 15px;
`;
export const SubmitButton = styled.button`
	width: 100px;
	margin: 10px;
	background: #34c7d5;
	border-radius: 14px;
	border: 0.5px solid grey;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

	&:hover {
		background: #0a73eb;
	}
`;
export const CancelButton = styled.button`
	width: 100px;
	margin: 10px;
	border-radius: 14px;
	border: 0.5px solid #0000;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	&:hover {
		border: 1px solid grey;
	}
`;

export const Span = styled.span`
	font-size: 20px;
	color: ${(props) => props.color};
`;
