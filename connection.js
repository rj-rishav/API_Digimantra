import mongoose from "mongoose";

export default async function dbConnectionHandler(){
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("DB connected!"))
        .catch(() => {
            console.log("DB not connected!\nExiting process");
            process.exit(1)
        });
}
