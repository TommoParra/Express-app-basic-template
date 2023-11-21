//Creation and configuration of the SERVER

const http = require('http');
const app = require('./src/app');

//.env config.
require('dotenv').config();

//Server creation
const server = http.createServer(app);

//Port configuration
const PORT = process.env.PORT || 3000;
server.listen(PORT);

//Listeners
server.on('listening', () => {
    console.log(`Server be up, listening at ${PORT}`);
});

server.on('error', (error) => {
    console.log(`Something went wrong... ${error}`);
})