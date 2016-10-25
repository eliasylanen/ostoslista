const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 8080 || process.env.PORT;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(express.static('app/client'))

  .listen(port, () => {
    console.log(`Listening in ${port}`);
  });
