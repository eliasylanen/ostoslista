const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://relaviteAdmin:WznJewux@ds017231.mlab.com:17231/shoppinglist';

function user(req, res) {
  console.log(req.body);
  mongoClient.connect(url, (err, db) => {
    db.collection('users').findOne({ username: req.body.name })
      .then(reqData => {
        if (!reqData) {
          db.collection('users').insertOne({
            username: req.body.name,
            lists: [],
          })
            .then(insertData => { console.log(insertData.ops[0]); });
        } else console.log(reqData);
      });
  });
}

module.exports = {
  mongoClient,
  url,
  user,
};
