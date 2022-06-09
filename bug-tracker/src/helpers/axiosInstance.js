import axios from "axios";

// our base url
const base_url = "https://ale-bug-tracker.herokuapp.com/";

// method that creates an axios instance
export const axiosInstance = () => {
	return axios.create({
		baseURL: base_url,
		headers: {
			Authorization: "",
		},
	});
};
