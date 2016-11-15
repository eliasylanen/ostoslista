const mongoClient = require('mongodb').MongoClient;
const token = require('./token');

const url = 'mongodb://relaviteAdmin:WznJewux@ds017231.mlab.com:17231/shoppinglist';

function user(req, res, next) {
  console.log(req.body);
  mongoClient.connect(url, (err, db) => {
    if (err) next({ success: false, msg: 'Error connecting to db' });
    db.collection('users').findOne({ username: req.body.name })
      .then((reqData) => {
        if (!reqData) {
          db.collection('users').insertOne({
            username: req.body.name,
            lists: [],
          })
            .then((insertData) => { res.json(token.createToken(insertData.ops[0])); });
        } else {
          res.json(token.createToken(reqData));
        }
      })
      .catch((queryErr) => { next({ success: false, msg: queryErr }); });
  });
}

module.exports = {
  user,
};
