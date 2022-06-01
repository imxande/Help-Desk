import axios from "axios";

export const useAxios = (url, user) => {
	axios
		.post(url, user)
		.then((customer) => {
			console.log(customer);
		})
		.catch((error) => console.log(error));
};
