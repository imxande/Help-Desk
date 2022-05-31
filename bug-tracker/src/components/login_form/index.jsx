import React from "react";
import { Container, Form, Label, Field, ForgotButton, ContinueButton, Text, SignUpButton, SignUpContent } from "./style";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <Container>
            <Form>
                <Label htmlFor="email">
                    <Field
                        placeholder="Email address"
                    />
                </Label>
                <Label htmlFor="password">
                    <Field
                        placeholder="Password"
                    />
                </Label>
                <ForgotButton>
                    Forgot password?
                </ForgotButton>
                <ContinueButton>
                    Continue
                </ContinueButton>
                <SignUpContent>
                    <Text>
                        Do you have an account?
                    </Text>
                    <SignUpButton>
                        <Link to="/registration">
                            Sign Up
                        </Link>
                    </SignUpButton>
                </SignUpContent>
            </Form>
        </Container>
    )
}

export default LoginForm;