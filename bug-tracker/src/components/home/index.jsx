import React, {useContext} from "react";
import {Container, Header} from "./style"
import {SideMenu} from "../side_menu"
import TopMenu from "../top_menu"
import { CustomerContext } from "../../context/CustomerContext";


const Home = () => {
  const {user, customerInfo} = useContext(CustomerContext);
  console.log(customerInfo)
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
