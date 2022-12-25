import React, { useState } from "react";
import { Container, Subject, Priority } from "./style";
import { setStatus } from "../../helpers/setStatus";
import { v4 as uuidv4 } from 'uuid';
import PriorityDropDown from "../priorities_dropdown";
import "../../index.css";

const TicketLabel = ( props ) =>
{
    const [ visibleMenu, setVisibleMenu ] = useState( false );

    // console.log( props );
    const statusColor = setStatus( props.status );

    // create unique id
    const uniqueId = uuidv4();

    // priorities click handler
    const priorityClick = () =>
    {
        setVisibleMenu( !visibleMenu );
    };


    return (
        <>
            <Container>
                <Priority id={ uniqueId } onClick={ priorityClick } backgroundColor={ statusColor }>
                    { visibleMenu ? <PriorityDropDown /> : null }
                </Priority>
                <Subject>
                    { props.subject }
                </Subject>
            </Container>

        </>
    );
};

export default TicketLabel;