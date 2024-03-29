import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Label, Field, ButtonContainer, Button, Text, Footer, Span } from "./style";
import axios from "axios";
import { CustomerContext } from "../../context/CustomerContext";

const RegistrationForm = () =>
{
    // initial credentials 
    const initialCredentials = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: ""
    };

    //  let's bring our setUser function from our context api to add some user information from the form
    const { setCustomerInfo } = useContext( CustomerContext );

    //  we will use navigate hook to redirect to login page after registration
    const history = useNavigate();

    // credentials will hold our registration form state
    const [ credentials, setCredentials ] = useState( initialCredentials );

    // on change handler function
    const handleChange = ( e ) =>
    {
        // grab name and value from our target property in the event object
        const { name, value } = e.target;
        // update our credentials state
        setCredentials( {
            // every time our handle change fires we will create a copy of the credentials state
            ...credentials,
            // update the name and value properties in out target property in our event object
            [ name ]: value
        } );
    };

    const handleSubmit = ( e ) =>
    {
        // prevent default behavior (e.g reloading)
        e.preventDefault();

        // creates a new user
        const newUser = {
            ...credentials,
            role: "user"
        };

        // axios call will go here
        axios.post( "https://ale-bug-tracker.herokuapp.com/api/auth/register", newUser )
            .then( response =>
            {
                // add data to our context
                setCustomerInfo( response.data );
                // redirect to login page
                history( "/" );
            } )
            .catch( error => error );
    };

    return (
        <Container>
            <Form autoComplete="off" role="presentation" onSubmit={ handleSubmit }>
                <Label htmlFor="firstname">
                    <Field
                        type="text"
                        name="firstName"
                        placeholder="Firstname"
                        value={ credentials.firstName }
                        onChange={ handleChange }
                    />
                </Label>
                <Label htmlFor="lastname">
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Lastname"
                        value={ credentials.lastName }
                        onChange={ handleChange }
                    />
                </Label>
                <Label htmlFor="email">
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={ credentials.email }
                        onChange={ handleChange }
                    />
                </Label>
                <Label htmlFor="password">
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={ credentials.password }
                        onChange={ handleChange }
                    />
                </Label>
                <ButtonContainer>
                    <Button disabled={ !credentials.firstName || !credentials.lastName || !credentials.email || !credentials.password }>
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
    );
};

export default RegistrationForm;