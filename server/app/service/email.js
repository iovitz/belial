const Service = require("egg").Service;
const nodemailer = require("nodemailer");

let _transporter = null;

module.exports = class MailService extends Service {
  get transporter() {
    if (!_transporter) {
      _transporter = nodemailer.createTransport({
        host: this.config.email.host,
        port: 465,
        secure: true,
        auth: {
          user: this.config.email.user,
          pass: this.config.email.pass,
        },
      });
    }
    return _transporter;
  }
  sendMail(content) {
    // 获取当前时间
    // const sendTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    // 填写发件人, 收件人
    const mailOptions = {
      // 发件人地址
      from: "hahabiz@yeah.net",
      // 收件人列表, 向163邮箱, gmail邮箱, qq邮箱各发一封
      to: "256899231@qq.com",
      // 邮件主题
      subject: "用nodemailer发出的邮件~",
      // 文字内容
      text: content,
      // html内容
      // html: "<b>发送时间:" + sendTime + "</b>",
      // 附件内容
      // attachments: [
      //   // {
      //   //   filename: "package.json",
      //   //   path: path.resolve(__dirname, "package.json"),
      //   // },
      // ],
    };

    // 发送邮件
    this.transporter.sendMail(mailOptions, (error, info) => {
      console.log("###", error, info);
      if (error) {
        return console.log(error);
      }
      console.error("成功", info);
    });
    console.log("###", content);
  }
};
