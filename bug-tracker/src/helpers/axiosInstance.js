import axios from "axios";

// our base url
const base_url = "https://ale-bug-tracker.herokuapp.com/";

// create axios instance
export default axios.create({
	baseURL: base_url,
	headers: {},
});
