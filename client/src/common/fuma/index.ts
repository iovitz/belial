export class Fuma {
  // 用户ID
  private userid: string

  // 产品ID
  private appid: number

  constructor() {
    this.userid = ''
    this.appid = 142
  }

  init() {}

  // 初始化静态资源监控
  initResourceMonitor() {}

  // JS Error监控
  initJsErrorMonitor() {}

  // 初始话网络请求监控
  initRequestMonitor() {}

  // 初始化页面渲染监控
  pageLoaded() {
    // 上报TTU
  }

  // 上报自定义事件
  report() {}

  // store
}
