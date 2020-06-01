//desafio é criar uma função que calcule quantos % de cada tipo de número(positivo, neutro e negativo) tem em uma array numérica

function maisMenos(num)
{
    var res = [0,0,0];

    for (var i = 0; i < num.length; i++)
    {
        if (num[i] > 0)
            res[0]++;
        else if(num[i] < 0)
            res[2]++;
        else
            res[1]++
    }

    for (var i = 0; i < 3; i++)
    {
        res[i] = res[i] / num.length;
    }
    return res;
}