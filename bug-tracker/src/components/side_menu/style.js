import styled from "styled-components";

export const Container = styled.div`
  width: 5vh;
  height: 100vh;
  background-color: #dcdcdc;
  display: flex;
  border: 1px solid red;
  position: fixed;
  flex-direction: column;
`;
export const MenuContainer = styled.div`
  border: 1px solid red;
`;
export const Icon = styled.i`
  font-size: 40px;
  color: ${(props) => props.color};
`;

export const Button = styled.div`
  border: 1px solid red;
  position: fixed;
  bottom: 20px;
`;

export const List = styled.li`
  border: 1px solid red;
  margin: 50px 0px;
`;
