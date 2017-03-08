let order = {

  /*  创建数据表:
      创建第一个参数为数据表的名字
      第二个参数为字段数组:["name","age",...]
   */
  createTable(name, keys) {
    let create = `create table if not exists ${name} (
      id int(11) not null auto_increment, `;
    for(let i = 1; i < keys.length; i++) {
      create += keys[i] + ' varchar(200) not null, ';
    }
    create += 'primary key (id)) ';
    create += 'ENGINE=InnoDB DEFAULT CHARSET=utf8';
    return create;
  },

  /*  插入数据:
      第一个参数为表的名字
      第二个参数为字段数组:["name","age",...]
   */
  insert(name ) {

  }
};

module.exports = order;

console.log(order.createTable('slider', 'url'));