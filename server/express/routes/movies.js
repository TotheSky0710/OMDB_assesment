require('dotenv').config();
const { validation, buildQuery } = require('../helpers');

async function getSearchResult(req, res) {
	const { query } = req;

	const errors = validation(query);

	if (errors.length > 0) {
		res.status(400).json(errors);
		return;
	}

	const OMDB_API = buildQuery(query);
	console.log(OMDB_API)
	try {
		const result = await fetch(OMDB_API);
		const data = await result.json();
		res.status(200).json(data);
	} catch (error) {
		console.log('Network Error!')
	}
};

module.exports = {
	getSearchResult,
};
