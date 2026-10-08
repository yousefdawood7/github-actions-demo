const nodemailer = require("nodemailer");

module.exports = async function () {


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "yousefdawood31@gmail.com",
      clientId: process.env.CLIENT_ID?.trim(),
      clientSecret: process.env.SECRET_ID?.trim(),
      refreshToken: process.env.TOKEN?.trim(),
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Example Team" <yousefdawood31@gmail.com>',
      to: "yousefdawood31@gmail.com",
      subject: "Hello",
      html: "<b>Hello world?</b>",
    });
    return info;
  } catch (err) {
    console.error(err.message, err.response || "");
    throw err;
  }
};