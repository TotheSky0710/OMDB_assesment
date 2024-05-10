export const buildQuery = (query) => {
	let api_with_query = 'http://localhost:8000/api/movies/?';

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