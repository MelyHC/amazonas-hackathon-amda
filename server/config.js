const config = {
  port: process.env.PORT || 8084,
  allowedOrigins: [
    'http://127.0.0.1:5501',
    'http://localhost:5501',
    'https://amda-amazon.herokuapp.com',
    'https://melyhc.github.io'
  ],
  key_twilio: 'ACc8e338f32573ac5946f10cdd89eac7e6',
  pass_twilio: 'c035261ec13874994e1dc84d3f3b7f57',
  phone_send: '+12055256796',
  prefix: '+51'
}

module.exports = config;