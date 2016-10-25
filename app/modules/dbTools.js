const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://dbuser:testpass@ds021356.mlab.com:21356/todolist';

module.exports = {
  mongoClient,
  url,
};
