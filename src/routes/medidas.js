var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/grafico", function (req, res) {
    medidaController.grafico(req, res);
})

module.exports = router;