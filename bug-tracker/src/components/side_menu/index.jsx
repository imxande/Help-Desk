import React from "react";
import { Container, Icon, MenuContainer, Button, List } from "./style";
import { MdGridView, MdOutlineRssFeed, MdViewInAr } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsBoxArrowInRight, BsTags } from "react-icons/bs";


export const SideMenu = () => {
  return (
    <Container>
      <MenuContainer>
        <ul>
          <List>
            <Icon color={"#483c32"}>
              <MdGridView />
            </Icon>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <MdOutlineRssFeed />
            </Icon>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <MdViewInAr />
            </Icon>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <GoCalendar />
            </Icon>
          </List>
          
          <List>
            <Icon color={"#483c32"}>
              <BsTags />
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
