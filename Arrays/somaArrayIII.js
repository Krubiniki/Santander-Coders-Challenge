//função que soma quatro primeiros elementos de array recebida como parâmetro

var umPeriodo = [0,1,2,3];

function lucroTotal4 (umPeriodo)
{
    var soma = 0;
    for (var i = 0; i < 4; i++)
        soma += umPeriodo[i];
    return soma;
}