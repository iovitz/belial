const Controller = require("../core/controller");

class BizController extends Controller {
  async createUploadVideo() {
    const { ctx } = this;
    ctx.validate(
      {
        title: { type: "string", required: true, max: 100, min: 2 },
        filename: { type: "string", required: true, max: 200, min: 3 },
      },
      ctx.$query,
    );

    const result = await this.service.vod.createUploadVideo(ctx.$query.title, ctx.$query.filename);
    ctx.success(result);
  }

  async refreshUploadVideo() {
    const { ctx } = this;
    ctx.validate(
      {
        videoId: { type: "string", required: true },
      },
      ctx.$query,
    );
    const res = await this.service.vod.refreshUploadVideo(ctx.$query.videoId);
    ctx.success(res);
  }
}

module.exports = BizController;
