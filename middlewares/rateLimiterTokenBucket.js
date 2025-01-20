const BUCKET_SIZE = 3;

export default function rateLimiter(req, res, next) {
    if (BUCKET_SIZE > global.requestCounter) {
        global.requestCounter++;
        return next();
    }
    res.status(503).send({ response_code: 503, message: "Too many request!" });
}
