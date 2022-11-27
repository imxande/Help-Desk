import React from "react";
import { Container, Subject, Priority } from "./style";
import { setStatus } from "../../helpers/setStatus";

const TicketLabel = ( props ) =>
{
    // console.log( props );
    const statusColor = setStatus( props.status );


    return (
        <Container>
            <Priority backgroundColor={ statusColor } />
            <Subject>
                { props.subject }
            </Subject>
        </Container>
    );
};

export default TicketLabel;