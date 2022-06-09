// we will use this method to set key value pairs to windows local storage
export const setValues = (data) => {
	// iterate over every key in the data object
	for (const [key, value] of Object.entries(data)) {
		// store our key value pair in the local storage
		localStorage.setItem(key, value);
	}
};
