configDotenv()
import { configDotenv } from "dotenv"
import jsonwebtoken from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET;

export function signJwt(payload) {
    payload.iat = Date.now()
    return  jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '1d'});
}

export function verifyJwt(token) {
    return jsonwebtoken.verify(token, JWT_SECRET)
}