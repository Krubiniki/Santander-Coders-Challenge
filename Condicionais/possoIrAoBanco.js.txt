//função que diz se eu posso ir ao banco retornando true ou false através das condicionais abaixo:
// 1) não é "Sábado" ou "Domingo"
// 2) está no horário bancário: 9 às 15

function possoIrAoBanco (diaDaSemana, horaAtual){
    return ((diaDaSemana != "Sábado" && diaDaSemana != "Domingo") && (horaAtual >= 9 && horaAtual <= 15))
}