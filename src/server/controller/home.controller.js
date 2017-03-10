let slider = require('../database/table/slider');
let bottom = require('../database/table/bottom');
let homeMiddle = require('../database/table/homeMiddle');
let sendData = require('../util/util').sendData;

exports.getSlider = (req, res) => {
  slider.getAll().then((data) => {
    sendData(res, data, 'OK');
  }).catch((err) => {
    console.log(err);
  })
};

exports.getBottom = (req, res) => {
  let lan = req.query.lang;
  bottom.getByLan(lan).then((data) => {
    sendData(res, data, 'OK');
  }).catch((err) => {
    console.log(err);
  });
};

exports.getMiddle = (req, res) => {
  homeMiddle.getAll().then((data) => {
    sendData(res, data, 'OK');
  }).catch((err) => {
    console.log(err);
  })
};