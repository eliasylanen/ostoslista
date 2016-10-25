const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dbTools = require('./modules/dbTools');

const app = express();
const port = 8080 || process.env.PORT;

dbTools.mongoClient.connect(dbTools.url, (err, db) => {
  if (err) return;
  db.collection('elias').find().toArray((result) => {
    console.log(result);
  });
});
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(express.static('app/client/'))

  .listen(port, () => {
    console.log(`Listening in ${port}`);
  });
