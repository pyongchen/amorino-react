let slider = require('../database/table/slider');
let bottom = require('../database/table/bottom');
let homeMiddle = require('../database/table/homeMiddle');

let sliderValue = [
  {url: 'slider1.png'},
  {url: 'slider2.png'},
  {url: 'slider3.png'}
];

let homeMiddleValue = [
  {image: 'slider1.png', title: 'Amorino', text1: '以科学的精度', text2: '衡量优雅'},
  {image: 'slider2.png', title: 'Amorino', text1: '平独具之匠心', text2: '成就典范'}
];

let bottomValue = [
  {
    code: 'code.jpg',
    name: 'Amorino',
    phone: '020-86676139',
    address: '广州市越秀区',
    allRight: 'Copyright @ 1998-2016 Amorino. All Right Reserved.'
  }
];

// slider.create().then(() => {
//   slider.insert(sliderValue).then(() => {
//     console.log('插入Slider成功');
//   }).catch((err) => {
//     console.log('插入Slider失败', err)
//   })
// });
//
// bottom.create().then(() => {
//   bottom.insert(bottomValue).then(() => {
//     console.log('插入Bottom成功')
//   }).catch((err) => {
//     console.log('插入Bottom失败', err)
//   })
// });

homeMiddle.create().then(() => {
  homeMiddle.insert(homeMiddleValue).then(() => {
    console.log('插入homeMiddle成功');
  }).catch((err) => {
    console.log('插入homeMiddle失败', err)
  })
});