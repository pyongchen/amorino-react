let BaseTable = require('./baseTable');
let conn = require('../conn');
let lang = require('../../config/language');

// 三条记录，依次为中文，英文，西班牙语
function Bottom() {
  let keys = ['code', 'name', 'phone', 'address', 'allRight'];
  let name = 'bottom';
  BaseTable.call(this, name, keys);

  // 根据语言:Zh, En, Ee 返回对应的记录
  this.getByLan = function (lan) {
    let lanIndex = lang[lan];
    let query = `select * from ${this.name} where id=${lanIndex}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  };

  // 更新数据，输入为中文，需要进行翻译
  this.update = function (rec) {
    
  }
}


Bottom.prototype = new BaseTable();

Bottom.prototype.constructor = Bottom;

module.exports = new Bottom();