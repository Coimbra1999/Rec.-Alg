var database = require("../database/config");

function grafico(idUsuarioVar, conversao, node) {
    var instrucao = `
    select * from pontuacao where fkJogador = ${idUsuarioVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico
}
