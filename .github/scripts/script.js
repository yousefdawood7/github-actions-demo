const nodemailer = require("nodemailer");


module.exports = function() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "yousefdawood31@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    transporter.sendMail({
        from: '"Yousef Dawood" <hello@yousefdawood31@gmail.com>', 
        to: "yousefdawood31@gmail.com", 
        subject: "Hello From YD7", // subject line
        
        html: "<b>Hello world?</b>", // HTML body
    });

}