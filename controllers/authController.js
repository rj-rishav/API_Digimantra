import { UserModel } from "../models/UserModel.js";
import { encrypt } from "../utils/crypt.js";

export async function signupHandler(req, res) {
    let response = await UserModel.findOne({
        userName: req.body?.userName,
    });

    if (response) {
        res.status(409).send({
            response_code: 409,
            message: "User alreadyy exists!",
        });
        return;
    }
    let userData = req.body;
    userData["password"] = encrypt(userData["password"]);
    try {
        await UserModel.create(userData);
        res.status(201).send({
            response_code: 201,
            message: "User created successfully!",
        });
    } catch (error) {
        console.error(path.relative(), error);
        res.status(500).send({
            response_code: 500,
            message: "Cannot create user, something went wrong!",
        });
    }
}

export async function signinHandler(req, res) {
    let response = await UserModel.findOne({
        userName: req.body?.userName,
    });

    if (!response) {
        res.status(404).send({
            response_code: 404,
            message: "User not found!",
        });
        return;
    }
    let userData = req.body;
    if (encrypt(userData["password"]) === response.password)
        res.status(200).send({
            response_code: 200,
            message: "User verified successfully!",
        });
    else {
        res.status(401).send({
            response_code: 401,
            message: "Password is incorrect!",
        });
    }
}
