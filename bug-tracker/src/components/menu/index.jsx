import React from "react";
import { Container, Icon, Header } from "./style";
import {MdDashboard} from "react-icons/md"
import {VscDebug} from "react-icons/vsc"

export const SideMenu = () => {
  return (
      <Container>
          <Header>
            <Icon color={ "darkgreen"}>
                <VscDebug/>
            </Icon>
          </Header>
          <Icon color={"#1479ff"}>
              <MdDashboard/>
          </Icon>
      </Container>
  );
};

