var database = require("../database/config");

function grafico(idUsuarioVar, conversao) {
    var instrucao = `
    select * from pontuacao where fkJogador = ${idUsuarioVar} and fkJogo = ${conversao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico
}
