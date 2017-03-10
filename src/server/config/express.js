let express = require('express');
let api = require('../router/api/api.config.router');
let index = require('../router/index.router');
let ejs = require('ejs');
let app = express();

module.exports = () => {
  // 设置view模板
  app.engine('html', ejs.renderFile);

  // 设置express中间件
  require('./middleware').setExpressMiddleware(app);

  // 设置express应用路由
  api(app);
  app.use('/', index);

  return app;
};