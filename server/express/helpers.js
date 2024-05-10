function validation(query) {
	const errors = [];

	const { s, y } = query;

	if (!s || s.length == 0) {
		errors.push({ msg: 'You need to input something for search!' });
	}

	if (!(typeof y === 'number')) {
		errors.push({ msg: 'You need to input something for search!' });
	} 

	return errors;
}

function buildQuery(query) {
	let api_with_query = `${process.env.OMDB_BASE_API_ENDPOINT}?apiKey=${process.env.OMDB_API_KEY}`;

	try {
		Object.keys(query).forEach(key => {
			console.log(key, query[key]);
			api_with_query += `&${key}=${query[key]}`;
		});
	} catch (error) {
		leave_log(error);
	}

	return api_with_query;
}

function leave_log(error) {
	console.log(error);
}

module.exports = { validation, buildQuery };
