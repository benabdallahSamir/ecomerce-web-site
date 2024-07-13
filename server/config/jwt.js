import jwt from "jsonwebtoken";

export async function generateNewJwt(username, email) {
  const token = await jwt.sign({ username, email }, process.env.SECRET_KEY);
  return token;
}
export async function verifyToken(req, res, next) {
  const isCorrect = jwt.verify(token);
  if (!isCorrect) {
    res.status(500).send("something is rong relogin again ");
    return;
  }
  res.verify = true;
  next();
}
