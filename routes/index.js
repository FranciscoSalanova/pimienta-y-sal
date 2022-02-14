var express = require('express');
var router = express.Router();
const homeCont = require("../controllers/indexController");
const detailCont = require("../controllers/detailController");

/* GET home page. */
router.get('/', homeCont.indexMethod);

router.get('/detalle/:id', detailCont.detailMethod);

module.exports = router;