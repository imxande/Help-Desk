import React from "react";
import { Container, Form, Label, Field, ForgotButton, SubmitButton, Text, SignUpButton, SignUpContent } from "./style";

const LoginForm = () => {
    return (
        <Container>
            <Form>
                <Label htmlFor="email">
                    <Field></Field>
                </Label>
                <Label htmlFor="password">
                    <Field></Field>
                </Label>
                <ForgotButton>
                    Forgot password?
                </ForgotButton>
                <SubmitButton>
                    Submit
                </SubmitButton>
                <SignUpContent>
                    <Text>
                        Do you have an account?
                    </Text>
                    <SignUpButton>Sign Up</SignUpButton>
                </SignUpContent>
            </Form>
        </Container>
    )
}

export default LoginForm;