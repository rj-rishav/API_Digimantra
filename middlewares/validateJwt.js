import { verifyJwt } from "../utils/jwt.js";

export default function validateJwt(req, res, next) {
    try {
        const token = req.cookies["access-token"];

        if (!token) {
            return res.status(401).json({
                response_code: 401,
                message:
                    "No authentication token found. Please login to continue.",
            });
        }

        try {
            const decoded = verifyJwt(token);
            req.user = decoded; // Attach decoded user info to request
            return next();
        } catch (tokenError) {
            console.error(
                path.relative(process.cwd(), new URL(import.meta.url).pathname),
                error
            );

            return res.status(403).json({
                response_code: 403,
                message:
                    "Invalid or expired authentication token. Please login again.",
            });
        }
    } catch (error) {
        console.error(path.relative(process.cwd(), new URL(import.meta.url).pathname), error);
        return res.status(500).json({
            response_code: 500,
            message: "Internal server error during authentication.",
        });
    }
}
