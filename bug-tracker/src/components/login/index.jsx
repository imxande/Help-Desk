import React from "react";
import { Container, Header, HeadingOne, Icon, Text } from "./style";
import {BsFillBugFill} from "react-icons/bs"

const Login = () => {
    return (
        <Container>
            <Header>
                <Icon>
                    <BsFillBugFill/>
                </Icon>
                <HeadingOne>Bug Tracker</HeadingOne>
                <Text>Log in to Bug Tracker to continue.</Text>
            </Header>
        </Container>
    )
}

export default Login;