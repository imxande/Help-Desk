import React, {useContext} from "react";
import {Container, Header} from "./style"
import {SideMenu} from "../side_menu"
import TopMenu from "../top_menu"
import { CustomerContext } from "../../context/CustomerContext";


const Home = () => {
  const {user} = useContext(CustomerContext);
  return (
    <Container>
      <TopMenu/>
      <Header>
        {user.message}
      </Header>
      <SideMenu/>
    </Container>
  )
};

export default Home;
