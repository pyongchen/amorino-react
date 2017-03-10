let BaseType = require('./baseTable');
let conn = require('../conn');

// 主页中间的内容
function HomeMiddle() {
  let name = 'homeMiddle';
  let keys = ['image', 'title', 'text1', 'text2'];
  BaseType.call(this, name, keys);

  this.getAll = function () {
    let query = `select * from ${this.name}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  }
}

HomeMiddle.prototype = new BaseType();

HomeMiddle.prototype.constructor = HomeMiddle;

module.exports = new HomeMiddle();