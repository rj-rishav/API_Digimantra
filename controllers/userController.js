import { UserModel } from "../models/UserModel.js";
import { cleanObject } from "../utils/cleanObject.js";

export const getAllUsers = async (req, res) => {
    try {
        let response = await UserModel.find({});
        console.log(response)
        res.status(200).send({
            response_code: 200,
            message: response.map((obj) => cleanObject(obj, ["name", "userName", "age"])),
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            response_code: 500,
            message: "Something went wrong!",
        });
    }
};

export const getUserByUsername = async (req, res) => {
    try {
        let response = await UserModel.findOne({
            userName: req.params.username,
        });

        if (!response) {
            res.status(404).send({
                response_code: 404,
                message: "User not found!",
            });
            return;
        }
        res.status(200).send({
            response_code: 200,
            message: cleanObject(response, ["name", "userName", "age"]),
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            response_code: 500,
            message: "Something went wrong!",
        });
    }
};

export const createUser = async (req, res) => {
    const userData = req.body;
    try {
        await UserModel.create(userData);
        res.status(201).send({
            response_code: 201,
            message: "User created successfully!",
        });
    } catch (error) {
        console.error(path.relative(), error);
        res.status(422).send({
            response_code: 422,
            message: "Username already exists!",
        });
    }
};

export const updateUser = async (req, res) => {
    const userData = req.body;
    try {
        let response = await UserModel.findOneAndUpdate(req?.params,userData);
        console.log(response)
        res.status(201).send({
            response_code: 201,
            message: "User updated successfully!",
        });
    } catch (error) {
        console.error(path.relative(), error);
        res.status(422).send( );
    }
};
