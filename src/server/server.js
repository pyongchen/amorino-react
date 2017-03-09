let app = require('./config/express');
let port = '3000';

app.listen(port, () => {
  console.log('server listen on ' + port);
});