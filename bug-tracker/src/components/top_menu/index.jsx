import React from "react";
import { Container, LeftContent, Link, RightContent, UL, Button, Icon , Form, Label, Select, Option, List} from "./style";
import {AiOutlineSearch} from "react-icons/ai"
import {WiDaySunnyOvercast} from "react-icons/wi"
import {BiUserCircle} from "react-icons/bi"

const TopMenu = () => {
    return (
        <div>
            <Container>
                <LeftContent>
                    <UL>
                        <List>
                            <Link href="#"> Tickets</Link>
                        </List>
                    </UL>
                </LeftContent>
                <RightContent>
                    <UL>
                        <List>
                            <Form>
                                <Label>Departments</Label>
                                <Select>
                                    <Option>All</Option>
                                    <Option>IT</Option>
                                    <Option>QA</Option>
                                    <Option>DevOps</Option>
                                    <Option>Product</Option>
                                </Select>
                            </Form>
                        </List>
                        <List>
                            <Button>
                                <Icon>
                                    <AiOutlineSearch/>
                                </Icon>
                            </Button>
                        </List>
                        <List>
                            <Button>
                                <Icon>
                                    <WiDaySunnyOvercast/>
                                </Icon>
                            </Button>
                        </List>
                        <List>
                            <Button>
                                <Icon>
                                    <BiUserCircle/>
                                </Icon>
                            </Button>
                        </List>
                    </UL>
                </RightContent>
            </Container>
        </div>
    )
}

export default TopMenu;