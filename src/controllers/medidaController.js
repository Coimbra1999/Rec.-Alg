var medidaModel = require("../models/medidaModel");

function grafico(req, res) {
    console.log(req.body);

    var graficoVar = req.body.idGraficoServer;
    console.log(graficoVar)
    
    medidaModel.grafico(graficoVar)
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

function pontosConversao(req, res) {
    console.log(req.body);

    var usuarioVar = req.body.idusuarioServer;
    var jogoVar = req.body.idjogoServer;
    var pontosConversaoVar = req.body.idpontosConversaoServer;

    console.log(pontosConversaoVar)
    console.log(usuarioVar)
    console.log(jogoVar)
    
    medidaModel.pontosConversao(jogoVar, usuarioVar, pontosConversaoVar)
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
    grafico,
    pontosConversao
}