//função que soma todos os valores anteriores ao recebido como parâmetro

function somatoria(x = 0)
{
    var value = 0;

    for(var i = 0; i < x; i++)
        value += i;
    return value;
}