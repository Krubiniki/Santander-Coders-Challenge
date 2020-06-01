//desafio que consiste em calcular a fatorial de um número passado como parâmetro.

function fatorial(num)
{
    var res = 1;
    var count = num;
    for (var i = 0; i < count; i++)
    {
        res *= num;
        num--;
    }
    return res;
}