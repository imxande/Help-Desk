import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Container, Form, Label, Field, ButtonContainer, Button, Text, Footer, Span  } from "./style";
import {useAxios} from "../../hooks/useAxios";

const RegistrationForm = () => {
    // initial credentials 
    const initialCredentials = {
        firstName: "", 
        lastName:"",
        email: "",
        password: "",
        role:""
     }

    //  we will use navigate hook to redirect to login page after registration
    const history = useNavigate();

    // credentials will hold our registration form state
    const [credentials, setCredentials] = useState(initialCredentials);
    
    // on change handler function
    const handleChange = (e) => {
        // grab name and value from our target property in the event object
        const {name, value} = e.target;
        // update our credentials state
        setCredentials({
            // every time our handle change fires we will create a copy of the credentials state
            ...credentials, 
            // update the name and value properties in out target property in our event object
            [name]: value
        })
    }   

    const handleSubmit = (e) => {
        // prevent default behavior (e.g reloading)
        e.preventDefault();

        // creates a new user
        const newUser = {
            firstName: credentials.firstName, 
            lastName: credentials.lastName,
            email: credentials.email,
            password: credentials.password,
            role: "user"
        }
        // axios call will go here
        useAxios("https://ale-bug-tracker.herokuapp.com/api/auth/register", newUser)

        // redirect to login page
        history("/")
    }
   
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="firstname">
                    <Field
                        type="text"
                        name="firstName"
                        placeholder="Firstname"
                        value={credentials.firstName}
                        onChange={handleChange}
                    />
                </Label>
                <Label htmlFor="lastname">
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Lastname"
                        value={credentials.lastName}
                        onChange={handleChange}
                    />
                </Label>
                <Label htmlFor="email">
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={credentials.email}
                        onChange={handleChange}    
                    />
                </Label>
                <Label htmlFor="password">
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
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