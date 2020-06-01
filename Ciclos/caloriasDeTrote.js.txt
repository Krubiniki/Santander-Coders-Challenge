//função que calcula a quantidade de calorias consumidas pelo número de voltas inputado no parâmetro da função
// cálculo passado: 5 calorias x número atual de volta (a cada volta a quantidade de calorias aumenta)

function caloriasDeTrote(nv)
{
    var calorias = 0;
    for(var i = 1; i <= nv; i++)
        calorias = calorias + (5 * i);
    return calorias;
}