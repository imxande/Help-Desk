import React from "react";
import {Container, Nav, Ul, List, A} from "./style"

const AgentTools = () => {
    return (
        <Container>
            <Nav>
                <Ul>
                    <List><A href="#">Search Bar</A></List>
                    <List> <A href="#">Avatar</A></List>
                    <List> <A href="#">Button</A></List>
                </Ul>
            </Nav>
        </Container>
    )
}

export default AgentTools;