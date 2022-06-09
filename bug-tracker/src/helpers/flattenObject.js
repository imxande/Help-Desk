// we will use this method to flatten our response object
export const flattenObject = (dataObj) => {
	// place holder
	const flattened = {};

	// get array of all the keys so we can use for each to grab every value per key
	Object.keys(dataObj).forEach((key) => {
		// grab value per key from our data object
		const value = dataObj[key];
		/**
		 * We will check if any of the values are objects.
		 * If so the we will use the assign object method to copy own properties from data object to flattenedObject
		 * and keep doing it recursively until we add everything flattened to our flattened object.
		 */
		typeof value === "object"
			? Object.assign(flattened, flattenObject(value))
			: (flattened[key] = value);
	});

	return flattened;
};
