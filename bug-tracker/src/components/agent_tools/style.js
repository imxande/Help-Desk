import styled from "styled-components";

export const Container = styled.div`
  // border: 1px solid red;
`;

export const Nav = styled.nav`
  // border: 1px solid red;
  display: block;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const List = styled.li`
  display: inline;
  margin-left: 15px;
`;

export const A = styled.a`
  font-size: 20px;
  text-decoration: none;

  &:hover {
    background-color: lightgrey;
  }
  &:visited {
    color: #000;
  }
`;

export const Span = styled.span`
  &:hover {
    background-color: lightgrey;
  }
`;

export const CircularSpan = styled(Span)`
  border-radius: 50%;
`;

export const Icon = styled.i``;
