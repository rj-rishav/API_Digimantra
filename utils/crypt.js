configDotenv()
import bcrypt from "bcrypt"
import { configDotenv } from "dotenv"

const SALT = process.env.SECRET_SALT

export function encrypt(data) {
    return bcrypt.hashSync(data, SALT);
}
