import mongoose from "mongoose";
import Joi from "joi";

const userSchema = mongoose.Schema(
    {
        name: String,
        userName: {
            type: String,
            unique: true,
        },
        password: String,
        age: Number,
    },
    { timestamps: true }
);

export const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        userName: Joi.string().alphanum().min(3).max(12).required(),
        password: Joi.string().min(6).max(16).pattern(new RegExp('^[ A-Za-z0-9_@./#&+-]*$')).required(),
        age: Joi.number().min(18).max(110).required(),
    });
    return schema.validate(user);
};

export const UserModel = mongoose.model("UserModel", userSchema);
