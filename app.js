/**
 * Load environment variables
 */
require('dotenv').load();

/**
 * load app configs
 */
const app = require('./config/server');

app.listen(process.env.PORT || 8080, () => {
    console.log("Server ON " + (process.env.PORT || 8080));
});

