let slider = require('./slider');

let values = ['slider1.png', 'slider2.png', 'slider3.png'];


// slider.create().then(() => {
//   slider.insert(values).then(() => {
//     console.log('插入成功');
//   }).catch((err) => {
//     console.log('插入失败', err)
//   })
// });

slider.getAll().then((res) => {
  res.forEach((re) => {
    console.log(re);
  })
}).catch((err) => {
  console.log(err);
});