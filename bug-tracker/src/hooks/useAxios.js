import axios from "axios";

export const useAxios = (url, state) => {
	axios
		.post(url, state)
		.then((user) => {
			console.log("Response:", user);
		})
		.catch((error) => console.log(error));
};
