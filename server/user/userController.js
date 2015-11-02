var jwt = require('jwt-simple');
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

// for encoding the jwt tokens
var secret = 'a Secret';


module.exports = {

  // this is a sample GET endpoint
  sampleEndpoint: function(req, res) {
    console.log('GET request recieved for sampleEndpoint...');
    console.log('query string message: ' + req.query.message);
    res.send('message received.. sending your message back: ' + req.query.message);
  }

};







