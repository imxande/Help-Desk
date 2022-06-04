import React from "react";
import TicketForm from "../ticket_form";
import {Container,  Header, HeaderContainer, HeadingOne } from "../ticket/style";

const Ticket = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <HeadingOne>
                        Ticket form wired!
                    </HeadingOne>
                </Header>
            </HeaderContainer>
            <TicketForm />
        </Container>
    )
}

export default Ticket;