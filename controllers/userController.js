import UserModel from "../models/UserModel.js";

export const createUser = async (req, res) => {
    const userData = req.body;
    try {
        let response = await UserModel.create(userData);
        console.log(response)
        res.status(201).send({response_code: 201, message: 'User created successfully!'})
    } catch {
        (error) => {
            console.error(error);
            res.status(422).send({response_code: 422, message: 'Cannot create user'})
        }
    }
};
