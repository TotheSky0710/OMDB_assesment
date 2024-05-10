const app = require('./express/app');
require('dotenv').config();

async function init() {

	const PORT = process.env.PORT || 8000;

	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/users'.`);
	});
}

init();
