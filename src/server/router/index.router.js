let path = require("path");
let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, '../../../build/index.html'));
});

module.exports = router;