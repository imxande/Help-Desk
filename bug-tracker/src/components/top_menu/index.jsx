import React from "react";
import { Container, LeftContent, RightContent, UL } from "./style";
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
                            <a href="#"> Tickets</a>
                        </li>
                    </ul>
                </LeftContent>
                <RightContent>
                    <UL>
                        <li>
                            <button>
                                <i>
                                    <AiOutlineSearch/>
                                </i>
                            </button>
                        </li>
                        <li>
                            <button>
                                <i>
                                    <WiDaySunnyOvercast/>
                                </i>
                            </button>
                        </li>
                        <li>
                            <button>
                                <i>
                                    <BiUserCircle/>
                                </i>
                            </button>
                        </li>
                    </UL>
                </RightContent>
            </Container>
        </div>
    )
}

export default TopMenu;