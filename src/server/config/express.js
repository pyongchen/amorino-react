let express = require('express');
let path = require('path');
let ejs = require('ejs');
let app = express();

// 设置view模板
app.engine('html', ejs.renderFile);

//设置静态文件
app.use('/public', express.static(path.join(__dirname, '../../../build/public')));

app.get('/', (req, res) => {
  console.log('13321');
  res.sendFile(path.join(__dirname, '../../../build/index.html'))
});

module.exports = app;