let app = require('./config/express')();
let port = 8888;

app.listen(port, () => {
  console.log('server listen on ' + port);
});

// let express = require('express');
// let http = require('http');
//
// let app = express();
//
// app.use((req, res, next) => {
//   console.log('312312123');
//   // next()
// });
//
// app.use((req, res, next) => {
//   console.log('next');
// });
//
// app.use((req, res, next) => {
//   next('出错了')
//   res.end('213');
// });
//
// http.createServer(app).listen(1337);