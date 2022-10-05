var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/graficoConversao", function (req, res) {
    medidaController.graficoConversao(req, res);
});

router.post("/graficoNode", function (req, res) {
    medidaController.graficoNode(req, res);
})

module.exports = router;