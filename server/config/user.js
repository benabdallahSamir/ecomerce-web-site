import bcrypt from "bcryptjs";
export async function generatePassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
export function generateUser(userInfo) {
  const { username, _id: id, email, isAdmin } = userInfo;
  return {
    username,
    id,
    email,
    isAdmin,
  };
}
export async function comparePasswords(hash, string) {
  return await bcrypt.compare(string, hash);
}
