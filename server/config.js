const dotenv = require ('dotenv'); 
dotenv.config (); 

const config = {
  port: process.env.PORT || 8084,
  allowedOrigins: process.env.LOCATION.split(','),
  prefix: '+51'
}

module.exports = config;