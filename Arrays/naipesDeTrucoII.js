// teste de uma variante da função naipeDeTruco

function naipeDeTruco(naipe)
{
     var cartas = ["1 de ","2 de ","3 de ","4 de ","5 de ","6 de ","7 de ","10 de ","11 de ","12 de "];

    if (naipe === "espadas" || naipe === "ouro" || naipe === "copas" || naipe === "paus")
    {
        for(var i = 0; i < 10; i++)
        {
          cartas[i]= cartas[i].concat(naipe);
        }
    }
    return cartas;
}