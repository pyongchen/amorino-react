let session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

exports.setExpressMiddleware = (app) => {
  //设置静态文件
  app.use('/public', express.static(path.join(__dirname, '../../../build/public')));

  //解析cookie
  app.use(cookieParser());

  // 跨域
  app.use(cors());

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