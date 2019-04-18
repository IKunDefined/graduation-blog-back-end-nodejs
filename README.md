# Graduation blog back end for graduation design

为毕业设计而制作的个性化分享博客**后台数据处理部分**

## 技术选型

### 核心技术

* Node.js
* Express
* MongoDB

### 相关辅助

* mongoose
  * 与数据库进行交互
* cors
  * 解决跨域问题
* body-parser
  * 解析前端页面发来的数据

## 项目部署

预装环境`git`、`nodejs`、`mongodb`

1. `git clone https://github.com/IKunDefined/graduation-blog-back-end-nodejs.git`
2. `mongod --dbpath="文件目录路径的绝对地址/db"`(db文件夹需要新建)
3. `npm install`
4. `npm install nodemon -g`
5. `npm start`
6. 后台运行，通过`http://localhost:4000/`作为根路径访问

> 需搭配`graduation-blog-front-end-vue`和`graduation-blog-cms-react`进行展示

* 注册基本用户，之后在数据库中修改用户数据的`isAdmin`字段为`true`，授予管理员权限以进入后台管理系统，以下是示例命令

  ```bash
  mongo
  use graduation-blog
  db.users.update({"username": "你取的用户名"}, {"$set": {"isAdmin": true}})
  ```