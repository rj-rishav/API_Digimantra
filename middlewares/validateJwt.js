import { verifyJwt } from '../utils/jwt.js'

export default function validateJwt(req, res, next) {
    if(req.headers['access-token'])
        if(verifyJwt(req.headers['access-token']))
            next()
        else
            res.status(106).json({response_code: 106, message: "Validation of the authentication token's signature failed!"})
}