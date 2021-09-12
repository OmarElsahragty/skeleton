import NodeMailer from "nodemailer";
import { passCodeMailTemplate } from "../utilities";
import Config from "../../../config";

export default async function sendMail(data) {
  try {
    const transporter = NodeMailer.createTransport({
      host: Config.SMTP.Host,
      port: Config.SMTP.Port,
      secure: false,
      auth: {
        user: Config.SMTP.User,
        pass: Config.SMTP.Password,
      },
    });

    await transporter.sendMail(data);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const sendPassCodeMail = async (
  subject,
  sendTo,
  name,
  message,
  passCode
) => {
  try {
    await sendMail({
      from: Config.App.Mail,
      to: sendTo,
      subject: `${Config.App.Name} ${subject}`,
      html: passCodeMailTemplate(subject, name, message, passCode),
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
