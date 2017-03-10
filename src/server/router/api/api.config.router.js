let router = require('express').Router();
let homeRouter = require('../../router/api/home.router');

// 为所有数据请求的API设置路由级中间件
module.exports = (app) => app.use('/api', router);

//挂载路由
homeRouter(router);