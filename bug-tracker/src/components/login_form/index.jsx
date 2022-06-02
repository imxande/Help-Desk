import React, { useState } from "react";
import {
	Container,
	Form,
	Label,
	Field,
	ForgotButton,
	ContinueButton,
	Text,
	SignUpButton,
	SignUpContent,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
	// our form state
	const [authentication, setAuthentication] = useState({
		email: "",
		password: "",
	});

	// we will use this navigation hook to redirect to dashboard once user successfully logs in
	const history = useNavigate();

	// handle the changes in the form
    const handleChange = (e) => {
        // grab changes
        const {name, value} = e.target;

        // let update our state
        setAuthentication({
            ...authentication, 
            [name]: value
        })
    } 
	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://ale-bug-tracker.herokuapp.com/api/auth/customers/login", authentication)
			.then((response) => {
				console.log(response.data);
                // grab token
                const {token} = response.data;
                // store token 
                localStorage.setItem("token", token);

                // and redirect to the users dashboard
				history("/dashboard")
			})
			.catch((error) => error);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="email">
					<Field
						name="email"
						type="email"
						placeholder="Email address"
						value={authentication.email}
						onChange={handleChange}
					/>
				</Label>
				<Label htmlFor="password">
					<Field 
                        name="password"
						type="password"
						placeholder="Password"
						value={authentication.password}
						onChange={handleChange}
                    />
				</Label>
				<ForgotButton>Forgot password?</ForgotButton>
				<ContinueButton disabled={!authentication.email || !authentication.password}>
                    Continue
                </ContinueButton>
				<SignUpContent>
					<Text>Do you have an account?</Text>
					<SignUpButton>
						<Link to="/registration">Sign Up</Link>
					</SignUpButton>
				</SignUpContent>
			</Form>
		</Container>
	);
};

export default LoginForm;
