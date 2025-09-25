const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const decodeToken = jwt.verify(token, process.env.jwt_secret_key);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

module.exports = { authentication };
