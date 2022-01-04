import React from "react";
import { Container, Icon } from "./style";
import {MdDashboard} from "react-icons/md"

export const SideMenu = () => {
  return (
      <Container>
          <Icon>
              <MdDashboard/>
          </Icon>
      </Container>
  );
};

