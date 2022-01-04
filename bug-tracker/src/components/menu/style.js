import styled from "styled-components";

export const Container = styled.div`
  width: 4vw;
  height: 100vh;
  border: 1px solid red;
  text-align: center;
`;

export const Icon = styled.i`
  font-size: 40px;
  border: 1px solid red;
  color: ${(props) => props.color};
`;

export const Header = styled.header`
  font-size: 45px;
  margin: 20px 0px;
`;
