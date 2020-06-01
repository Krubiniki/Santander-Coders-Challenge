//o desafio consistia em fazer uma função que indicava se uma aula iria acontecer através de parâmetros que continham o tempo que o aluno se atrasava (5 se atrasou, -5 se adiantou, 0 chegou na hora), e a quantidade mínima de alunos para que a aula acontecesse, retornando true ou false. A função aberturas, é uma função que retorna uma array com elementos booleanos informando se cada aula dessa array aconteceu.

function acontece(chegadaAlunos, minAlunos)
{
    var alunosNaHora = 0;
    for (var i = 0; i < chegadaAlunos.length; i++)
    {
        if (chegadaAlunos[i] < 1)
            alunosNaHora++;
    }
    return alunosNaHora >= minAlunos;
}

function aberturas(chegadaAlunos, minAlunos){
    var aulasAconteceram = [];
    for (var i = 0; i < chegadaAlunos.length; i++){
        aulasAconteceram.push(acontece(chegadaAlunos[i], minAlunos))
    }
    return aulasAconteceram
}