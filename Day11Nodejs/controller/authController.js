
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtToken = process.env.jwtToken;

const generateToken = (req, res) => {
  const { username, email } = req.query;
  const token = jwt.sign({ username, email }, jwtToken,{expiresIn:"1h"});
  res.json({ token });
};

export default { generateToken };
