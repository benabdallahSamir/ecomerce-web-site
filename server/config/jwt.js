import jwt from "jsonwebtoken";

export async function generateNewJwt(username, email) {
  const token = await jwt.sign({ username, email }, process.env.SECRET_KEY);
  return token;
}
