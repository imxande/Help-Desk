import { useState, useEffect } from "react";

export const useAxios = () => {
	// state
	const [response, setResponse] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const [controller, setController] = useState();

	// our fetch data method that uses axios
	const fetchData = async (configObj) => {
		// grab needed properties from the configuration object
		const { axiosInstance, method, url, requestConfig = {} } = configObj;

		try {
			setLoading(true);
			// to prevent memory leak and to cancel request
			const ctrl = new AbortController();
			// update controller state
			setController(ctrl);
			// make the request
			const res = await axiosInstance[method.toLowerCase()](url, {
				...requestConfig,
				signal: ctrl.signal,
			});

			console.log(res);
			// update our response state
			setResponse(res);
		} catch (error) {
			console.log(error);
			// update our error state
			setError(error);
		} finally {
			// update loading state
			setLoading(false);
		}
	};

	useEffect(() => {
		console.log(controller);
		// when component unmounts let us stop the request
		return () => controller.abort();
	}, [controller]);

	return [response, error, loading, fetchData];
};
