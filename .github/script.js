const nodemailer = require("nodemailer");


module.exports = async function () {
const transporter = nodemailer.createTransport({
  service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
  auth: {
    type: "OAuth2",
    user: "yousefdawood31@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID,
    refreshToken: process.env.REFRESH,
  },
});    

  const info = await transporter.sendMail({
    from: '"Example Team" <team@yousefdawood31@gmail.com>', // sender address
    to: "yousefdawood31@gmail.com", // list of recipients
    subject: "Hello", // subject line
    html: "<b>Hello world?</b>", // HTML body
  });

  
}
