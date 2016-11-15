const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dbTools = require('./modules/dbTools');

const app = express();
const port = 8080 || process.env.PORT;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(express.static('app/client/'))

  .post('/login', dbTools.user)

  .listen(port, () => {
    console.log(`Listening in ${port}`);
  });
