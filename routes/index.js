var express = require('express');
var router = express.Router();
const homeCont = require("../controllers/indexController");

/* GET home page. */
router.get('/', homeCont.indexMethod);

module.exports = router;