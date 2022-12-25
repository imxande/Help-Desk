import React from "react";
import { Container, Subject, Priority } from "./style";
import { setStatus } from "../../helpers/setStatus";
import { v4 as uuidv4 } from 'uuid';

const TicketLabel = ( props ) =>
{
    // console.log( props );
    const statusColor = setStatus( props.status );

    // create unique id
    const uniqueId = uuidv4();

    // priorities click handler
    const priorityClick = ( e ) =>
    {
        console.log( e.target );
    };


    return (
        <Container>
            <Priority id={ uniqueId } onClick={ priorityClick } backgroundColor={ statusColor } />
            <Subject>
                { props.subject }
            </Subject>
        </Container>
    );
};

export default TicketLabel;