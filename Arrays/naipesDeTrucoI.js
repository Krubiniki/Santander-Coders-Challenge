//função que retorna as cartas disponíveis do truco para o naipe dado. (Segundo o exercício as cartas que não entram no truco é a 8 e a 9)

function naipeDeTruco(naipe)
{
     var cartas = [];

    if (naipe != "espadas" && naipe != "paus" && naipe != "ouro" && naipe != "copas")
        return "Naipe inválido!";

    for (var i = 0; i < 10; i++)
    {
        if (i != 7 && i != 8)
        {
            cartas.push(i + 1 + " de " + naipe);
        }
    }
    return cartas;
}