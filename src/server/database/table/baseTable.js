let conn = require('../mysql');

/*  通用数据表
 */
function BaseTable(name, keys) {
  this.name = name;
  this.keys = keys;
}

/*  创建表
    参数为表的字段：数组
 */
BaseTable.prototype.create = function () {
  let create = `create table if not exists ${this.name} (
      id int(11) not null auto_increment, `;
  for(let i = 0; i < this.keys.length; i++)
    create += this.keys[i] + ' varchar(200) not null, ';
  create += 'primary key (id)) ';
  create += 'ENGINE=InnoDB DEFAULT CHARSET=utf8';
  return new Promise((resolve, reject) => {
    conn.query(create, (err, res) => {
      if(err) reject(err);
      resolve(res);
    })
  })
};

/*  插入数据
    参数为表字段对应的值：数组
 */
BaseTable.prototype.insert = (records) => {
  let insertSQL = `insert into slider (url) values`;
  records.forEach((record) => {
    insertSQL += ` ('${record}'),`;
  });
  insertSQL = insertSQL.substring(0, insertSQL.length - 1) + ';';
  console.log(insertSQL);
  return new Promise((resolve, reject) => {
    conn.query(insertSQL, (err, res) => {
      if(err) reject(err);
      resolve(res);
    })
  })
};

module.exports = BaseTable;
