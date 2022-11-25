import React from "react";
import { Container, Subject } from "./style";

const TicketLabel = ( props ) =>
{
    // console.log( props );
    return (
        <Container>
            <Subject>
                { props.subject }
            </Subject>
        </Container>
    );
};

export default TicketLabel;