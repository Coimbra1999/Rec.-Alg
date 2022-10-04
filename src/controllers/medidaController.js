var medidaModel = require("../models/medidaModel");

function grafico(req, res) {
    console.log(req.body);

    var idUsuarioVar = req.body.idUsuarioServer;
    var conversao = req.body.conversaoServer;

    console.log(idUsuarioVar)
    console.log(conversao)
    
    medidaModel.grafico(idUsuarioVar, conversao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    grafico
}