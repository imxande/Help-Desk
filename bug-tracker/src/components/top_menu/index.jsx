import React from "react";
import { Container, LeftContent, Link, RightContent, UL, Button, Icon } from "./style";
import {AiOutlineSearch} from "react-icons/ai"
import {WiDaySunnyOvercast} from "react-icons/wi"
import {BiUserCircle} from "react-icons/bi"

const TopMenu = () => {
    return (
        <div>
            <Container>
                <LeftContent>
                    <ul>
                        <li>
                            <Link href="#"> Tickets</Link>
                        </li>
                    </ul>
                </LeftContent>
                <RightContent>
                    <UL>
                        <li>
                            <Button>
                                <Icon>
                                    <AiOutlineSearch/>
                                </Icon>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Icon>
                                    <WiDaySunnyOvercast/>
                                </Icon>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Icon>
                                    <BiUserCircle/>
                                </Icon>
                            </Button>
                        </li>
                    </UL>
                </RightContent>
            </Container>
        </div>
    )
}

export default TopMenu;