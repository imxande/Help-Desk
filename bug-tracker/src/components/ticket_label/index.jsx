import React, { useState, useEffect, useRef } from "react";
import { Container, Subject, Priority, Date } from "./style";
import { setStatus } from "../../helpers/setStatus";
import { v4 as uuidv4 } from 'uuid';
import PriorityDropDown from "../priorities_dropdown";
import "../../index.css";

const TicketLabel = ( props ) =>
{
    const [ visibleMenu, setVisibleMenu ] = useState( false );
    const prioritiesRef = useRef();

    console.log( props );
    const statusColor = setStatus( props.status );
    const priority = props.priority;

    // create unique id
    const uniqueId = uuidv4();

    // priorities click handler
    const priorityClick = () =>
    {
        setVisibleMenu( !visibleMenu );
    };

    // add window click event when component mounts
    useEffect( () =>
    {
        // clicking anywhere outside the menu handler
        const closeDropDown = ( e ) =>
        {
            /* This event fires when component mounts, at the same time in which
            priority click fires, thus we need to make sure to fire this event
            only when the event path is not the same as the priority event path. We 
            are using the use ref hook to access a DOM element (priority) directly.
            */
            if ( e.path[ 0 ] !== prioritiesRef.current )
            {
                setVisibleMenu( false );
            }
        };

        // bind event
        document.body.addEventListener( "click", closeDropDown );

        // remove event listener 
        return () =>
        {
            document.body.removeEventListener( "click", closeDropDown );
        };

    }, [] );


    return (
        <>
            <Container>
                <Priority data-title={ priority }
                    ref={ prioritiesRef }
                    id={ uniqueId }
                    onClick={ priorityClick }
                    backgroundColor={ statusColor }
                >
                    { visibleMenu ? <PriorityDropDown /> : null }
                </Priority>
                <Subject>
                    { props.subject }
                </Subject>
            </Container>
            <Date date-time={ props.date }>{ props.date }</Date>

        </>
    );
};

export default TicketLabel;