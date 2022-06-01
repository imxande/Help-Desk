import React from "react";
import { RegistrationPage, Container, Header, Icon, HeadingOne, FormContainer } from "./style";
import {BsFillBugFill} from "react-icons/bs"


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
                    Lets Go
                </FormContainer>
            </Container>
		</RegistrationPage>
	);
};

export default Registration;
