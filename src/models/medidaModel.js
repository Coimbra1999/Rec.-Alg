var database = require("../database/config");

function grafico(graficoVar) {
    var instrucao = `
    select;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontosConversao(idJogo, idUsuario, pontosConversao) {
    var instrucao = `
    insert into pontuacao value(${idJogo}, ${idUsuario}, ${pontosConversao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    grafico,
    pontosConversao
}
