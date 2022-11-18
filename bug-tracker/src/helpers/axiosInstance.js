import axios from "axios";

// our base url
// const base_url = "https://ale-bug-tracker.herokuapp.com/";
const developmentURL = "http://localhost:4000/";

// method that creates an axios instance
export const axiosInstance = () => {
	return axios.create({
		baseURL: developmentURL,
		headers: {
			Authorization: "",
		},
	});
};
