import jwt from "jsonwebtoken";

export async function generateNewJwt(id) {
  const token = await jwt.sign({ id }, process.env.SECRET_KEY);
  return token;
}
export async function decodingJwt(token) {
  const decoding = jwt.decode(token);
  return decoding;
}