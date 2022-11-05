const { connect, connection } = require('mongoose');

connect('mongodb://localhost/SocialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
