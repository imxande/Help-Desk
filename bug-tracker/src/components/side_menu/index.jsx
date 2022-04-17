import React from "react";
import { Container, Icon, MenuContainer, Button, List } from "./style";
import { MdDashboard } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { BsBoxArrowInRight } from "react-icons/bs";

export const SideMenu = () => {
  return (
    <Container>
      <MenuContainer>
        <ul>
          <List>
            <Icon color={"#1479ff"}>
              <MdDashboard />
            </Icon>
          </List>
          <List>
            <Icon color={"#1479ff"}>
              <GoCalendar />
            </Icon>
          </List>
          <List>
            <Icon color={"#1479ff"}>
              <CgProfile />
            </Icon>
          </List>
          <List>
            <Icon color={"#1479ff"}>
              <FiSettings />
            </Icon>
          </List>
        </ul>
      </MenuContainer>

      <Button>
        <Icon>
          <BsBoxArrowInRight />
        </Icon>
      </Button>
    </Container>
  );
};
