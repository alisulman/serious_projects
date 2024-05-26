import nodemailer from "nodemailer";

const EmailSender = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "alisulman1470@gmail.com",
      pass: "kpzl cnkp bybc csxh",
    },
  });
  const info = await transporter.sendMail({
    from: '"Ali Sulman 👻" <alisulman1470@gmail.com>',
    to: "adrive1470@gmail.com", 
    subject: "Verify your account", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info)
};

export default EmailSender;
