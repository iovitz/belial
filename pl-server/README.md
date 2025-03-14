# 项目文档

[TOC]

## 开发启动

STEP 1：安装pnpm，项目使用pnpm管理依赖包，需要先安装pnpm

```shell
npm i pnpm -g
```

STEP 2：使用pnpm安装依赖

```shell
pnpm install
```

STEP 3：准备Secret Key

项目中用到了一些三方服务和数据库，使用需要申请这些服务的密钥，项目中用到的密钥统一放在`.env`文件中，如果想使用自己的密钥可以替换`.env`文件中的内容

* Github Token（没有也没关系，只要不访问Github相关接口就不会有问题）
  * GITHUB_TOKEN：（获取提交信息，读取更新日志）：需要具有读取Commit信息的权限
* [Multiavatar](https://multiavatar.com/)生成随机头像）
  * SECRET_MULTIAVATAR：Multiavatar的API Access Key
* MySQL数据库
  * DB_MYSQL_HOST：数据库主机地址
  * DB_MYSQL_PORT：数据库主机端口
  * DB_MYSQL_DB_NAME：数据库名
  * DB_MYSQL_USER：数据库用户名
  * DB_MYSQL_PASSWORD：数据库密码

STEP 4：运行项目

```shell
pnpm dev
```

## 技术选型

* MidwayJS
  * [midwayjs](https://midwayjs.org/docs/intro)
  * [@midwayjs/swagger](https://midwayjs.org/docs/decorator_index#midwayjsswagger)
  * [@midwayjs/typeorm](https://midwayjs.org/docs/extensions/orm)
  * [typeorm](https://typeorm.io/)
  * [@midwayjs/validate](https://midwayjs.org/docs/hooks/validate)
  * [zod](https://zod.dev/)
  * [@midwayjs/socketio](https://midwayjs.org/docs/extensions/socketio)
  * [socket.io](https://socket.io/docs/v4/)
* 其他
  * [lodash工具库](https://www.npmjs.com/package/lodash)
  * [nanoid生成唯一ID](https://www.npmjs.com/package/nanoid)
  * [svg-captcha生成验证码](https://www.npmjs.com/package/svg-captcha)
  * [crypto-js字符串加密](https://www.npmjs.com/package/crypto-js)
  * [bcryptjs密码加密](https://www.npmjs.com/package/bcryptjs)
  * [octokit](https://www.npmjs.com/package/octokit)

## 项目规范

### 项目配置

项目中的SecretKey统一放在环境变量中，开发环境下会使用`dotenv`加载`.env`文件，开发配置可以直接把SecretKey放到`.env`文件里，生产环境不会加载`.env`文件，建议放到Linux的环境变量中进行读取

### 代码规范

---

### 日志

打印日志时避免日志中出现换行符号，不利于日志查看

### 数据库定义规范

思考数据量的大小

### 依赖规范

所有的依赖必须指定版本

### Git规范

#### 分支模型

##### 开发分支develop

主要代码分支

##### 线上分支release-XX

线上代码分支

##### 需求分支feat-xx

##### BUG修复分支fix-xx

##### 重构分支refactor-xx

#### 提交信息规范

> [提交信息规范文档](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

### 发版规范
