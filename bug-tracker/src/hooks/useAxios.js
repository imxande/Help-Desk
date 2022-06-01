import axios from "axios";

export const useAxios = (url, user) => {
	axios
		.post(url, user)
		.then((customer) => {
			// we need to figure out what do we want to do at this point
			console.log(customer);
		})
		.catch((error) => console.log(error));
};
