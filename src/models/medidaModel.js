var database = require("../database/config");

function graficoConversao(idUsuarioVar, conversao) {
    var instrucao = `
    select max(pontos) as "pontos", max(horario) as 'data' from pontuacao 
    where fkJogador = ${idUsuarioVar} and fkJogo = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoNode(idUsuarioVar, Node) {
    var instrucao = `
    select max(pontos) as "pontos", max(horario) as 'data' from pontuacao 
    where fkJogador = ${idUsuarioVar} and fkJogo = 2;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficoConversao,
    graficoNode
}
