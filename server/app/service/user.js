const Service = require("egg").Service;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { pick } = require("lodash");

module.exports = class UserService extends Service {
  get User() {
    return this.app.model.User;
  }

  createToken(data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn,
    });
  }

  comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const pass = bcrypt.hash(password, salt);
    return pass;
  }

  findByUsername(username) {
    return this.User.findOne({
      username,
    });
  }

  findByEmail(email) {
    return this.User.findOne({
      email,
    });
  }

  findById(id) {
    return this.User.findOne({
      _id: id,
    });
  }

  createUser(data) {
    return new this.User(data).save();
  }

  async updateUser(data) {
    return this.User.findByIdAndUpdate(this.ctx.userid, data, {
      new: true,
    });
  }

  getUserInfoByModel(userModel) {
    return {
      user: {
        ...pick(userModel, [
          "username",
          "email",
          "channelDescription",
          "avatar",
          "subscribersCount",
        ]),
      },
    };
  }
};
