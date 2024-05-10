const express = require('express');
const bodyParser = require('body-parser');

const routes = {
	movies: require('./routes/movies'),
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function (req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getSearchResult) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.getSearchResult)
		);
	}
}

module.exports = app;
