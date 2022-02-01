import React from "react";
import {Container, Nav, Ul, List, Icon, Span, CircularSpan} from "./style"
import {AiOutlineSearch} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
import {BiMoon} from "react-icons/bi"


const AgentTools = () => {
    return (
        <Container>
            <Nav>
                <Ul>
                    <List>
                        <Span>
                            <Icon>
                                <AiOutlineSearch/>
                            </Icon>
                        </Span>
                    </List>
                    <List>
                        <Span>
                            <Icon>
                                <FaUserCircle/>
                            </Icon>
                        </Span>
                    </List>
                    <List>
                        <CircularSpan>
                            <Icon>
                                <BiMoon/>
                            </Icon>
                        </CircularSpan>
                    </List>
                </Ul>
            </Nav>
        </Container>
    )
}

export default AgentTools;