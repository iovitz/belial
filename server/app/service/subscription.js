const Service = require("egg").Service;

module.exports = class SubscriptionService extends Service {
  get User() {
    return this.app.model.User;
  }
  get Subscription() {
    return this.app.model.Subscription;
  }

  async getSubscribeRecord(userid, channelId) {
    const { Subscription } = this;
    const record = await Subscription.findOne({
      user: userid,
      channel: channelId,
    });
    return record;
  }

  async subscribe(userid, channelId) {
    const { User, Subscription } = this;
    const user = await User.findById(channelId);
    if (!user) {
      this.ctx.throw(422, "订阅的用户不存在");
    }
    const subscripetion = await Subscription.findOne({
      user: userid,
      channel: channelId,
    });
    // 如果已经订阅过了就直接返回结果
    if (!subscripetion) {
      user.subscribersCount++;
      await new Subscription({
        user: userid,
        channel: channelId,
      }).save();
      await user.save();
    }
    return {
      ...this.ctx.service.user.getUserInfoByModel(user),
      isSubscribed: true,
    };
  }

  async unsubscribe(userid, channelId) {
    const { User, Subscription } = this;
    const user = await User.findById(channelId);
    if (!user) {
      this.ctx.throw(422, "取消订阅的用户不存在");
    }
    const subscripetion = await Subscription.findOne({
      user: userid,
      channel: channelId,
    });
    // 如果已经订阅过了就直接返回结果
    if (subscripetion) {
      user.subscribersCount--;
      await Subscription.deleteOne({
        user: userid,
        channel: channelId,
      });
      await user.save();
    }
    return {
      ...this.ctx.service.user.getUserInfoByModel(user),
      isSubscribed: true,
    };
  }
};
