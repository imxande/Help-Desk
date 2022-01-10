import React from "react";
import { Container, Icon, Header, Footer, MenuContainer } from "./style";
import {MdDashboard} from "react-icons/md"
import {VscDebug} from "react-icons/vsc"
import {GoCalendar} from "react-icons/go"
import {CgProfile} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"
import {BsBoxArrowInRight} from "react-icons/bs"

export const SideMenu = () => {
  return (
      <Container>
          <Header>
            <Icon color={ "darkgreen"}>
                <VscDebug/>
            </Icon>
          </Header>
          <MenuContainer>
          <Icon color={"#1479ff"}>
              <MdDashboard/>
          </Icon>
          <Icon color={"#1479ff"}>
              <GoCalendar/>
          </Icon>
          <Icon color={"#1479ff"}>
              <CgProfile/>
          </Icon>
          <Icon color={"#1479ff"}>
              <FiSettings/>
          </Icon>
          </MenuContainer>
          
          <Footer>
              <Icon>
                <BsBoxArrowInRight/>
              </Icon>
          </Footer>
      </Container>
  );
};

