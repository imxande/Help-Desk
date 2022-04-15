import React from "react";
import {Container, Header} from "./style"
import {SideMenu} from "../side_menu"
import TopMenu from "../top_menu"

const Home = () => {
  return (
    <Container>
      <TopMenu/>
      <Header>
          Welcome Username
      </Header>
      <SideMenu/>
    </Container>
  )
};

export default Home;
