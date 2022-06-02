import axios from "./axiosInstance";

export const axiosWithAuth = () => {
	// let grab the token from local storage
	const token = localStorage.getItem("token");

	// create axios instance
	const axiosInstance = axios;

	// add authentication header
	axiosInstance.headers["Authorization"] = token;

	return axiosInstance;
};
