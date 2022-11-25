import React, { useState } from "react";
import { Container, Icon, HiddenIcon, MenuContainer, Button, List, Text, UL } from "./style";
import { MdGridView, MdOutlineRssFeed, MdViewInAr } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsBoxArrowInRight, BsBoxArrowInLeft, BsTags } from "react-icons/bs";
import "../../index.css";

export const SideMenu = () =>
{
  const [ openDrawer, setOpenDrawer ] = useState( true );
  const [ showIcon, setShowIcon ] = useState( true );
  const [ flexItems, setFlexItems ] = useState( false );

  // click handler
  const handleClick = () =>
  {
    setOpenDrawer( !openDrawer );
    setShowIcon( !showIcon );
    setFlexItems( !flexItems );
  };

  return (
    <Container className={ openDrawer ? null : "open" }>
      <MenuContainer>
        <UL>
          <List className={ flexItems ? "flex_items" : null }>
            <Icon color={ "#483c32" }>
              <MdGridView />
            </Icon>
            <Text>HQ</Text>
          </List>
          <List className={ flexItems ? "flex_items" : null }>
            <Icon color={ "#483c32" }>
              <MdOutlineRssFeed />
            </Icon>
            <Text>Feeds</Text>
          </List>
          <List className={ flexItems ? "flex_items" : null }>
            <Icon color={ "#483c32" }>
              <MdViewInAr />
            </Icon>
            <Text>Views</Text>
          </List>
          <List className={ flexItems ? "flex_items" : null }>
            <Icon color={ "#483c32" }>
              <GoCalendar />
            </Icon>
            <Text>Calendar</Text>
          </List>

          <List className={ flexItems ? "flex_items" : null }>
            <Icon color={ "#483c32" }>
              <BsTags />
            </Icon>
            <Text>Tags</Text>
          </List>
        </UL>
      </MenuContainer>
      <Button>
        <Icon className={ showIcon ? null : "hidden" } >
          <BsBoxArrowInRight onClick={ handleClick } />
        </Icon>
        <HiddenIcon className={ showIcon ? "hidden" : "show" }>
          <BsBoxArrowInLeft onClick={ handleClick } />
        </HiddenIcon>
      </Button>
    </Container>
  );
};
