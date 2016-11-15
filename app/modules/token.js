const jwt = require('jsonwebtoken');

const secret = 'velkanenSecret';

function createToken(user) {
  const token = jwt.sign(
    user.username,
    secret
  );
  return token;
}

module.exports = {
  createToken,
};
