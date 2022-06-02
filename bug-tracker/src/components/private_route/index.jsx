import React from "react"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // grab token
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="https://ale-bug-tracker.herokuapp.com/api/auth/customers/login"/>
}

export default PrivateRoute;