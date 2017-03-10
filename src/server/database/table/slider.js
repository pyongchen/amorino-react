let BaseTable = require('./baseTable');
let conn = require('../conn');

function Slider() {
  let keys = ['url'];
  let name = 'slider';
  BaseTable.call(this, name, keys);
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


Slider.prototype = new BaseTable();

Slider.prototype.constructor = Slider;

module.exports = new Slider();