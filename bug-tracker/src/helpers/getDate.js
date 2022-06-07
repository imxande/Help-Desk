export const getDate = () => {
	// place holder
	const dateTime = {};
	let currentMonth = "";
	let standardHours = null;

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	//  grab date and time
	const today = new Date();
	const month = today.getMonth();
	const day = today.getDay();
	const year = today.getFullYear();
	const hours = today.getHours();
	const minutes = today.getMinutes();

	// convert the number of the month to its abbreviation string
	for (let i = months.length; i > 0; i--) {
		let abbreviation = months[i];

		// check if month matcher with index
		if (month === i) {
			currentMonth += abbreviation;
			break;
		}
	}

	// convert military time to standard
	hours > 12 ? (standardHours = hours - 12) : (standardHours = hours);

	// populate our date time
	dateTime["currentMonth"] = currentMonth;
	dateTime["day"] = day;
	dateTime["year"] = year;
	dateTime["hours"] = standardHours;
	dateTime["minutes"] = minutes;

	return dateTime;
};
