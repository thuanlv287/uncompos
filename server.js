const express = require('express');
const app = express();
/**
* Express configuration.
*/
console.log('__dirname', __dirname);
app.use('/', express.static(`${__dirname}/dist`));
app.get('*', function (request, response) {
 response.sendFile(`${__dirname}/dist/index.html`);
});
/**
* Start Express server.
*/
app.listen(3000, (error) => {
 console.log('App runing in port:3000');
 console.log('Press CTRL-C to stop\n');
 if (error) throw error
});