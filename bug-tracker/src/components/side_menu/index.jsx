import React from "react";
import { Container, Icon, MenuContainer, Button, List, Text } from "./style";
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
            <Text>HQ</Text>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <MdOutlineRssFeed />
            </Icon>
            <Text>Feeds</Text>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <MdViewInAr />
            </Icon>
            <Text>Views</Text>
          </List>
          <List>
            <Icon color={"#483c32"}>
              <GoCalendar />
            </Icon>
            <Text>Calendar</Text>
          </List>

          <List>
            <Icon color={"#483c32"}>
              <BsTags />
            </Icon>
            <Text>Tags</Text>
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
