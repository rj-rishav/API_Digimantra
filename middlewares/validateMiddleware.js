import { validateUser } from "../models/UserModel.js";

export const validator = (req, res, next) => {
    let { error } = validateUser(req.body);
    console.error(error);
    if (error)
        res.status(422).send({
            response_code: 422,
            message: "Cannot create user, fields incorrect",
        });
        
    else next();
};
