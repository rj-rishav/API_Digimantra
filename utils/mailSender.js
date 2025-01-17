import { mailer } from "../index.js";
import { mailTemplate } from "../templates/mailTemplates.js";

export default function mailSender(emailFor, emailTo) {
    let template = mailTemplate[emailFor];
    template["to"] = emailTo;
    mailer.sendMail(template);
    console.log("Mail sent!")
}
