const passport = require("passport");
const jwt = require("jsonwebtoken");
// ->to create JWT token
const generateTokenResponse = (
  { _id, email, rememberMe, name },
  verify = false
) => {
  let expiryTime = "1d";
  if (rememberMe) expiryTime = "365d";
  return {
    token: jwt.sign({ _id, email, name, verify }, process.env.JWT_SECRET, {
      expiresIn: expiryTime,
    }),
    userId: _id,
  };
};
// ->to check wether user has authentication token
const authenticateAuthToken = passport.authenticate("jwt", { session: false });

module.exports = { generateTokenResponse, authenticateAuthToken };
