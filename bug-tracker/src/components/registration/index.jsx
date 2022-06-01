import React from "react";
import { RegistrationPage, Container, Header, Icon, HeadingOne, FormContainer } from "./style";
import {BsFillBugFill} from "react-icons/bs"
import RegistrationForm from "../registration_form";


const Registration = () => {
	return (
		<RegistrationPage>
			<Container>
                <Header>
                    <Icon>
                        <BsFillBugFill/>
                    </Icon>
                    <HeadingOne>
                        Create Your Account
                    </HeadingOne>
                </Header>
                <FormContainer>
                    <RegistrationForm/>
                </FormContainer>
            </Container>
		</RegistrationPage>
	);
};

export default Registration;
