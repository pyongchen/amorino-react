let homeCtrl = require('../../controller/home.controller');

module.exports = function (router) {
  router.get('/slider', homeCtrl.getSlider);
  router.get('/bottom', homeCtrl.getBottom);
  router.get('/middle', homeCtrl.getMiddle);
};