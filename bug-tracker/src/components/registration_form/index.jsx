import React from "react";
import {Link} from "react-router-dom";
import { Container, Form, Label, Field, ButtonContainer, Button, Text, Footer, Span  } from "./style";

const RegistrationForm = () => {
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
                <ButtonContainer>
                    <Button>
                        Continue
                    </Button>
                </ButtonContainer>
                <Footer>
                    <Text>
                        Already have an account? 
                    </Text>
                    <Link to="/">
                        <Span>
                            Log in
                        </Span>
                    </Link>
                </Footer>
                    
                
            </Form>
        </Container>
    )
}

export default RegistrationForm;