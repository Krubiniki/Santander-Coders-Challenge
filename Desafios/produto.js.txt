//desafio consiste em multiplicar os elementos de uma array numérica

function produto(num)
{
    var res = 1;
    for (var i = 0; i < num.length; i++)
        res *= num[i];
    return res;
}