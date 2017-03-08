let mysql = require('mysql');
let config = require('../config/config');
let order = require('../config/mysql-order');

let sliders = ['slider1.png','slider2.png','slider3.png'];


let conn = mysql.createConnection(config);
conn.connect((err) => {
  if(err) {
    console.log('连接失败');
  } else {
    conn.query(order.createTable('slider', ['url']), (err, res) => {
      if(err) {
        console.log(err);
      } else {
        sliders.forEach((slider) => {
          let insertSQL = `insert into slider (url) values ('${slider}');`;
          conn.query(insertSQL, (err, rows) => {
            if(err) console.log(err);
            else console.log(rows);
          })
        })
      }
    })
  }
});
