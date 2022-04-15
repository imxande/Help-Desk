import styled from "styled-components";

export const Container = styled.div`
  width: 4vw;
  height: 100vh;
  text-align: center;
  background-color: lightgrey;
  position: fixed;
`;
export const MenuContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Icon = styled.i`
  font-size: 40px;
  margin: 20px;
  color: ${(props) => props.color};
`;

export const Header = styled.header`
  font-size: 40px;
`;

export const Footer = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  bottom: 20px;
`;
