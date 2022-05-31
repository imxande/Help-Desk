import React from "react";
import { Container, Header, HeadingOne, Icon, Text } from "./style";
import {BsFillBugFill} from "react-icons/bs"
import LoginForm from "../login_form";

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
            <LoginForm/>
        </Container>
    )
}

export default Login;