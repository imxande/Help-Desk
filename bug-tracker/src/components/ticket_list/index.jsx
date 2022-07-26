import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const TicketList = ( { userInfo } ) =>
{
    /* eslint-disable */
    const [ tickets, setTickets ] = useState( [] );
    const [ customerId, setCustomerId ] = useState( userInfo.subject );

    useEffect( () =>
    {
        axiosWithAuth()
            .get( "https://ale-bug-tracker.herokuapp.com/api/customer/tickets", customerId )
            .then( response =>
            {
                console.log( "Response: ", response );
                setTickets( response.data );
            } )
            .catch( error => console.log( error ) );
    }, [] );

    return (
        <div>Tickets go in here!</div>
    );
};

export default TicketList;