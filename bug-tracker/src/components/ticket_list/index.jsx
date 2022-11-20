import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { Container, LeftContent, RightContent } from "./style";

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
                console.log( "Response: ", response );
                setTickets( response.data );
            } )
            .catch( error => console.log( error ) );
    }, [] );

    return (
        <Container>
            <LeftContent></LeftContent>
            <RightContent></RightContent>
        </Container>
    );
};

export default TicketList;