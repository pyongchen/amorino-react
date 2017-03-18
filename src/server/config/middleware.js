let session = require('express-session');
let cookieParser = require('cookie-parser');
let compression = require('compression');
let path = require('path');
let logger = require('morgan');
let fs = require('fs');
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

exports.setExpressMiddleware = (app) => {
  //设置静态文件
  app.use('/public', express.static(path.join(__dirname, '../../../build/public')));

  // 日志输出
  let accessLogStream = fs.createWriteStream(
    path.join(__dirname, '../access.log'), {flags: 'a'});
  app.use(logger('combined', {stream: accessLogStream}));

  // 压缩文件
  app.use(compression());

  //解析cookie
  app.use(cookieParser());

  // 跨域
  app.use(cors());

  //配置session
  app.use(session({
    name: 'Amorino',
    secret: 'Amorino',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 5 * 60 * 1000
    }
  }));

  // 解析url
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
};