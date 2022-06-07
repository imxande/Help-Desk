import { decodeToken } from "react-jwt";

// method to get user info from token
export const getUser = () => {
	// grab token from local storage
	const token = localStorage.getItem("token");
	// decode token
	const payload = decodeToken(token);

	return payload;
};
