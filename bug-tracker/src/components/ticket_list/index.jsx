import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../helpers/axiosWithAuth";

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("https://ale-bug-tracker.herokuapp.com/api/tickets")
        .then(response => {
            console.log("Response: ", response)
            setTickets(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>{tickets}</div>
    )
}

export default TicketList;