const Service = require("egg").Service;
const { RPCClient } = require("@alicloud/pop-core");

let _vodClient = null;

module.exports = class SubscriptionService extends Service {
  get vodClient() {
    if (!_vodClient) {
      _vodClient = new RPCClient({
        accessKeyId: this.app.config.ali.accessKeyId,
        accessKeySecret: this.app.config.ali.accessKeySecret,
        endpoint: "https://vod.cn-shanghai.aliyuncs.com",
        type: "access_key",
        regionId: "cn-hangzhou",
        apiVersion: "2017-03-21",
      });
    }
    return _vodClient;
  }

  createUploadVideo(title, filename) {
    return this.vodClient.request("CreateUploadVideo", {
      Title: title,
      FileName: filename,
    });
  }

  refreshUploadVideo(videoId) {
    return this.vodClient.request("CreateUploadVideo", {
      VideoId: videoId,
    });
  }
};
