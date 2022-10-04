var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/grafico", function (req, res) {
    medidaController.grafico(req, res);
});

router.post("/pontosConversao", function (req, res) {
    medidaController.pontosConversao(req, res);
});

module.exports = router;