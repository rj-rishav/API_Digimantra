// Example of Middleware

export default function noPathMiddleware(req, res, next) {
    let statusCode = 404;
    res.status(statusCode).send({response_code: statusCode, message: "Not Found!"})
    next();
}
