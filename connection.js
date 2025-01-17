import mongoose from "mongoose";
import nodemailer from "nodemailer"

export async function dbConnectionHandler(){
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("DB connected!"))
        .catch(() => {
            console.log("DB not connected!\nExiting process");
            process.exit(1)
        });
}

export function smtpConnectionHandler() {
    const smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    console.log("SMTP connected!")

    return smtp;

    // Test Mail

    // smtp.sendMail({
    //     from: "Maddison Foo Koch 👻 no-reply@digi.com>", // sender address
    //     to: ", ", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   })
}
