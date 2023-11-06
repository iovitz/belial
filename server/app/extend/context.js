module.exports = {
  get $body() {
    return this.request.body;
  },
  get $query() {
    return this.request.query;
  },
  get $header() {
    return this.request.header;
  },
  success(data, msg = "success") {
    this.status = 200;
    this.body = {
      code: 0,
      data,
      msg,
    };
  },
  paramsError(msg = "Params Validation Failed") {
    this.status = 422;
    this.body = {
      code: 40022,
      msg,
    };
  },
  authError(msg = "Login Request") {
    this.status = 403;
    this.body = {
      code: 40003,
      msg,
    };
  },
  serverError(msg = "Internal Server Error", status = 500, code = 50000) {
    this.status = status;
    this.body = {
      code,
      msg,
    };
  },
};
