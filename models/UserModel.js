import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            min: 3,
            unique: true
        },
        age: {
            type: Number,
            required: true,
            max: 110,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "others"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("UserModel", userSchema);
