import { useState, useEffect } from "react";

export const useAxios = (configObj) => {
	// state
	const [response, setResponse] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	// grab needed properties from the configuration object
	const { axiosInstance, method, url, requestConfig = {} } = configObj;

	useEffect(() => {
		// to prevent memory leak and to cancel request
		const controller = new AbortController();

		// our fetch data method that uses axios
		const fetchData = async () => {
			try {
				const res = await axiosInstance[method.toLowerCase()](url, {
					...requestConfig,
					signal: controller.signal,
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

		// fire our fetch data method
		fetchData();

		// when component unmounts let us stop the request
		return () => controller.abort();
	}, []);

	return [response, error, loading];
};
