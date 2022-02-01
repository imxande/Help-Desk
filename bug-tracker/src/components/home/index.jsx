import React from "react";
import {Container, Header} from "./style"
import {SideMenu} from "../menu"
import AgentTools from "../agent_tools"

const Home = () => {
  return (
    <Container>
      <Header>
          Welcome Username
        <AgentTools/>
      </Header>
      <SideMenu/>
    </Container>
  )
};

export default Home;
