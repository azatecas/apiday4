require('dotenv').config(); //read from a .env file located at the root of the project
//and merge the key/value pairs into process.env


const server = require('./api/server.js');

//make the port be assigned by ther Server
//heroku will place the .PORT evnironment value on their server
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
