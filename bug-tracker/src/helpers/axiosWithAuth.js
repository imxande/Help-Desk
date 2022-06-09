import { axiosInstance } from "./axiosInstance";

export const axiosWithAuth = () => {
	// let grab the token from local storage
	const token = localStorage.getItem("token");

	// create axios instance
	const axios = axiosInstance();

	// add authentication header
	axios.defaults.headers["Authorization"] = token;

	return axios;
};
