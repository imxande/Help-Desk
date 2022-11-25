import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { Container } from "./style";
import TicketLabel from "../ticket_label";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const TicketList = ( { userInfo } ) =>
{
    /* eslint-disable */
    const [ tickets, setTickets ] = useState( [] );
    const [ customerId, setCustomerId ] = useState( userInfo.subject );

    // place holders
    const developmentURL = "http://localhost:4000/api/tickets/customer/";
    // const baseURL  = "https://ale-bug-tracker.herokuapp.com/api/tickets/customer/"

    useEffect( () =>
    {
        axiosWithAuth()
            .get( `${ developmentURL }${ customerId }` )
            .then( response =>
            {
                setTickets( response.data );
            } )
            .catch( error => console.log( error ) );
    }, [] );

    return (
        <div>
            { tickets.map( ( ticket, index ) =>
            {
                return (
                    <Container>
                        <TicketLabel
                            key={ index }
                            subject={ ticket.subject }
                            status={ ticket.status }
                            priority={ ticket.priority }
                            body={ ticket.body }
                            customerId={ ticket.customer_id }
                            date={ ticket.date }
                            ticketId={ ticket.ticket_id }
                        />
                    </Container>

                );
            } ) }
        </div>

    );
};

export default TicketList;